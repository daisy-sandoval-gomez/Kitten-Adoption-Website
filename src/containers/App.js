import React, { Component } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            kittens: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({ kittens: users}));

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredKittens = this.state.kittens.filter(kitten => {
            return kitten.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.kittens.length === 0) {
            return <h1>Loading . . .</h1>
        } else {
            return (
                <div className='tc'>
                <h1 className='f2'>San Diego Kitten Adoptions</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList kittens={filteredKittens}/>
                </Scroll>
                </div>
            );
        }
    }
}

export default App;