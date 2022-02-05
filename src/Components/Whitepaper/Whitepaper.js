import React from 'react';
import { Table } from 'react-bootstrap';
import './Whitepaper.css'

const Whitepaper = () => {
    return (
        <div>
            <div>
                <h1 className='table-title'>Minting</h1>
                <Table striped bordered hover className='first-table'>
                  <thead className='table-head'>
                    <tr>
                      <th>Token ID</th>
                      <th>Minting Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>0 - 10,498 (Gen X)</td>
                      <td className='sold'>SOLD OUT</td>
                    </tr>
                    <tr>
                      <td>10,499 - 17,000 (Gen Y)</td>
                      <td>20,000 $TROUT</td>
                    </tr>
                    <tr>
                      <td>17,001 - 27,000 (Gen Y)</td>
                      <td>40,000 $TROUT</td>
                    </tr>
                    <tr>
                      <td>27,001 - 37,000 (Gen Y)</td>
                      <td>60,000 $TROUT</td>
                    </tr>
                    <tr>
                      <td>37,001 - 50,000 (Gen Y)</td>
                      <td colSpan={2}>80,000 $TROUT</td>
                    </tr>
                  </tbody>
                </Table>
            </div>    
        </div>
    );
};

export default Whitepaper;