class SimpleSelect extends React.Component {
  constructor() {
    super();
    this.state = {
      values: []
    };
  }
  handleChange(e) {
    this.callbackParent(e);
  }
  componentDidMount() {
    this.serverRequest = $.getJSON(this.props.plural, function (result) {
      this.setState({values: result});
    }.bind(this));
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }
  render() {
    return (
      <select className='form-control'
        name="{this.props.singular}_id"
        value={this.props.current_value}
        onChange={this.handleChange}>
        <option value=''>{capitalizeFirstLetter(this.props.singular)}</option>
        {this.state.values.map(function(item) {
          return <option key={item.id} value={item.id}>{item.name}</option>
        })}
      </select>
    )

  }
}
