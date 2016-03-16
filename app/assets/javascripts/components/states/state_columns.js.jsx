class StateColumns extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var container = React.findDOMNode(this);
    dragula([container]);
  }
  render() {
    return (
      <div className='drag-states'>
        {this.props.states.map(function(state) {
          return <StateColumn key={state.id} state={state}/>;
        })}
      </div>
    )
  }
}
