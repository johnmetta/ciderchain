import Badge from 'material-ui/lib/badge';
class VolumeBadge extends React.Component {
  render() {
    let content = this.props.value.toString() + this.props.units;
    return (
      <Badge>
        badgeContent={content}
        secondary={true}
        badgeStyle={{top: 12, right: 12}}
      </Badge>
    );
  }
}

