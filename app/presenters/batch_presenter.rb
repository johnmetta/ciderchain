class BatchPresenter < SimpleDelegator
  extend PresenterCollection

  def as_json
    {
      id: id,
      name: name.try(:humanize),
      code: code,
      created_at: created_at,
      days_in: days_in,
      volume: volume,
      unit_id: unit_id,
      current_status: StatusPresenter.new(current_status).as_json,
      current_vessel: VesselPresenter.new(current_status.vessel).as_json
    }
  end
end
