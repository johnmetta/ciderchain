class Additive < ActiveRecord::Base
  has_one   :source
  has_many  :additions
end
