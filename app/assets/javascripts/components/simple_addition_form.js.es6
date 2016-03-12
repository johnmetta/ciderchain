class SimpleAdditionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      unit_id: this.props.unit_id,
      racking_id: this.props.racking_id
    };
  }

  render() {
    return (
      <section>
        <SimpleSelect singular='additive' plural='additives' />
        <SimpleSelect singular='source' plural='sources' />
        <input className='form-control'
               type='text'
               name='amount'
               placeholder='Amount'
               value={this.state.amount} />
        <SimpleSelect singular='unit' plural='units' />
        <button className='btn btn-primary'
                type='submit' >
          Save
        </button>
      </section>
    )
  }
}
