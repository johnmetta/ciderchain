class Vessel < ActiveRecord::Base

  has_many :rackings
  belongs_to :unit
  belongs_to :vessel_type

  validates :vessel_type_id, presence: true
  validates :volume, presence: true
  validates :unit, presence: true

  def self.types
    %i{flex_tank barrel steel tote}
  end
  def self.free
    joins(:rackings).where(rackings: { closed: nil })
  end

  def type_name
    vessel_type.name
  end

  def current_racking
    rackings.last
  end

  def open?
    !!rackings.open.none?
  end
end
