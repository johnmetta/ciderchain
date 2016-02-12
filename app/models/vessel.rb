class Vessel < ActiveRecord::Base

  has_many :states

  validates :type, presence: true
  validates :volume, presence: true

end
