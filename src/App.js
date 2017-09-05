import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialPosts: posts,
      filterPosts: []
    }
  }

  componentWillMount() {
    this.setState({filterPosts: this.state.initialPosts})
  }

  filter(e) {
    let oldPosts = this.state.initialPosts;
    oldPosts = oldPosts.filter(function(post) {
      return post.title.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
    })
    this.setState({
      filterPosts: oldPosts
    })
  }
  render() {
    return (
      <div>
        <div className="filter">
          <input onChange={this.filter.bind(this)} type="text" placeholder="Ingresa el término de búsqueda" />
        </div>
        <ul>
          {this.state.filterPosts.map((post, index) =>
            <li key={index}>
              <a href={post.url}><img src={post.image } alt={post.title} /></a>
              <p>{ post.title }</p>
            </li>
          )}
        </ul>
      </div>
    )
  }
}


export default App


