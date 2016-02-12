class State < ActiveRecord::Base

  belongs_to  :batch
  belongs_to  :vessel
  has_many    :additions
  has_many    :measurements

end
