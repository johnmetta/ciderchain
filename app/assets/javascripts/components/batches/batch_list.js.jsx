class BatchList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listStyle = {
      minHeight: '100px'
    };
    let thisId = 'state-' + this.props.state.id;
    return (
      <div id={thisId} className='dragula-container' style={listStyle}>
        {this.props.state.batches.map(function(batch) {
          return <BatchCard key={batch.id} batch={batch} />;
        })}
      </div>
    )
  }
}
