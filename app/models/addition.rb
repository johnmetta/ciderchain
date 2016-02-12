class Addition < ActiveRecord::Base

  belongs_to  :state

  validates :name, presence: true
  validates :amount, presence: true
end
