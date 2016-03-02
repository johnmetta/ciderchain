# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

@StateColumns = React.createClass
  getInitialState: ->
    states: @props.data
  getDefaultProps: ->
    states: []
  render: ->
    React.DOM.div
      className: 'states'
      for state in @state.states
        React.DOM.div
          className: 'col-md-2'
          React.createElement StateColumn, key: state.id, state: state
