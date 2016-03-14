class SourceSelector extends React.Component {
  render() {
    return (
      <SimpleSelect {...this.props} singular='source' plural='sources' />
    )
  }
}
