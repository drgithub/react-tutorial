import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: '',
            placeholdername: 'Please input your text here.',
            placeholderjob: 'Please input your text here.'
        };

        this.state = this.initialState;
    }

    handleChange = event => {
	    const {name, value, placeholder} = event.target;

	    if(value.trim().length>0){
	    	this.setState({
	        	[name] : value
	    	});
		}else{
			if(name === 'name'){
				this.setState({
			        placeholdername : "Oops! Email is required.",
			        [name] : ""
		    	});
			}else if(name === 'job'){
				this.setState({
			        placeholderjob : "Job is required to earn money.",
			        [name] : ""
		    	});
			}
		}
	}

	submitForm = () => {
		var proceed = true;
		for (var k in this.state){
		    if (this.state.hasOwnProperty(k)) {
				if(k === 'name'){
					if(this.state[k].trim().length===0){ //Empty Email
			         	proceed = false;
						this.setState({
							placeholdername : "The email is a required field.",
							[k] : ""
						});
			         }else if(!this.validateEmail(this.state[k])){ //Invalid Email
						proceed = false;
						this.setState({
							placeholdername : "The email is not valid.",
							[k] : ""
						});
			         }
		    	}else if(k === 'job'){
	         		if(this.state[k].trim().length===0){ // Empty Job
						proceed = false;
						this.setState({
							placeholderjob : "Job is a required field.",
							[k] : ""
						});
			         }
		    	}
		    }
		}
		if(proceed){
		    this.props.handleSubmit(this.state);
		    this.setState(this.initialState);
		} 
	}

	validateEmail = (email) => {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	}

	render() {
	    const { name, job, placeholdername, placeholderjob} = this.state; 

	    return (
	        <form>
	            <label>Email</label>
	            <input 
	                type="text" 
	                name="name" 
	                value={name} 
	                placeholder={placeholdername} 
	                onChange={this.handleChange} />
	            <label>Job</label>
	            <input 
	                type="text" 
	                name="job" 
	                value={job} 
	                placeholder={placeholderjob} 
	                onChange={this.handleChange} />
	            <input 
				    type="button" 
				    value="submit" 
				    onClick={this.submitForm} />
	        </form>
	    );
	}
}

export default Form;