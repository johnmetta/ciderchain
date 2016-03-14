class Snapshot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      states: []
    }
  }
  getStates() {
    $.getJSON('/states/front_page', function (result) {
      this.setState({states: result});
    }.bind(this));
  }
  componentDidMount() {
    this.getStates();
  }
  componentWillUnmount() {
    this.getStates().abort();
  }
  addBatch(batch) {
    this.getStates();
  }
  render () {
    return (
      <div className="snapshot" >
        <div className="page-header">
          <h1>Production Snapshot</h1>
        </div>
        <BatchLineForm handleNewBatch={this.addBatch} />
        <hr />
        <StateColumns states={this.state.states} />
      </div>
    )
  }
}
