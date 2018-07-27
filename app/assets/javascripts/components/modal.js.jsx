class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({shown: !this.state.shown});
  }
  divShown() {
    if(this.props.isOpen){
      return (
        <ReactCSSTransitionGroup transitionName={this.props.transitionName}>
          <div className="modal">
            {this.props.children}
          </div>
        </ReactCSSTransitionGroup>
      );
    } else {
      return <ReactCSSTransitionGroup transitionName={this.props.transitionName} />;
    }
  }
  render() {
    let bodyStyle = {
      shown: { display: 'inherit', padding: '5px' },
      hidden: { display: 'none', padding: '5px' },
    };
    return this.divShown();
  }
}

Modal.defaultProps = { isOpen: false, transitionName: 'blah' };
