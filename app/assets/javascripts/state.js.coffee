@State = React.createClass
  render: ->
    React.DOM.div
      className: 'col-md-2'
      React.DOM.h2
        @props.state.name
