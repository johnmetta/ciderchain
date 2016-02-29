class Status < ActiveRecord::Base

  belongs_to :state
  belongs_to :unit
  belongs_to :vessel
  belongs_to :batch
  belongs_to :closed_by, class_name: Status.name

  validates :state, presence: true
  validates :volume, presence: true
  validates :unit, presence: true
  validates :vessel, presence: true
  validates :batch, presence: true

  before_create :default_volume
  after_commit  :close_previous_status

  scope :by_state, -> (state) { where(state_id: state.id) }
  scope :open, -> { where(closed: nil) }

  def base_volume
    volume * unit.factor
  end

  def close(status)
    raise ArgumentError unless status.is_a?(Status)
    self.closed = Date.today
    self.closed_by = status
    self.save
  end

  private

  def default_volume
    volume = volume.presence || batch.volume
    unit = unit.presence || batch.unit
  end

  def check_unique_status
    if batch.statuses.open.reject{|s| s.id == id}.any? && !closed
      errors.add(:closed, 'Cannot have more than one open status per batch')
    end
  end

  def close_previous_status
    unless self.closed
      batch.statuses.open.reject{|s| s.id == id}.map{|s| s.close self }
    end
  end
end
