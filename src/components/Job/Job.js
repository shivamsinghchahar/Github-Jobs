import React from 'react';
import JobCard from './JobCard';

class Job extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: 0,
            current: 1
        }
    }

    componentDidMount() {
        const pages = Math.ceil(this.props.jobs.length / 10);

        this.setState({ ...this.state, pages });
    }

    handlePage = current => {
        this.setState({ ...this.state, current })
    }

    render() {
        return (
            <section className="jobs-container flex-start">
                <div className="wrapper flex-between">
                    {
                        this.props.jobs && this.props.jobs.slice((this.state.current - 1) * 10, 10 + (this.state.current - 1) * 10).map(job => {
                          return  (
                                <JobCard 
                                    job={job}
                                />
                            )
                        })
                    }
                </div>
                <div className="paginate flex-start wrapper">

                    {
                        new Array(this.state.pages).fill(0).map((page, i) => {
                           return (<button 
                                className={`page-btn ${this.state.current == i+1 ? 'active-page': ''}`}
                                onClick={() => this.handlePage(i+1)}
                            >
                                { i+1 }
                            </button>)
                        })
                    }
                </div>
            </section>
        );
    }
}

export default Job;