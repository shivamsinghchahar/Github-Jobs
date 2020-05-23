import React from "react";
import { connect } from "react-redux";

import Jobs from "../../components/Jobs/Jobs";
import Search from "../../components/Search/Search";
import NoResult from "../../components/shared/NoResult";
import AppLayout from "../../layouts/AppLayout/AppLayout";

function Home({ hasErrors }) {
  return (
    <React.Fragment>
      <AppLayout>
        <Search />
        {hasErrors ? <NoResult /> : <Jobs />}
      </AppLayout>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  hasErrors: state.jobs.hasErrors,
});

export default connect(mapStateToProps)(Home);
