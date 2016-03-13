(function() {
  this.Batches = React.createClass({
    getInitialState: function() {
      return {
        batches: this.props.data,
        units: this.props.units
      };
    },
    getDefaultProps: function() {
      return {
        batches: [],
        units: []
      };
    },
    addBatch: function(batch) {
      var batches;
      batches = React.addons.update(this.state.batches, {
        $push: [batch]
      });
      return this.setState({
        batches: batches
      });
    },
    deleteBatch: function(batch) {
      var batches, index;
      index = this.state.batches.indexOf(batch);
      batches = React.addons.update(this.state.batches, {
        $splice: [[index, 1]]
      });
      return this.replaceState({
        batches: batches
      });
    },
    render: function() {
      var batch;
      return React.DOM.div({
        className: 'batches'
      }, React.DOM.hr(null), React.DOM.table({
        className: 'table table-bordered table-striped'
      }, React.DOM.thead(null, React.DOM.tr(null, React.DOM.th(null, 'Date'), React.DOM.th(null, 'Name'), React.DOM.th(null, 'Code'), React.DOM.th(null, 'Volume'), React.DOM.th(null, 'Units'), React.DOM.th(null, 'Actions'))), React.DOM.tbody(null, (function() {
        var i, len, ref, results;
        ref = this.state.batches;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          batch = ref[i];
          results.push(React.createElement(Batch, {
            key: batch.id,
            batch: batch,
            handleDeleteBatch: this.deleteBatch
          }));
        }
        return results;
      }).call(this))), React.createElement(BatchLineForm, {
        handleNewBatch: this.addBatch,
        units: this.state.units
      }));
    }
  });

}).call(this);
