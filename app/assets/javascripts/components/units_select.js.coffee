@UnitsSelect = React.createClass
  handleChange: (e) ->
    name = e.target.name
    @setState "#{ name }": e.target.value
    @props.callbackParent(e)
  render: ->
    React.DOM.select
      className: 'form-control'
      name: 'unit_id'
      value: @props.unit_id
      onChange: @handleChange
      for unit in @props.units
        React.DOM.option
          value: unit.id
          unit.name

