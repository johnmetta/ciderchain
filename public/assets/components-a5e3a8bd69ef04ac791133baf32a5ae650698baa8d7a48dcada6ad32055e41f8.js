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
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BatchButton = (function (_React$Component) {
  _inherits(BatchButton, _React$Component);

  function BatchButton(props) {
    _classCallCheck(this, BatchButton);

    _get(Object.getPrototypeOf(BatchButton.prototype), 'constructor', this).call(this, props);
  }

  _createClass(BatchButton, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'button',
        { className: 'btn btn-block btn-info',
          'data-toggle': 'dropdown',
          'aria-haspopup': 'true',
          'aria-expanded': 'false',
          onClick: this.props.callbackParent },
        React.createElement(
          'div',
          { className: 'batch-header' },
          React.createElement(VolumeBadge, { value: this.props.batch.volume, units: this.props.batch.unit_short_name }),
          React.createElement(BatchName, { batch: this.props.batch })
        )
      );
    }
  }]);

  return BatchButton;
})(React.Component);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BatchCard = (function (_React$Component) {
  _inherits(BatchCard, _React$Component);

  function BatchCard() {
    _classCallCheck(this, BatchCard);

    _get(Object.getPrototypeOf(BatchCard.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(BatchCard, [{
    key: "render",
    value: function render() {
      return React.createElement(
        Accordion,
        null,
        React.createElement(BatchCardHeader, { batch: this.props.batch }),
        React.createElement(BatchCardDetails, { batch: this.props.batch })
      );
    }
  }]);

  return BatchCard;
})(React.Component);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BatchCardHeader = (function (_React$Component) {
  _inherits(BatchCardHeader, _React$Component);

  function BatchCardHeader() {
    _classCallCheck(this, BatchCardHeader);

    _get(Object.getPrototypeOf(BatchCardHeader.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(BatchCardHeader, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'section',
        { className: 'batch-card-header' },
        React.createElement(VolumeBadge, { value: this.props.batch.volume, units: this.props.batch.unit_short_name }),
        React.createElement(BatchName, { batch: this.props.batch })
      );
    }
  }]);

  return BatchCardHeader;
})(React.Component);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BatchCardDetails = (function (_React$Component) {
  _inherits(BatchCardDetails, _React$Component);

  function BatchCardDetails() {
    _classCallCheck(this, BatchCardDetails);

    _get(Object.getPrototypeOf(BatchCardDetails.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(BatchCardDetails, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'section',
        { className: 'batch-card-details' },
        React.createElement(
          'ul',
          { className: 'list-unstyled well well-sm' },
          React.createElement(ListItem, { data: this.props.batch.code }),
          React.createElement(ListItem, { data: dateFormat(this.props.batch.created_at) }),
          React.createElement(ListItem, { data: this.props.batch.current_vessel.code })
        ),
        React.createElement(
          Accordion,
          null,
          React.createElement(SimpleHeader, { data: 'Measurements' }),
          React.createElement(SimpleMeasurementForm, null)
        ),
        React.createElement(
          Accordion,
          null,
          React.createElement(SimpleHeader, { data: 'Additions' }),
          React.createElement(SimpleAdditionForm, { unit_id: this.props.batch.unit_id,
            racking_id: this.props.batch.current_racking.id,
            callbackParent: this.handleNewAddition })
        )
      );
    }
  }]);

  return BatchCardDetails;
})(React.Component);
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BatchDetails = (function (_React$Component) {
  _inherits(BatchDetails, _React$Component);

  function BatchDetails(props) {
    _classCallCheck(this, BatchDetails);

    _get(Object.getPrototypeOf(BatchDetails.prototype), "constructor", this).call(this, props);
  }

  return BatchDetails;
})(React.Component);
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
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BatchName = (function (_React$Component) {
  _inherits(BatchName, _React$Component);

  function BatchName(props) {
    _classCallCheck(this, BatchName);

    _get(Object.getPrototypeOf(BatchName.prototype), 'constructor', this).call(this, props);
  }

  _createClass(BatchName, [{
    key: 'batchName',
    value: function batchName() {
      if (this.props.batch.name) return this.props.batch.name;else return this.props.batch.code;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'batch-name' },
        this.batchName()
      );
    }
  }]);

  return BatchName;
})(React.Component);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListAddressElement = (function (_React$Component) {
  _inherits(ListAddressElement, _React$Component);

  function ListAddressElement(props) {
    _classCallCheck(this, ListAddressElement);

    _get(Object.getPrototypeOf(ListAddressElement.prototype), 'constructor', this).call(this, props);
  }

  _createClass(ListAddressElement, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'li',
        { className: this.props.className },
        React.createElement(
          'a',
          { href: this.props.href },
          capitalizeFirstLetter(this.props.text)
        )
      );
    }
  }]);

  return ListAddressElement;
})(React.Component);

