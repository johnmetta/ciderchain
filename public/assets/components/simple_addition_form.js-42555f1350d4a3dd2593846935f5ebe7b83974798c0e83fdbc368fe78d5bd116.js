var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleAdditionForm = (function (_React$Component) {
  _inherits(SimpleAdditionForm, _React$Component);

  function SimpleAdditionForm(props) {
    _classCallCheck(this, SimpleAdditionForm);

    _get(Object.getPrototypeOf(SimpleAdditionForm.prototype), 'constructor', this).call(this, props);
    this.state = {
      edit: false,
      unit_id: this.props.unit_id,
      racking_id: this.props.racking_id
    };
  }

  _createClass(SimpleAdditionForm, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'section',
        null,
        React.createElement(SimpleSelect, { singular: 'additive', plural: 'additives' }),
        React.createElement(SimpleSelect, { singular: 'source', plural: 'sources' }),
        React.createElement('input', { className: 'form-control',
          type: 'text',
          name: 'amount',
          placeholder: 'Amount',
          value: this.state.amount }),
        React.createElement(SimpleSelect, { singular: 'unit', plural: 'units' }),
        React.createElement(
          'button',
          { className: 'btn btn-primary',
            type: 'submit' },
          'Save'
        )
      );
    }
  }]);

  return SimpleAdditionForm;
})(React.Component);
