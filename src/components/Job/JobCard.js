import React from 'react';

function JobCard(props) {
    return (
        <React.Fragment>
            <div className="job">
                <header className="job-header">
                    <h4 className="job-title">
                        <a href={props.job.url}>{props.job.title}</a>
                    </h4>
                    <span className="company">
                            {props.job.company}
                    </span>
                </header>
                <main className="flex-between">
                    <aside>
                        <span className="job-type">
                            {props.job.type}
                        </span>
                    </aside>
                    <aside>
                        <span className="job-location">
                            {props.job.location}
                        </span>
                    </aside>
                </main>
            </div>
        </React.Fragment>
    );
}

export default JobCard;