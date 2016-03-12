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
      unit_short_name: unit.short_name,
      base_volume: unit == Unit.liter ? volume : (volume*unit.factor).round,
      current_racking: RackingPresenter.new(current_racking).as_json,
      current_vessel: VesselPresenter.new(current_racking.vessel).as_json
    }
  end
end
