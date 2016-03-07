class Addition < ActiveRecord::Base

  belongs_to  :racking
  belongs_to  :unit

  validates :value, presence: true
  validates :racking, presence: true
  validates :unit, presence: true
end
