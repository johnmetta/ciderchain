class Measurement < ActiveRecord::Base

  belongs_to  :status
  belongs_to  :unit

  validates :name, presence: true
  validates :value, presence: true
  validates :unit, presence: true

end
