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
    let style = {
      shown: { display: 'inherit' },
      hidden: { display: 'none' }
    }
    let stateStyle = this.state.shown ? style.shown : style.hidden;
    return (
      <section className='panel panel-info'>
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
