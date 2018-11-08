import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: '',
            placeholder: 'Please input your text here'
        };

        this.state = this.initialState;
    }

    handleChange = event => {
	    const {name, value, placeholder} = event.target;

	    this.setState({
	        [name] : value
	    });

	    if(value.trim().length>0){
	    	
	    	this.setState({
	        placeholder : "This is required. Please input your text here"
	    	});
		}
	}

	submitForm = () => {
		var proceed = true;
		for (var k in this.state){
		    if (this.state.hasOwnProperty(k)) {
		         if(this.state[k].trim().length==0){
		         	proceed = false;
		         	break;
		         }
		    }
		}
		if(proceed){
		    this.props.handleSubmit(this.state);
		    this.setState(this.initialState);
		} 
	}

	render() {
	    const { name, job, placeholder} = this.state; 

	    return (
	        <form>
	            <label>Name</label>
	            <input 
	                type="text" 
	                name="name" 
	                value={name} 
	                placeholder={placeholder} 
	                onChange={this.handleChange} />
	            <label>Job</label>
	            <input 
	                type="text" 
	                name="job" 
	                value={job} 
	                placeholder={placeholder} 
	                onChange={this.handleChange} />
	            <input 
				    type="button" 
				    value="Submit" 
				    onClick={this.submitForm} />
	        </form>
	    );
	}
}

export default Form;