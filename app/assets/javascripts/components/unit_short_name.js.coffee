@UnitShortName = React.createClass
  getInitialState: ->
    name: 'Unit name'
  getDefaultProps: ->
    unit_id: 1
  componentDidMount: ->
    $.get "/units/#{@props.unit_id}.json", (data) =>
      @setState name: data.short_name
  render: ->
    React.DOM.div
      className: 'units'
      @state.name
