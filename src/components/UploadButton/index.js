import { Button, Grid } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import "./index.css"
import { useDispatch, useSelector } from "react-redux";
import { addRecognition } from "../../redux/recognitionSlice";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  
export default function UploadButton() {
    const dispatch = useDispatch();
    const {data} = useSelector(state => state.recognition)

    const changeHandler = async (event) => {
        let starData = {}
        Object.keys(data).forEach(key => starData[key] = "*********" )
        if (event.target.files[0]){
            dispatch(
                addRecognition({
                  image: URL.createObjectURL(event.target.files[0]),
                  data: starData
                })
            );
            
        }            
    }

    return(
        <Grid xs={12} className="btn-container">
            <Button className="btn-upload" component="label" variant="contained" startIcon={<CloudUploadIcon className="btn-icon" />}>
                Upload file
                <VisuallyHiddenInput type="file" onChange={changeHandler}/>
            </Button>
        </Grid>
    );
    
};
