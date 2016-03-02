@BatchLineForm = React.createClass
  getInitialState: ->
    created_at: new Date().toJSON().slice(0,10)
    name: ''
    code: ''
    volume: ''
  handleChange: (e) ->
    name = e.target.name
    @setState "#{ name }": e.target.value
  handleSubmit: (e) ->
    e.preventDefault()
    $.post '', { batch: @state }, (data) =>
      @props.handleNewBatch data
      @setState @getInitialState()
    , 'JSON'
  valid: ->
    @state.name && @state.code && @state.volume
  render: ->
    React.DOM.form
      className: 'form-inline'
      onSubmit: @handleSubmit
      React.DOM.div
        className: 'form-group'
        React.DOM.input
          type: 'text'
          className: 'form-control'
          placeholder: 'Created'
          name: 'created_at'
          value: @state.created_at
          onChange: @handleChange
        React.DOM.input
          type: 'text'
          className: 'form-control'
          placeholder: 'Name'
          name: 'name'
          value: @state.name
          onChange: @handleChange
        React.DOM.input
          type: 'text'
          className: 'form-control'
          placeholder: 'Code'
          name: 'code'
          value: @state.code
          onChange: @handleChange
        React.DOM.input
          type: 'text'
          className: 'form-control'
          placeholder: 'volume'
          name: 'volume'
          value: @state.volume
          onChange: @handleChange
      React.DOM.button
        type: 'submit'
        className: 'btn btn-primary'
        disabled: !@valid()
        'Create Batch'
