class AdditiveSelector extends React.Component {
  render() {
    return (
      <SimpleSelect {...this.props} singular='additive' plural='additives' />
    )
  }
}
