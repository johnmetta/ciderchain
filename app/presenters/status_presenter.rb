class StatusPresenter < SimpleDelegator
  extend PresenterCollection

  def as_json
    {
      volume: volume,
      batch_id: batch_id,
      unit_id: unit_id,
      vessel_id: vessel_id,
      state_id: state_id,
      closed: closed,
      created_at: created_at,
      closed_by_id: closed_by_id
    }
  end

end
