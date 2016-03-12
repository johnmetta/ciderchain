class BatchCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({shown: !this.state.shown});
  }
  render() {
    let style = {
      shown: {
        display: 'inherit'
      },
      hidden: {
        display: 'none'
      }
    }
    let stateStyle = this.state.shown ? style.shown : style.hidden;
    return (
      <section className='panel panel-info'>
        <div className='batch-header panel-heading' onClick={this.toggle} >
          <VolumeBadge value={this.props.batch.volume} units={this.props.batch.unit_short_name}/>
          <BatchName batch={this.props.batch}/>
        </div>
        <div className='panel-body' style={stateStyle}>
          <div className='batch-details' onClick={this.handleToggle}>
            <ul className='list-unstyled'>
              <ListItem data={this.props.batch.code} />
            </ul>
          </div>
        </div>
      </section>
    )
  }

}
