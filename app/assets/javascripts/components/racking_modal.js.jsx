class RackingModal extends React.Component {
  constructor(props) {
    super(props);
  }

  onAccept() {
    this.ajaxRequest();
  }
  ajaxRequest() {
    $.ajax({
      url: '/rackings',
      type: 'POST',
      dataType: 'json',
      data: {
        racking: {
          batch_id: this.props.data.batch.id,
          old_state_id: this.props.data.source.id,
          state_id: this.props.data.target.id,
          dragged: true
        }
      },
      success: function (data) {
        alert(data);
      }.bind(this)
    });
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen} >
        <h1>Sure?</h1>
        <button type="button" className="btn btn-primary" onClick={this.onAccept}>Yes</button>
      </Modal>
    )
  }
}
