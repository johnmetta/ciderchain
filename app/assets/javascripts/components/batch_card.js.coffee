@BatchCardOld = React.createClass
  getInitialState: ->
    show: true
  getDefaultState: ->
    last_addition: @props.batch.current_racking.last_addition.name
  handleToggle: (e) ->
    e.preventDefault()
    @setState show: !@state.show
  headerName: ->
    React.DOM.div
      className: 'batch-header'
      if (@props.batch.name)
        @props.batch.name
      else
        @props.batch.code
      React.createElement VolumeBadge, value: @props.batch.volume, units: @props.batch.unit_short_name
  onChildChanged: (e) ->
    name = e.target.name
    @setState "#{ name }": e.target.value
  batchButton: ->
    React.DOM.button
      onClick: @handleToggle
      className: "btn btn-block btn-info"
      'data-toggle': 'dropdown'
      'aria-haspopup': 'true'
      'aria-expanded': 'false'
      @headerName()
  lastAddition: ->
    React.DOM.div
      className: 'last-addition'
  handleNewAddition: (data) ->
    @setState last_addition: data.target.name
  handleNewMeasurement: (data) ->
    @setState last_measurement: data.target.name
  moveState: (data) ->
    @setState the_state: data.target.name
  batchDetails: ->
    React.DOM.div
      className: 'panel panel-info'
      React.DOM.div
        className: 'panel-heading'
        onClick: @handleToggle
        @headerName()
      React.DOM.div
        className: 'panel-body'
        React.DOM.div
          className: 'batch-details'
          onClick: @handleToggle
          React.DOM.ul
            className: 'list-unstyled'
            React.DOM.li null, @props.batch.code
            React.DOM.li null, dateFormat(@props.batch.created_at)
            React.DOM.li null, @props.batch.current_vessel.code
            if (@props.batch.current_racking.last_addition.name)
              React.DOM.li null, @props.batch.current_racking.last_addition.name
        React.createElement SimpleAdditionForm, unit_id: @props.batch.unit_id, racking_id: @props.batch.current_racking.id, callbackParent: @handleNewAddition
        React.createElement SimpleMeasurementForm, unit_id: @props.batch.unit_id, racking_id: @props.batch.current_racking.id, callbackParent: @handleNewMeasurement
        React.createElement SimpleSelect, singular: 'state', plural: 'states', callbackParent: @moveState
  render: ->
    if @state.show
      @batchDetails()
    else
      @batchButton()
