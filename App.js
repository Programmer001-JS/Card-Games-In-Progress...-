import React from 'react';
import Bet from './Bet';
import CardGameBoard from './CardGameBoard';
import { Header, Layout } from "./Layout.components";


const App = () => (
  <div className="App">
    <Header>This is a card game!</Header>
    <Layout>
      <CardGameBoard />
      <Bet />
    </Layout>

  </div>
);
export default App;