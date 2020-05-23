import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function AppLayout(props) {
  return (
    <React.Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}
