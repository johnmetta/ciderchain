var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Batches = (function (_React$Component) {
  _inherits(Batches, _React$Component);

  function Batches(props) {
    _classCallCheck(this, Batches);

    _get(Object.getPrototypeOf(Batches.prototype), 'constructor', this).call(this, props);
    this.state = {
      batches: this.props.batches
    };
    this.addBatch = this.addBatch.bind(this);
    this.deleteBatch = this.deleteBatch.bind(this);
  }

  _createClass(Batches, [{
    key: 'addBatch',
    value: function addBatch(batch) {
      var batches = this.state.batches.slice();
      batches.push(batch);
      this.setState({ batches: batches });
    }
  }, {
    key: 'deleteBatch',
    value: function deleteBatch(batch) {
      var batches = this.state.batches.slice();
      var index = this.state.batches.indexOf(batch);
      batches.splice(index, 1);
      this.setState({ batches: batches });
    }
  }, {
    key: 'render',
    value: function render() {
      var rows = [];
      this.state.batches.map(function (batch) {
        rows.push(React.createElement(Batch, { key: batch.id, handleDeleteBatch: this.deleteBatch, batch: batch }));
      }, this);
      return React.createElement(
        'div',
        { className: 'batches' },
        React.createElement(BatchLineForm, { handleNewBatch: this.addBatch }),
        React.createElement('hr', null),
        React.createElement(
          'table',
          { className: 'table table-bordered table-striped' },
          React.createElement(
            'thead',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                null,
                'Date'
              ),
              React.createElement(
                'td',
                null,
                'Name'
              ),
              React.createElement(
                'td',
                null,
                'Code'
              ),
              React.createElement(
                'td',
                null,
                'Volume'
              ),
              React.createElement(
                'td',
                null,
                'Units'
              ),
              React.createElement(
                'td',
                null,
                'Actions'
              )
            )
          ),
          React.createElement(
            'tbody',
            null,
            rows
          )
        )
      );
    }
  }]);

  return Batches;
})(React.Component);
