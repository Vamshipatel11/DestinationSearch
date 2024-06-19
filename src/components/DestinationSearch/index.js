import React, {Component} from 'react'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(destination =>
      destination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="destination-search-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-input-container">
          <input
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
            className="search-input"
          />
        </div>
        <ul className="destinations-list">
          {searchResults.map(destination => (
            <li key={destination.id} className="destination-item">
              <img
                src={destination.imgUrl}
                alt={destination.name}
                className="destination-image"
              />
              <p className="destination-name">{destination.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
