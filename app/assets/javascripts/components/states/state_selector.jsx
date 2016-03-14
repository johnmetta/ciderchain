class StateSelector extends React.Component {
  render() {
    return (
      <SimpleSelect {...this.props} singular='state' plural='states' />
    )
  }
}
