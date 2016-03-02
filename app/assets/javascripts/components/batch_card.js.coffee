@BatchCard = React.createClass
  render: ->
    React.DOM.button
      className: 'btn btn-primary'
      type: 'button'
      React.DOM.p
        @props.batch.name