ListAddressElement.defaultProps = { className: 'list-address-element' };
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = (function (_React$Component) {
  _inherits(ListItem, _React$Component);

  function ListItem(props) {
    _classCallCheck(this, ListItem);

    _get(Object.getPrototypeOf(ListItem.prototype), "constructor", this).call(this, props);
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        null,
        this.props.data
      );
    }
  }]);

  return ListItem;
})(React.Component);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = (function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar(props) {
    _classCallCheck(this, NavBar);

    _get(Object.getPrototypeOf(NavBar.prototype), 'constructor', this).call(this, props);
  }

  _createClass(NavBar, [{
    key: 'logoutLink',
    value: function logoutLink() {
      if (this.props.current_user) return React.createElement(
        'a',
        { href: '/logout' },
        'Logout'
      );else return React.createElement(
        'a',
        { href: '/login' },
        'Login'
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'nav',
        { className: 'navbar navbar-default navbar-fixed-top' },
        React.createElement(
          'div',
          { className: 'container-fluid' },
          React.createElement(
            'div',
            { className: 'navbar-header' },
            React.createElement(
              'a',
              { className: 'navbar-brand', href: this.props.home_link },
              this.props.home_name
            )
          ),
          React.createElement(
            'div',
            { className: 'navbar-collapse collapse' },
            React.createElement(
              'ul',
              { className: 'nav navbar-nav' },
              this.props.links.map(function (link) {
                return React.createElement(ListAddressElement, { href: link, text: link, key: link });
              })
            ),
            React.createElement(
              'div',
              { className: 'navbar-text navbar-right' },
              this.logoutLink()
            )
          )
        )
      );
    }
  }]);

  return NavBar;
})(React.Component);

NavBar.defaultProps = { home_link: '/', home_name: 'Home', links: ['batches', 'rackings', 'vessels', 'measurements', 'additions'] };
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
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleHeader = (function (_React$Component) {
  _inherits(SimpleHeader, _React$Component);

  function SimpleHeader() {
    _classCallCheck(this, SimpleHeader);

    _get(Object.getPrototypeOf(SimpleHeader.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SimpleHeader, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'simple-header' },
        this.props.data
      );
    }
  }]);

  return SimpleHeader;
})(React.Component);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleMeasurementForm = (function (_React$Component) {
  _inherits(SimpleMeasurementForm, _React$Component);

  function SimpleMeasurementForm(props) {
    _classCallCheck(this, SimpleMeasurementForm);

    _get(Object.getPrototypeOf(SimpleMeasurementForm.prototype), 'constructor', this).call(this, props);
    this.state = {
      edit: false,
      unit_id: this.props.unit_id,
      racking_id: this.props.racking_id
    };
  }

  _createClass(SimpleMeasurementForm, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'section',
        null,
        React.createElement(SimpleSelect, { singular: 'property', plural: 'properties' }),
        React.createElement(SimpleSelect, { singular: 'source', plural: 'sources' }),
        React.createElement('input', { className: 'form-control',
          type: 'text',
          name: 'value',
          placeholder: 'Value',
          value: this.state.value }),
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

  return SimpleMeasurementForm;
})(React.Component);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleSelect = (function (_React$Component) {
  _inherits(SimpleSelect, _React$Component);

  function SimpleSelect() {
    _classCallCheck(this, SimpleSelect);

    _get(Object.getPrototypeOf(SimpleSelect.prototype), 'constructor', this).call(this);
    this.state = {
      values: []
    };
  }

  _createClass(SimpleSelect, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.callbackParent(e);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.serverRequest = $.getJSON(this.props.plural, (function (result) {
        this.setState({ values: result });
      }).bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.serverRequest.abort();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'select',
        { className: 'form-control',
          name: '{this.props.singular}_id',
          value: this.props.current_value,
          onChange: this.handleChange },
        React.createElement(
          'option',
          { value: '' },
          capitalizeFirstLetter(this.props.singular)
        ),
        this.state.values.map(function (item) {
          return React.createElement(
            'option',
            { key: item.id, value: item.id },
            item.name
          );
        })
      );
    }
  }]);

  return SimpleSelect;
})(React.Component);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StateColumn = (function (_React$Component) {
  _inherits(StateColumn, _React$Component);

  function StateColumn(props) {
    _classCallCheck(this, StateColumn);

    _get(Object.getPrototypeOf(StateColumn.prototype), 'constructor', this).call(this, props);
  }

  _createClass(StateColumn, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'col-md-2' },
        React.createElement(
          'div',
          { className: 'btn btn-block btn-primary btn-lg' },
          capitalizeFirstLetter(this.props.state.name),
          React.createElement(VolumeBadge, { value: this.props.state.total_volume, units: this.props.state.units })
        ),
        this.props.state.batches.map(function (batch) {
          return React.createElement(BatchCard, { key: batch.id, batch: batch });
        })
      );
    }
  }]);

  return StateColumn;
})(React.Component);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StateColumns = (function (_React$Component) {
  _inherits(StateColumns, _React$Component);

  function StateColumns(props) {
    _classCallCheck(this, StateColumns);

    _get(Object.getPrototypeOf(StateColumns.prototype), 'constructor', this).call(this, props);
  }

  _createClass(StateColumns, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'states' },
        this.props.data.map(function (state) {
          return React.createElement(StateColumn, { key: state.id, state: state });
        })
      );
    }
  }]);

  return StateColumns;
})(React.Component);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VolumeBadge = (function (_React$Component) {
  _inherits(VolumeBadge, _React$Component);

  function VolumeBadge() {
    _classCallCheck(this, VolumeBadge);

    _get(Object.getPrototypeOf(VolumeBadge.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(VolumeBadge, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'badge pull-right' },
        this.props.value,
        this.props.units
      );
    }
  }]);

  return VolumeBadge;
})(React.Component);
var amountFormat = function amountFormat(value) {
  return '$ ' + Number(value).toLocaleString();
};
var dateFormat = function dateFormat(date) {
  return Date(date).toString().slice(3, 10);
};
var capitalizeFirstLetter = function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
