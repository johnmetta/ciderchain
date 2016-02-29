class Status < ActiveRecord::Base

  belongs_to :state
  belongs_to :unit
  belongs_to :vessel
  belongs_to :batch

  validates :state, presence: true
  validates :volume, presence: true
  validates :unit, presence: true
  validates :vessel, presence: true
  validates :batch, presence: true

  before_create :default_volume

  scope :by_state, -> (state) { where(state_id: state.id) }
  scope :open, -> { where(closed: nil) }

  def base_volume
    volume * unit.factor
  end

  def close
    self.closed = Date.today
    self.save
  end

  private

  def default_volume
    volume = volume.presence || batch.volume
    unit = unit.presence || batch.unit
  end
end
