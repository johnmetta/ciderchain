class Unit < ActiveRecord::Base

  belongs_to  :base, class_name: 'Unit'

  validates :name, presence: true, uniqueness: true
  validates :dimensions, presence: true
  validates :factor, presence: true

  def self.liter
    Unit.find_by_name 'Liter'
  end
  def self.gallon
    Unit.find_by_name 'Gallon'
  end
  def self.barrel
    Unit.find_by_name 'Barrel'
  end
end

