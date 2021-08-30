import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main"

function Page() {
  return (
    <div className="App Page-Corebiz">
      <Header />
      <Main/>
      <Footer />
    </div>
  );
}

export default Page;
