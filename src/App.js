import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
	state = {
		characters : []
	};

	removeCharacter = index => {
	    const { characters } = this.state;

	    this.setState({
	        characters: characters.filter((row, ndx) => { 
	            return ndx !== index;
	        })
	    });
	}
	
	handleSubmit = character => {
    	this.setState({characters: [...this.state.characters, character]});
	}

    render() {
    	const { characters } = this.state;
        return (
            <div className="App">
                <Table characterData={characters} removeCharacter={this.removeCharacter}  />
                <h1>Form</h1>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;