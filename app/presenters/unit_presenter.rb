class UnitPresenter < SimpleDelegator
  extend PresenterCollection

  def as_json
    {
      id: id,
      name: name
    }
  end
end
