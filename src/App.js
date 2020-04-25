import React from 'react';
import { Provider } from 'react-redux';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from './redux';

import Navbar from './components/Navbar';

import './App.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Layout>
          <Header>
            <Navbar />
          </Header>
          <Content>
            <Switch>
              <Route />
            </Switch>
          </Content>
        </Layout>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
