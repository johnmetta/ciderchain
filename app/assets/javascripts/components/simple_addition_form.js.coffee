@SimpleAdditionForm = React.createClass
  getInitialState: ->
    edit: false
    unit_id: @props.unit_id
    racking_id: @props.racking_id
  onChildChanged: (e) ->
    name = e.target.name
    @setState "#{ name }": e.target.value
  handleChange: (e) ->
    name = e.target.name
    @setState "#{ name }": e.target.value
  handleToggle: (e) ->
    e.preventDefault()
    @setState edit: !@state.edit
  addButton: ->
    React.DOM.a
      className: "btn btn-success"
      onClick: @handleToggle
      'Add'
  handleSubmit: (e) ->
    e.preventDefault()
    @setState 'edit': null
    $.post '/additions', { addition: @state }, (data) =>
      @props.callbackParent data
      @setState @getInitialState()
    , 'JSON'
  addForm: ->
    React.DOM.form
      className: 'form-inline'
      onSubmit: @handleSubmit
      React.DOM.div
        className: 'form-group'
        React.createElement AdditivesSelect, additive_id: @props.additive_id, callbackParent: @handleChange
        React.createElement SourcesSelect, source_id: @props.source_id, callbackParent: @handleChange
        React.DOM.input
          className: 'form-control'
          type: 'text'
          name: 'amount'
          placeholder: 'Amount'
          value: @state.amount
          onChange: @handleChange
        React.createElement UnitsSelect, unit_id: @props.unit_id, callbackParent: @handleChange
        React.DOM.button
          type: 'submit'
          className: 'btn btn-primary'
          disabled: !@valid()
          'Add'
  valid: ->
    @state.unit_id && @state.amount && @state.additive_id
  render: ->
    if @state.edit
      @addForm()
    else
      @addButton()
