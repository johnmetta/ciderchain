class State < ActiveRecord::Base

  has_many    :statuses

  def self.front_page
    State.all.first(6)
  end

  def total_volume
    statuses.open.map(&:base_volume).sum
  end

  def batches
    statuses.open.map(&:batch)
  end

end
