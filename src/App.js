// import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';
import UploadContainer from './components/UploadContainer';
import DataContainer from './components/DataContainer';

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <UploadContainer />
        <DataContainer />
      </Grid>
    </div>
  );
}

export default App;
