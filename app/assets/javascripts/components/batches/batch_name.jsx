class BatchName extends React.Component {
  constructor(props) {
    super(props);
  }
  batchName() {
    if(this.props.batch.name)
      return this.props.batch.name;
    else
      return this.props.batch.code;
  }
  render() {
    return <div className='batch-name'>{this.batchName()}</div>;
  }
}
