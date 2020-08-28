import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import CreateBucket from './components/CreateBucket';
import CreateFolder from './components/CreateFolder';
import UploadFiles from './components/UploadFiles';
import ListDirectory from './components/ListDirectory';
import OpenFile from './components/OpenFile';
import ShareBucket from './components/ShareBucket';
import JoinBucket from './components/JoinBucket';
import Powergate from './components/Powergate';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <CreateBucket />
        <CreateFolder />
        <ListDirectory />
        <UploadFiles />
        <OpenFile />
        <ShareBucket />
        <JoinBucket />
        <Powergate />
      </div>
    </ThemeProvider>
  );
}

export default App;
