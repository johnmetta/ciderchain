class BatchCardHeader extends React.Component {
  render() {
    return (
      <section className='batch-card-header'>
        <VolumeBadge value={this.props.batch.volume} units={this.props.batch.unit.short_name}/>
        <BatchName batch={this.props.batch}/>
      </section>
    )
  }
}
