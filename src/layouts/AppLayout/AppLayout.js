import React from "react";
import { connect } from "react-redux";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function AppLayout({ dark, children }) {
  return (
    <div className={`${dark ? "bg-blue-900" : "bg-gray-200"} min-h-screen`}>
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  dark: state.theme.dark,
});

export default connect(mapStateToProps)(AppLayout);
