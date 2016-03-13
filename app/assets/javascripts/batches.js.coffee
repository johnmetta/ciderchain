# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

@BatchesOld = React.createClass
  getInitialState: ->
    batches: @props.data
    units: @props.units
  getDefaultProps: ->
    batches: []
    units: []
  addBatch: (batch) ->
    batches = React.addons.update(@state.batches, { $push: [batch] })
    @setState batches: batches
  deleteBatch: (batch) ->
    index = @state.batches.indexOf batch
    batches = React.addons.update(@state.batches, { $splice: [[index, 1]] })
    @replaceState batches: batches
  render: ->
    React.DOM.div
      className: 'batches'
      React.DOM.hr null
      React.DOM.table
        className: 'table table-bordered table-striped'
        React.DOM.thead null,
          React.DOM.tr null,
            React.DOM.th null, 'Date'
            React.DOM.th null, 'Name'
            React.DOM.th null, 'Code'
            React.DOM.th null, 'Volume'
            React.DOM.th null, 'Units'
            React.DOM.th null, 'Actions'
        React.DOM.tbody null,
          for batch in @state.batches
            React.createElement Batch, key: batch.id, batch: batch,
      React.createElement BatchLineForm, handleNewBatch: @addBatch, units: @state.units
