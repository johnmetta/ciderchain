class VesselSelector extends React.Component {
  render() {
    return (
      <SimpleSelect {...this.props} singular='vessel' plural='vessels' />
    )
  }
}
