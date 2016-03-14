class UnitSelector extends React.Component {
  render() {
    return (
      <SimpleSelect {...this.props} singular='unit' plural='units' />
    )
  }
}
