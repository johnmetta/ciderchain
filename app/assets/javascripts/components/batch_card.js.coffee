@BatchCard = React.createClass
  getInitialState: ->
    show: true
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
      React.createElement VolumeBadge, unit_id: @props.batch.unit_id, volume: @props.batch.volume
  batchButton: ->
    React.DOM.button
      onClick: @handleToggle
      className: "btn btn-block btn-info"
      'data-toggle': 'dropdown'
      'aria-haspopup': 'true'
      'aria-expanded': 'false'
      @headerName()
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
            if(@props.batch.name)
              React.DOM.li null, @props.batch.code
            React.DOM.li null, dateFormat(@props.batch.created_at)
            React.DOM.li null, @props.batch.current_vessel.code
        React.createElement SimpleAdditionForm, unit_id: @props.batch.unit_id, racking: @props.batch.current_racking
  render: ->
    if @state.show
      @batchDetails()
    else
      @batchButton()
