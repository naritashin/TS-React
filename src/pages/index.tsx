import * as React from 'react';

import Layout from '../components/Layout';
import Contents from '../components/Contents';

const AppContext = React.createContext(null);

const test = () => {
  console.log('test');
};

const Index = () => (
  <AppContext.Provider value={{ test }}>
    <Layout>
      <Contents />
    </Layout>
  </AppContext.Provider>
);

export default Index;
