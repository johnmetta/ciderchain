class VesselPresenter < SimpleDelegator
  extend PresenterCollection

  def as_json
    {
      id: id,
      type_name: type_name.humanize,
      code: code
    }
  end
end
