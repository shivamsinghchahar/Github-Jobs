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
        loading: true
    }
  }

  componentDidMount() {
      fetch(`${allowCors}/https://jobs.github.com/positions.json`)
      .then(res => res.json())
      .then(jobs => this.setState({ jobs, loading: false }));
  }

  handleJobs = (jobs, loading) => {
    this.setState({ jobs, loading });
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
          />)
        }
      </React.Fragment>
    );
  }
}

export default App;
