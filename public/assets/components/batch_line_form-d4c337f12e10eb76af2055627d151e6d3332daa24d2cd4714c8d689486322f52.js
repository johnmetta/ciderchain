(function() {
  this.BatchLineForm = React.createClass({
    getInitialState: function() {
      return {
        created_at: new Date().toJSON().slice(0, 10),
        name: '',
        code: '',
        volume: '',
        unit_id: 2
      };
    },
    handleChange: function(e) {
      var name, obj;
      name = e.target.name;
      return this.setState((
        obj = {},
        obj["" + name] = e.target.value,
        obj
      ));
    },
    onChildChanged: function(e) {
      var name, obj;
      name = e.target.name;
      return this.setState((
        obj = {},
        obj["" + name] = e.target.value,
        obj
      ));
    },
    handleSubmit: function(e) {
      e.preventDefault();
      return $.post('', {
        batch: this.state
      }, (function(_this) {
        return function(data) {
          _this.props.handleNewBatch(data);
          return _this.setState(_this.getInitialState());
        };
      })(this), 'JSON');
    },
    valid: function() {
      return this.state.name && this.state.code && this.state.volume;
    },
    render: function() {
      return React.DOM.form({
        className: 'form-inline',
        onSubmit: this.handleSubmit
      }, React.DOM.div({
        className: 'form-group'
      }, React.DOM.input({
        type: 'text',
        className: 'form-control',
        placeholder: 'Created',
        name: 'created_at',
        value: this.state.created_at,
        onChange: this.handleChange
      }), React.DOM.input({
        type: 'text',
        className: 'form-control',
        placeholder: 'Name',
        name: 'name',
        value: this.state.name,
        onChange: this.handleChange
      }), React.DOM.input({
        type: 'text',
        className: 'form-control',
        placeholder: 'Code',
        name: 'code',
        value: this.state.code,
        onChange: this.handleChange
      }), React.DOM.input({
        type: 'text',
        className: 'form-control',
        placeholder: 'Volume',
        name: 'volume',
        value: this.state.volume,
        onChange: this.handleChange
      }), React.createElement(SimpleSelect, {
        singular: 'unit',
        plural: 'units',
        callbackParent: this.handleChange
      })), React.DOM.button({
        type: 'submit',
        className: 'btn btn-primary',
        disabled: !this.valid()
      }, 'Create Batch'));
    }
  });

}).call(this);
