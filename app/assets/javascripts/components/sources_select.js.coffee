@SourcesSelect = React.createClass
  getInitialState: ->
    sources: []
    source_id: @props.source_id
  handleChange: (e) ->
    name = e.target.name
    @setState "#{ name }": e.target.value
    @props.callbackParent(e)
  componentDidMount: ->
    $.get '/sources.json', (data) =>
      @setState 'sources': data
      , 'JSON'
  render: ->
    React.DOM.select
      className: 'form-control'
      name: 'source_id'
      value: @state.source_id
      onChange: @handleChange
      React.DOM.option
        value: ''
        'Source…'
      for source in @state.sources
        key: source.id
        React.DOM.option
          value: source.id
          source.name
