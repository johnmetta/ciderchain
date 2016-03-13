var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = (function (_React$Component) {
  _inherits(Accordion, _React$Component);

  function Accordion() {
    _classCallCheck(this, Accordion);

    _get(Object.getPrototypeOf(Accordion.prototype), 'constructor', this).call(this);
    this.state = {
      shown: false
    };
    this.toggle = this.toggle.bind(this);
  }

  _createClass(Accordion, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({ shown: !this.state.shown });
    }
  }, {
    key: 'render',
    value: function render() {
      var style = {
        shown: { display: 'inherit' },
        hidden: { display: 'none' }
      };
      var stateStyle = this.state.shown ? style.shown : style.hidden;
      return React.createElement(
        'section',
        { className: 'panel panel-info' },
        React.createElement(
          'div',
          { className: 'accordion-header panel-heading', onClick: this.toggle },
          this.props.children[0]
        ),
        React.createElement(
          'div',
          { className: 'panel-body', style: stateStyle },
          React.createElement(
            'div',
            { className: 'accordian-details' },
            this.props.children[1]
          )
        )
      );
    }
  }]);

  return Accordion;
})(React.Component);
