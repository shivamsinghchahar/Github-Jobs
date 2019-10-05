import React from 'react';
import JobCard from './JobCard';

class Job extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: 0,
      current: 0
    }
  }

  componentDidMount() {
    const pages = Math.ceil(this.props.jobs.length / 10);
    this.setState({ pages });
  }

  handlePage = current => {
    this.setState({ current })
  }

  jobsPerPage = () => {
    const { pages, current } = this.state;
    return this.props.jobs.slice(
      (this.state.current * 10),
      (this.state.current + 1) * 10
    );
  }

  render() {
    return (
      <section className="jobs-container flex-start">
        <div className="wrapper flex-between">
          {
            this.props.jobs && this.jobsPerPage().map(job => {
              return (
                <JobCard
                  job={job}
                  key={job.id}
                  handleBookmarks={this.props.handleBookmarks}
                />
              )
            })
          }
        </div>
        <div className="paginate flex-start wrapper">
          <button className="prev-jobs" onClick={this.props.prevFifty}>⬅ 50</button>
          {
            new Array(this.state.pages).fill(0).map((page, i) => {
              return (<button
                className={`page-btn ${this.state.current == i ? 'active-page' : ''}`}
                onClick={() => this.handlePage(i)}
                key={i}
              >
                {i + 1}
              </button>)
            })
          }
          <button className="next-jobs" onClick={this.props.nextFifty}>50 ➡</button>
        </div>
      </section>
    );
  }
}

export default Job;