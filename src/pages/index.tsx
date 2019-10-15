import * as React from 'react';

const AppContext = React.createContext(null);

const test = () => {
  console.log('test');
};

const Index = () => {
  return <AppContext.Provider value={{ test }}>hello world!</AppContext.Provider>;
};

export default Index;
