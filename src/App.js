import React from 'react';
import Header from './components/Header';
import Search from './components/Search/Search';
import Loader from './components/Loader/Loader';
import Job from './components/Job/Job';

const allowCors = 'https://cors-anywhere.herokuapp.com';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: null,
      loading: true,
      page: 1
    }
  }

  fetchJobs = () => {
    fetch(`${allowCors}/https://jobs.github.com/positions.json?page=${this.state.page}`)
      .then(res => res.json())
      .then(jobs => this.setState({ jobs, loading: false }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.fetchJobs();
  }

  handleJobs = (jobs, loading) => {
    this.setState({ jobs, loading });
  }

  nextFifty = async () => {
    // Handle github API pagination
    let page = this.state.page + 1;
    await this.setState({ page, loading: true });
    this.fetchJobs();
  }

  prevFifty = async () => {
    let page = this.state.page - 1;
    if (page < 0) {
      return;
    } else {
      await this.setState({ page, loading: true });
      this.fetchJobs();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Search
          handleJobs={this.handleJobs}
        />
        {
          this.state.loading ? (<Loader />) : (<Job
            jobs={this.state.jobs}
            nextFifty={this.nextFifty}
            prevFifty={this.prevFifty}
          />)
        }
      </React.Fragment>
    );
  }
}

export default App;
