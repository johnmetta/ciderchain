@StateColumn = React.createClass
  render: ->
    React.DOM.div
      className: 'state-column'
      React.DOM.div
        className: 'state-column-header'
        @props.state.name
      React.DOM.div
        className: 'state-column-details'
        @props.state.total_volume
        @props.state.units
        for batch in @props.state.batches
          React.createElement BatchCard, key: batch.id, batch: batch

