class VolumeBadge extends React.Component {
  render() {
    return (
      <div className='badge pull-right'>
        {this.props.value}
        {this.props.units}
      </div>
    );
  }
}

