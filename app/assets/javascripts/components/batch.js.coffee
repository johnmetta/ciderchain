@Batch = React.createClass
  getInitialState: ->
    { unit: { name: '' } }
  handleDelete: (e) ->
    e.preventDefault()
    $.ajax
      method: 'DELETE'
      url: "/batches/#{ @props.batch.id }"
      dataType: 'JSON'
      success: () =>
        @props.handleDeleteBatch @props.batch
  render: ->
    React.DOM.tr null,
      React.DOM.td null, @props.batch.created_at
      React.DOM.td null, @props.batch.name
      React.DOM.td null, @props.batch.code
      React.DOM.td null, @props.batch.volume
      React.DOM.td null, @props.batch.unit_id
      React.DOM.td null,
        React.DOM.a
          className: 'btn btn-danger'
          onClick: @handleDelete
          'Delete'
