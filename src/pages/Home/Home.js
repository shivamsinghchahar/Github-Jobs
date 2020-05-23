import React from "react";

import Jobs from "../../components/Jobs/Jobs";
import Search from "../../components/Search/Search";
import NotFound from "../../components/shared/NotFound";
import AppLayout from "../../layouts/AppLayout/AppLayout";

function Home({ hasErrors }) {
  return (
    <React.Fragment>
      <AppLayout>
        <Search />
        {hasErrors ? <NotFound /> : <Jobs />}
      </AppLayout>
    </React.Fragment>
  );
}

export default Home;
