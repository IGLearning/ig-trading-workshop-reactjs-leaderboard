import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class Leaderboard extends Component {

  render() {
    return (
      <BootstrapTable data={mockData} striped hover>
        <TableHeaderColumn isKey dataField='name'>Name</TableHeaderColumn>
        <TableHeaderColumn dataField='pnl'>Running PnL</TableHeaderColumn>
        <TableHeaderColumn dataField='funds'>Total funds</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
var mockData = [{
  name: "john",
  pnl: 123.12,
  funds: 289231
},
{
  name: "mark",
  pnl: 122343.123423,
  funds: 2894324231
}];