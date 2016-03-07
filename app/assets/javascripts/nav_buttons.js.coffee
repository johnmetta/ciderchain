@NavButtons = React.createClass
  render: ->
    React.DOM.div
      className: 'collapse navbar-collapse'
      React.DOM.ul
        className: 'nav navbar-nav'
        React.DOM.li null,
          React.DOM.a
            href: '/batches'
            'Batches'
        React.DOM.li null,
          React.DOM.a
            href: '/rackings'
            'Rackings'
        React.DOM.li null,
          React.DOM.a
            href: 'vessels'
            'Vessels'
        React.DOM.li null,
          React.DOM.a
            href: '/measurements'
            'Measurements'
        React.DOM.li null,
          React.DOM.a
            href: '/additions'
            'Additions'

      React.DOM.div
        className: 'navbar-text navbar-right'
        if(@props.current_user)
#        "Signed in as "
#          React.DOM.a
#            href: "/users/#{@props.current_user.id}"
#            @props.current_user.email
          React.DOM.a
            href: '/logout'
            'Logout'
        else
          React.DOM.a
            href: '/login'
            'Login'
