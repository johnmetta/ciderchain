import React from 'react'
import {get, post} from '../clients/api'
import withData from './withData'
import StateColumns from '../components/States/StateColumns';
import BatchLineForm from '../components/Batches/BatchLineForm';

export default withData(
  class Home extends React.Component {
    static async getInitialProps() {
      const response = await get('/states/front_page')
      return {states: response.data}
    }

    static async addBatch(batch) {
      const response = await get('/states/front_page')
      this.setState({states: response.data});
    }

    render() {
      return (
      <div className="snapshot" >
        <div className="page-header">
          <h1>Production Snapshot</h1>
        </div>
        <BatchLineForm handleNewBatch={this.addBatch} />
        <hr />
        <StateColumns states={this.state.states} />
      </div>
    )
    }
  }
)
