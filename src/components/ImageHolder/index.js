import { Grid } from "@mui/material";
import './index.css'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { createWorker } from 'tesseract.js';
import { addRecognition, setLoggerState } from "../../redux/recognitionSlice";


export default function ImageHolders() {
    const {image} = useSelector((state) => state.recognition)
    const dispatch = useDispatch();

    useEffect(() => {
        image&&(async () => {
            const worker = await createWorker('eng', 1, {
                logger: m => dispatch(
                    setLoggerState({
                        loggerState: m.status + ".."
                    })
                ), // Add logger here
              });
            const ret = await worker.recognize(image);
            const listText = ret.data.text.split('\n')
            try {
                const newData = {
                    document_number: listText[3].split(' ').filter( e => e.length === 9)[0]||"N/A",
                    surname: listText[4]||"N/A", 
                    given_name: listText[6]||"N/A", 
                    sex: listText[7].split(' ')[0]||"N/A", 
                    nationality: listText[7].split(' ')[1]||"N/A", 
                    date_of_birth: listText[9].match(/\d.*\d/g)[0]||"N/A", 
                    date_of_issue: listText[11].slice(2)||"N/A", 
                    date_of_expiry: listText[13].match(/\d.*\d/g)[0]||"N/A",
                }
                dispatch(
                    addRecognition({
                      image: image,
                      data: newData
                    })
                );
                dispatch(
                    setLoggerState({
                        loggerState: "here you are !"
                    })
                );
            } catch {
                dispatch(
                    setLoggerState({
                        loggerState: "our app does not support this id format :("
                    })
                );
            }

            await worker.terminate();
        })(); 
    }, [image, dispatch])

    return (
        <Grid xs={12} className="img-container" >
            {image&&<img src={image}
            width="70%"
            height="70%"
            alt="this is a placeholder"/>}
        </Grid>
    )
    
};
