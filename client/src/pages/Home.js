import React from 'react'
import {get, post} from '../modules/api'
import withData from './withData'
import StateColumns from '../components/States/StateColumns';
import BatchLineForm from '../components/Batches/BatchLineForm';

export default withData(
  class Home extends React.Component {
    static async getInitialProps() {
      const {data, response} = await get('/states/front_page')
      return {states: data}
    }

    static async addBatch(batch) {
      const {data, response} = await get('/states/front_page')
      this.setState({states: data});
    }

    render() {
      return (
      <div className="snapshot" >
        <div className="page-header">
          <h1>Production Snapshot</h1>
        </div>
        <BatchLineForm handleNewBatch={this.addBatch} />
        <hr />
        <StateColumns states={this.props.states} />
      </div>
    )
    }
  }
)
