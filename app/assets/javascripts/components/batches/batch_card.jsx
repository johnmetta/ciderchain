class BatchCard extends React.Component {
  render() {
    return (
      <Accordion>
        <BatchCardHeader batch={this.props.batch} />
        <BatchCardDetails batch={this.props.batch} />
      </Accordion>
    )
  }

}
