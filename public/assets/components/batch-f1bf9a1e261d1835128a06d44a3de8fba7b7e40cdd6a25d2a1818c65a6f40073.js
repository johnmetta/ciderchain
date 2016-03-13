(function() {
  this.Batch = React.createClass({
    getInitialState: function() {
      return {
        unit: {
          name: ''
        }
      };
    },
    handleDelete: function(e) {
      e.preventDefault();
      return $.ajax({
        method: 'DELETE',
        url: "/batches/" + this.props.batch.id,
        dataType: 'JSON',
        success: (function(_this) {
          return function() {
            return _this.props.handleDeleteBatch(_this.props.batch);
          };
        })(this)
      });
    },
    render: function() {
      return React.DOM.tr(null, React.DOM.td(null, dateFormat(this.props.batch.created_at)), React.DOM.td(null, this.props.batch.name), React.DOM.td(null, this.props.batch.code), React.DOM.td(null, this.props.batch.volume), React.DOM.td(null, this.props.batch.unit_name), React.DOM.td(null, React.DOM.a({
        className: 'btn btn-danger',
        onClick: this.handleDelete
      }, 'Delete')));
    }
  });

}).call(this);
