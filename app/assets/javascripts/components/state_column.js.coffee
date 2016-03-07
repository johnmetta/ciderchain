@StateColumn = React.createClass
  render: ->
    React.DOM.div
      className: 'col-md-2'
      React.DOM.div
        className: 'btn btn-block btn-primary btn-lg'
        @props.state.name
        React.createElement VolumeBadge, unit_id: 1, volume: @props.state.total_volume
      for batch in @props.state.batches
        React.createElement BatchCard, key: batch.id, batch: batch

