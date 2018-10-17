import React, { Component } from 'react';
import Posts from './Posts';

class Search extends Component {

  state = {
      searchText: '',
      posts: []
  }

  searchChange = (e) => {
      let posts = this.posts.filter((post) => {
        return post.title.includes(e.target.value);
      })
      console.log(posts)

      this.setState({
          posts : posts
      })
  }

  componentDidMount() {
      let url = "http://jsonplaceholder.typicode.com/posts";
      fetch(url)
      .then((res)=>res.json())
      .then((resData)=>{this.posts = resData; 
        this.setState({
            posts: this.posts
        })
        //console.log(this.posts)
    })
  }

  render() {
    return (
      <div className="App">
       <input type="text" name="searchText" onChange={this.searchChange} />
       <Posts posts={this.state.posts}></Posts>
      </div>
    );
  }
}

export default Search;
