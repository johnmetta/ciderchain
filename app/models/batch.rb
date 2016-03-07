class Batch < ActiveRecord::Base

  has_many  :rackings, dependent: :destroy
  belongs_to :unit
  has_one :source

  validates :code, presence: true
  validates :volume, presence: true
  validates :unit, presence: true
  validate :unique_racking

  def self.default_code(designator='C')
    [Time.now.year, designator.to_s.upcase, next_batch_number].join
  end

  def self.next_batch_number
    sprintf '%04d', this_year.count+1
  end

  def self.this_year
    Batch.where('created_at > ? and created_at < ?', Time.now.beginning_of_year, Time.now.end_of_year)
  end

  def days_in
    days = (Date.today - created_at.to_date).to_i
    days > 0 ? days : 0
  end

  def current_racking
    rackings.last
  end

  private

  def unique_racking
    if rackings.open.many?
      errors.add(:racking, 'can only have one open racking')
    end
  end

end
