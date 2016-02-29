class Vessel < ActiveRecord::Base

  has_many :statuses
  belongs_to :unit
  belongs_to :vessel_type

  validates :vessel_type_id, presence: true
  validates :volume, presence: true
  validates :unit, presence: true

  def self.types
    %i{flex_tank barrel steel tote}
  end

  def type_name
    vessel_type.name
  end
end
