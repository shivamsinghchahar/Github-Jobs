import React from 'react';

class Bookmark extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bookmarks: []
    }
  }

  componentDidMount() {
    if(localStorage.bookmarks) {
      const bookmarks = JSON.parse(localStorage.bookmarks);
      this.setState({ bookmarks });
    }
  }

  render() {
    return (
      <div>
        <h1>Bookmarks</h1>
        <p>
          {this.state.bookmarks}
        </p>
      </div>
    );
  }
}