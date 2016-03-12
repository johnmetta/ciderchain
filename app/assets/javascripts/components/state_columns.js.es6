class StateColumns extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='states'>
        {this.props.data.map(function(state) {
          return <StateColumn key={state.id} state={state}/>;
        })}
      </div>
    )
  }
}
