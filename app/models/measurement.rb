class Measurement < ActiveRecord::Base

  belongs_to  :state

  validates :name, presence: true
  validates :value, presence: true

end
