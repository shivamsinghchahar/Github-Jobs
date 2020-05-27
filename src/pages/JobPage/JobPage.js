import React from "react";
import { connect } from "react-redux";

import AppLayout from "../../layouts/AppLayout/AppLayout";
import JobDescription from "../../components/JobDescription/JobDescription";
import NoResult from "../../components/shared/NoResult";

function JobPage({ hasErrors }) {
  return (
    <AppLayout>
      {hasErrors ? <NoResult /> : <JobDescription />}
    </AppLayout>
  );
}

const mapStateToProps = (state) => ({
  hasErrors: state.job.hasErrors,
});

export default connect(mapStateToProps)(JobPage);
