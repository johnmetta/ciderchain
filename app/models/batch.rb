class Batch < ActiveRecord::Base

  has_many  :states, dependent: :destroy
  has_many  :additions, dependent: :destroy
  has_many  :measurements, dependent: :destroy

  validates :code, presence: true
  validates :volume, presence: true

end
