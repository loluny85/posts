import React, { Component } from 'react';

class Posts extends Component {
  render() {
      let postList = this.props.posts.map((post, index) => {
        return (
            <div className="listColumnContainer" key={post.id}>
                <span className="listColumn no">{index+1}</span>
                <span className="listColumn id">{post.id}</span>
                <span className="listColumn title">{post.title}</span>
                <span className="listColumn description">{post.body}</span>
            </div>
        )
      })
    return (
      <div className="mainContainer">
        <div className="listHeader">
            <span className="listColumn no">No</span>
            <span className="listColumn id">User id</span>
            <span className="listColumn title">Title</span>
            <span className="listColumn description">Description</span>
        </div>
        {postList}
      </div>
    );
  }
}

export default Posts;
