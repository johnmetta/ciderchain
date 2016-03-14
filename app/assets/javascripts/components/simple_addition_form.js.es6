class SimpleAdditionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      unit_id: this.props.unit_id,
      racking_id: this.props.racking_id
    };
  }
  handleChange(e) {

  }

  render() {
    return (
      <section>
        <AdditiveSelector callbackParent={this.handleChange} />
        <SourceSelector callbackParent={this.handleChange} />
        <input className='form-control'
               type='text'
               name='amount'
               placeholder='Amount'
               value={this.state.amount} />
        <UnitSelector callbackParent={this.handleChange} />
        <button className='btn btn-primary'
                type='submit' >
          Save
        </button>
      </section>
    )
  }
}
