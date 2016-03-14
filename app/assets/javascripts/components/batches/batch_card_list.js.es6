class BatchCardDetails extends React.Component {
  render() {
    return (
      <section className='batch-card-details'>
        <ul className='list-unstyled well well-sm'>
          <ListItem data={this.props.batch.code} />
          <ListItem data={dateFormat(this.props.batch.created_at)} />
          <ListItem data={this.props.batch.current_vessel.code} />
        </ul>
        <Accordion>
          <SimpleHeader data="Measurements" />
          <SimpleMeasurementForm />
        </Accordion>
        <Accordion>
          <SimpleHeader data="Additions" />
          <SimpleAdditionForm unit_id={this.props.batch.unit_id}
                            racking_id={this.props.batch.current_racking.id}
                            callbackParent={this.handleNewAddition} />
        </Accordion>
      </section>
    )
  }

}
