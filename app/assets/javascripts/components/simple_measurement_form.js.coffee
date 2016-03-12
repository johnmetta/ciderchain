@SimpleMeasurementForm = React.createClass
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
  handleSubmit: (e) ->
    e.preventDefault()
    @setState 'edit': null
    $.post '/measurements', { measurement: @state }, (data) =>
      @props.callbackParent data
      @setState @getInitialState()
    , 'JSON'
  addButton: ->
    React.DOM.a
      className: "btn btn-success"
      onClick: @handleToggle
      'Measure'
  addForm: ->
    React.DOM.form
      className: 'form-inline'
      onSubmit: @handleSubmit
      React.DOM.div
        className: 'form-group'
        React.createElement SimpleSelect, singular: 'property', plural: 'properties', callbackParent: @handleChange
        React.DOM.input
          className: 'form-control'
          type: 'text'
          name: 'value'
          placeholder: 'Value'
          value: @state.value
          onChange: @handleChange
        React.createElement SimpleSelect, singular: 'unit', plural: 'units', callbackParent: @handleChange
        React.DOM.button
          type: 'submit'
          className: 'btn btn-primary'
          disabled: !@valid()
          'Add'
  valid: ->
    @state.property_id && @state.value
  render: ->
    if @state.edit
      @addForm()
    else
      @addButton()
