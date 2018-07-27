class StateColumn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='col-md-2'>
        <div className='btn btn-block btn-primary btn-lg'>
          {capitalizeFirstLetter(this.props.state.name)}
          <VolumeBadge value={this.props.state.total_volume} units={this.props.state.units}/>
        </div>
        <BatchList {...this.props} />
      </div>
    )
  }
}
