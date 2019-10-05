import React from 'react';

class JobCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarked: false
    }
  }

  componentDidMount() {
    if(localStorage.bookmarks && localStorage.bookmarks.includes(this.props.job.id)) {
      this.setState({ bookmarked: true });
    }
  }

  handleClick = (id) => {
    const bookmarked = !this.state.bookmarked;
    this.setState({ bookmarked });
    this.props.handleBookmarks(this.props.job.id);
  }

  render() {
    return (
      <React.Fragment>
        <div className="job">
          <header className="job-header">
            <h4 className="job-title">
              <a href={`positions/${this.props.job.id}`}>{this.props.job.title}</a>
            </h4>
            <div className="flex-between bookmark">
              <span className="company">
                {this.props.job.company}
              </span>
              <span onClick={this.handleClick}>
                <i className={`${this.state.bookmarked ? 'fas icon-active' : 'far'} fa-bookmark icon`}></i>
              </span>
            </div>
          </header>
          <main className="flex-between">
            <aside>
              <span className="job-type">
                {this.props.job.type}
              </span>
            </aside>
            <aside>
              <span className="job-location">
                {this.props.job.location}
              </span>
            </aside>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default JobCard;