module StatusesHelper
  def get_batch_statuses_for_select(batch)
    batch.statuses.map{|s| [s.id, s.display_name]}
  end
end
