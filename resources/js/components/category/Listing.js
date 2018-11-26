import React, { Component } from 'react';

export default class Listing extends Component {
    render() {
        return (
        	<div>
       <table className="table">
		  <thead>
		    <tr>
		      <th scope="col">category Name</th>
		      <th scope="col">status</th>
		      <th scope="col">created at</th>
		      <th scope="col">updated at</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <th scope="row">1</th>
		      <td>cat 1</td>
		      <td>active</td>
		      <td>date</td>
		      <td>date</td>
		    </tr>
		    <tr>
		      <th scope="row">2</th>
		       <td>cat 1</td>
		      <td>active</td>
		      <td>date</td>
		      <td>date</td>
		    </tr>
		    <tr>
		      <th scope="row">3</th>
		       <td>cat 1</td>
		      <td>active</td>
		      <td>date</td>
		      <td>date</td>
		    </tr>
		  </tbody>
		</table>
		</div>
        );
    }
}