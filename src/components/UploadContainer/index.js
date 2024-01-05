import { Grid } from "@mui/material";
import UploadButton from "../UploadButton";
import ImageHolders from "../ImageHolder";

export default function UploadContainer() {

    return (
        <Grid xs={12} md={6} spacing={2}>
            <UploadButton />
            <ImageHolders />
        </Grid>
    );
};
