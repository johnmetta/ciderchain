@AdditivesSelect = React.createClass
  getInitialState: ->
    additives: []
    additive_id: @props.additive_id
  handleChange: (e) ->
    name = e.target.name
    @setState "#{ name }": e.target.value
    @props.callbackParent(e)
  componentDidMount: ->
    $.get '/additives.json', (data) =>
      @setState 'additives': data
      , 'JSON'
  render: ->
    React.DOM.select
      className: 'form-control'
      name: 'additive_id'
      value: @state.additive_id
      onChange: @handleChange
      React.DOM.option
        value: ''
        'Additive…'
      for additive in @state.additives
        key: additive.id
        React.DOM.option
          value: additive.id
          additive.name

