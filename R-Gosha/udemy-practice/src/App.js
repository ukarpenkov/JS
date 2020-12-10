import Layout from "./hoc/Layout/Layout";
import React from 'react';
import Quiz from "./containers/Quiz/Quiz";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Quiz />
      </Layout >

    );
  }
}

export default App;
