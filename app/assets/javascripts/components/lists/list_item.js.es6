class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li>{this.props.data}</li>
  }
}
