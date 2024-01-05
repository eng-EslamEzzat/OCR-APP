import { Grid } from "@mui/material";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {useSelector} from 'react-redux';
import './index.css';

export default function DataContainer() {
  const {data, loggerState} = useSelector(state => state.recognition);

  const DataFields = Object.entries(data).map(([key, value]) => (
    <TextField id="outlined-basic" key={key} label={key.toUpperCase()} variant="outlined" value={value}/>
  ))

  return (
      <Grid xs={12} md={6} spacing={2} className="data-container">
        <h2>{loggerState.toUpperCase()}</h2>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '20ch' },
          }}
          noValidate
          autoComplete="off"
        >
        {DataFields}
      </Box>
      </Grid>
  );
};
