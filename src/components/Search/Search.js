import React from 'react';

const allowCors = 'https://cors-anywhere.herokuapp.com';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: '',
      location: ''
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleClick = _ => {
    this.setState({
      position: '',
      location: ''
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const query = `?description=${this.state.position}&location=${this.state.location}`;

    this.props.handleJobs(null, true);

    fetch(`${allowCors}/https://jobs.github.com/positions.json${query}`)
      .then(res => res.json())
      .then(jobs => {
        this.props.handleJobs(jobs, false);
        this.setState({ position: '', location: '' });
      });
  }

  render() {
    return (
      <React.Fragment>
        <main className="search-container">
          <div className="wrapper flex-center">
            <form className="form-control flex-between" onSubmit={this.handleSubmit}>
              <input
                className="input-field"
                type="text"
                placeholder="e.g. Backend Developer"
                name="position"
                value={this.state.position}
                onChange={this.handleChange}
              />
              <input
                className="input-field"
                type="text"
                placeholder="e.g. Remote"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
              />
              <input
                className="btn search-btn"
                type="submit"
                value="Search"
              />
              <button
                className="btn clear-btn"
                onClick={this.handleClick}
              >
                Clear
                            </button>
            </form>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Search;