@UnitsSelect = React.createClass
  getInitialState: ->
    units: []
    unit_id: @props.unit_id
  handleChange: (e) ->
    name = e.target.name
    @setState "#{ name }": e.target.value
    @props.callbackParent(e)
  componentDidMount: ->
    $.get '/units.json', (data) =>
      @setState 'units': data
      , 'JSON'
  render: ->
    React.DOM.select
      className: 'form-control'
      name: 'unit_id'
      value: @state.unit_id
      onChange: @handleChange
      for unit in @state.units
        key: unit.id
        React.DOM.option
          value: unit.id
          unit.name

