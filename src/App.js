import './App.css'
import { SearchBox } from './Components/search-box/search-box.component'
import { CardList } from './Components/card-list/card-list.component'
import React, { Component } from 'react'
class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }
  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()),
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          handlechange={(e) => {
            this.setState({ searchField: e.target.value })
          }}
        />
        <CardList monsters={filteredMonsters}></CardList>

        {/* {this.state.monsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))} */}
      </div>
    )
  }
}

export default App
