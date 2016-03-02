class Unit < ActiveRecord::Base

  belongs_to  :base, class_name: 'Unit'

  validates :name, presence: true, uniqueness: true
  validates :factor, presence: true

  def self.liter
    Unit.find_by_name 'liter'
  end
  def self.gallon
    Unit.find_by_name 'gallon'
  end
  def self.barrel
    Unit.find_by_name 'barrel'
  end
end

