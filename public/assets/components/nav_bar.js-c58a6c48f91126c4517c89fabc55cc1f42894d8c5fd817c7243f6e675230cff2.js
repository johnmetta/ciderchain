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
