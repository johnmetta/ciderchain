@SimpleAdditionForm = React.createClass
  getInitialState: ->
    edit: false
  getDefaultState: ->
    racking_id: @props.racking.volume
    unit_id: @props.unit_id
    additive_id: ''
  onChildChanged: (e) ->
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
  addForm: ->
    React.DOM.form
      className: 'form-inline'
      onSubmit: @handleSubmit
      React.DOM.div
        className: 'form-group'
      React.DOM.input
        className: 'form-control'
        type: 'text'
        ref: 'amount'
      React.createElement UnitsSelect, unit_id: @props.unit_id, units: @state.units
  setUnits: (data) ->
    @setState 'units': data
  componentDidMount: ->
    $.get '/units', (data) =>
      @setUnits data
      , 'JSON'
  render: ->
    if @state.edit
      @addForm()
    else
      @addButton()
