@VolumeBadge = React.createClass
  getInitialState: ->
    volume: ''
    unit_id: '1'
    unit_name: 'liters'
    unit_short_name: 'l'
  componentDidMount: ->
    $.get "/units/#{@props.unit_id}.json", (data) =>
      @setState unit_name: data.name
      @setState unit_short_name: data.short_name
  render: ->
    React.DOM.div
      className: 'badge pull-right'
      @props.volume
      @state.unit_short_name
