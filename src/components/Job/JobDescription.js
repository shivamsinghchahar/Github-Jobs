import React from 'react';
import Loader from '../Loader/Loader';


const allowCors = 'https://cors-anywhere.herokuapp.com';

class JobDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      job: null,
      loading: false
    }
  }

  componentWillMount() {
    this.setState({ loading: true })
    fetch(`${allowCors}/https://jobs.github.com/positions/${this.props.match.params.id}.json`)
      .then(res => res.json())
      .then(job => this.setState({ job, loading: false }))
  }

  render() {
    return this.state.loading ? <Loader /> : (
      <main className="job-page">
        <div className="wrapper">
          <div className="flex-between hero">
            <div className="job-page-header flex-between">
              <div className="company-card">
                <h5>{this.state.job.company}</h5>
                <img src={this.state.job.company_logo}></img>
              </div>
              <div className="job-info flex-center">
                <h4>{this.state.job.title}</h4>
                <div className="flex-between">
                  <span>{this.state.job.type}</span>
                  <span>{this.state.job.location}</span>
                </div>
              </div>
            </div>
            <div className="job-apply">
              <span className="apply-title">Apply</span>
              <div
                className="application"
                dangerouslySetInnerHTML={{ __html: this.state.job.how_to_apply }} >
              </div>
            </div>
          </div>
          <div className="job-description-container">
            <h4>
              Description
            </h4>
            <div
              dangerouslySetInnerHTML={{ __html: this.state.job.description }}>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default JobDescription;