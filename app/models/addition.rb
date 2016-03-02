class Addition < ActiveRecord::Base

  belongs_to  :batch
  belongs_to  :status
  belongs_to  :unit

  validates :name, presence: true
  validates :value, presence: true
  validates :batch, presence: true
  validates :status, presence: true
  validates :unit, presence: true
end
