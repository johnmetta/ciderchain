@SimpleAdditionForm = React.createClass
  getInitialState: ->
    edit: true
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
  handleSubmit: (e) ->
    e.preventDefault()
    @setState 'edit': null
    $.post '/additions', { addition: @state }, (data) =>
      @props.callbackParent data
      @setState @getInitialState()
    , 'JSON'
  addButton: ->
    React.DOM.a
      className: "btn btn-success"
      onClick: @handleToggle
      'Add'
  addForm: ->
    React.DOM.form
      className: 'form-inline'
      onSubmit: @handleSubmit
      React.DOM.div
        className: 'form-group'
        React.createElement SimpleSelect, singular: 'additive', plural: 'additives', callbackParent: @handleChange
        React.createElement SimpleSelect, singular: 'source', plural: 'sources', callbackParent: @handleChange
        React.DOM.input
          className: 'form-control'
          type: 'text'
          name: 'amount'
          placeholder: 'Amount'
          value: @state.amount
          onChange: @handleChange
        React.createElement SimpleSelect, singular: 'unit', plural: 'units', callbackParent: @handleChange
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
