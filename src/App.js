import React, { Fragment } from 'react';
import { APOD, Footer, Header } from './components';

function App() {
  return (
    <Fragment>
      <Header />

      <APOD />

      <Footer />
    </Fragment>
  );
}

export default App;
