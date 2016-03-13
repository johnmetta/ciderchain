class SimpleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      formName: this.props.singular + "_id"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.callbackParent(e);
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
        name={this.state.formName}
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
