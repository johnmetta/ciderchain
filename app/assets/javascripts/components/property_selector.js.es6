class PropertySelector extends React.Component {
  render() {
    return (
      <SimpleSelect {...this.props} singular='property' plural='properties' />
    )
  }
}
