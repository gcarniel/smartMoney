import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remover quando atualizar a versão
])

import React from 'react';

import Routes from './routes';

const App = () => {
  return <Routes />;
};

export default App;
