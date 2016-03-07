@Nav = React.createClass
  render: ->
    React.DOM.div
      className: 'navbar-header'
      React.DOM.button
        type: 'button'
        className: 'navbar-toggle'
        'data-toggle': 'collapse'
        'data-target': '#bs-example-navbar-collapse-1'
        'aria-expanded': 'false'
        React.DOM.span
          className: 'sr-only'
          'Toggle Navigation'
      React.DOM.a
        className: 'navbar-brand'
        href: '/'
        'Home'
