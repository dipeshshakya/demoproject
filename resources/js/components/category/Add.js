import React, { Component } from 'react';
import axios from 'axios';
export default class About extends Component {
    constructor(){
    	super();
    	this.onChangeCategoryName=this.onChangeCategoryName.bind(this);
    	this.onSubmit=this.onSubmit.bind(this);

    	this.state={
    		category_name:''
    	}
    }
    onChangeCategoryName(e){
    	this.setState({
    		category_name:e.target.value
    	});
    }

    onSubmit(e){
    	e.preventDefault();
    	const category={
    		category_name:this.state.category_name
    	}

    	axios.post('http://demoproject.com/category/store',category)
    	.then(res=>Console.log(res.data));
    }




    render() {
        return (
          <div>

          	<form onSubmit={this.onSubmit}>
			  <div className="form-group">
			    <label>Category Name</label>
			    <input type="text" value={this.state.category_name} onChange={this.onChangeCategoryName} className="form-control" id="category_name" aria-describedby="emailHelp" placeholder="Enter Category"/>
			  </div>
			    <button type="submit" className="btn btn-primary">Submit</button>
			</form>
          </div>
        );
    }
}