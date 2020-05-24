import React from "react";
import { connect } from "react-redux";

import Jobs from "../../components/Jobs/Jobs";
import Search from "../../components/Search/Search";
import NoResult from "../../components/shared/NoResult";
import AppLayout from "../../layouts/AppLayout/AppLayout";

function HomePage({ hasErrors }) {
  return (
    <AppLayout>
      <Search />
      {hasErrors ? <NoResult /> : <Jobs />}
    </AppLayout>
  );
}

const mapStateToProps = (state) => ({
  hasErrors: state.jobs.hasErrors,
});

export default connect(mapStateToProps)(HomePage);
