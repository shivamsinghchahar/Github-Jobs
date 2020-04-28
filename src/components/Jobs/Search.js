import React from 'react';
import { connect } from 'react-redux';

import Input from '../shared/Input';
import Checkbox from '../shared/Checkbox';
import { setQuery, clearQuery } from '../../actions/queryActions';
import { fetchJobs, clearJobs } from '../../actions/jobsActions';

class Search extends React.Component {
  handleChange = (name, value) => {
    const { dispatch } = this.props;
    dispatch(setQuery(name, value))
  }

  handleSubmit = e => {
    const { description, location, full_time, dispatch } = this.props;
    e.preventDefault();
    dispatch(clearJobs());
    dispatch(fetchJobs(description, location, full_time));
  }

  handleClear = e => {
    const { dispatch } = this.props;
    dispatch(clearJobs());
    dispatch(clearQuery());
  }

  isQueryPresent = () => {
    const { description, location, full_time } = this.props;
    return !!description || !!location || full_time;
  }

  render() {
    const { description, location, full_time } = this.props;

    return (
      <div className="flex justify-center">
        <form
          className="w-full lg:w-1/2 lg:my-4 p-4 flex justify-between flex-wrap"
          onSubmit={this.handleSubmit}
        >
          <Input
            type="text"
            placeholder="eg. React Developer"
            handleChange={this.handleChange}
            value={description}
            name="description"
          />
          <Input
            type="text"
            placeholder="eg. San Francisco"
            handleChange={this.handleChange}
            value={location}
            name="location"
          />
          <Checkbox
            label="Full Time"
            checked={full_time}
            handleChange={this.handleChange}
            name="full_time"
          />
          <div className="w-1/2 pr-1 lg:mt-2">
            <input
              type="submit"
              className={`${this.isQueryPresent() ? 'bg-blue-500' : 'cursor-not-allowed bg-blue-400'} w-full my-1 shadow hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
              value="Search"
              disabled={!this.isQueryPresent()}
            />
          </div>
          <div className="w-1/2 pl-1 lg:mt-2">
            <button
              className={`${this.isQueryPresent() ? 'bg-red-500' : 'cursor-not-allowed bg-red-400'} w-full my-1 shadow text-white hover:bg-red-700 font-bold py-2 px-4 rounded`}
              onClick={this.handleClear}
              disabled={!this.isQueryPresent()}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// Map Redux state to React component props
const mapStateToProps = state => ({
  description: state.query.description,
  location: state.query.location,
  full_time: state.query.full_time,
});

export default connect(mapStateToProps)(Search);