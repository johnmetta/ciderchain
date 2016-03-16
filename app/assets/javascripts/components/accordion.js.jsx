class Accordion extends React.Component {
  constructor() {
    super();
    this.state = {
      shown: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({shown: !this.state.shown});
  }
  render() {
    let bodyStyle = {
      shown: { display: 'inherit', padding: '5px' },
      hidden: { display: 'none', padding: '5px' },
    }
    let panelStyle = {
      marginBottom: '1px'
    }
    let stateStyle = this.state.shown ? bodyStyle.shown : bodyStyle.hidden;
    return (
      <section className='panel panel-info' style={panelStyle}>
        <div className='accordion-header panel-heading' onClick={this.toggle} >
          {this.props.children[0]}
        </div>
        <div className='panel-body' style={stateStyle}>
          <div className='accordian-details'>
            {this.props.children[1]}
          </div>
        </div>
      </section>
    )
  }

}
