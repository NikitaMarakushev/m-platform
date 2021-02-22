import React, {useState} from 'react';
import MainLayout from '../../layouts/MainLayout';
import StepWrapper from '../../components/StepWrapper';
import FileUpload from '../../components/FileUpload';
import {Button, Grid, TextField} from '@material-ui/core';

const Create = () => {

    const [activeStep, setActiveStep]  = useState(0);

    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1);
        }
    }

    const back = () => {
        setActiveStep(prev => prev - 1);
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 1 &&
                <Grid container direction={"column"}>
                    <TextField
                        style={{marginTop: 10}}
                        label={'Name'}
                    />
                    <TextField
                        style={{marginTop: 10}}
                        label={'author'}
                    />
                    <TextField
                        style={{marginTop: 10}}
                        label={'text'}
                        multiline
                        rows={3}
                    />
                </Grid>
                }
                {activeStep === 2 &&
                    <FileUpload setFile={setPicture} accept="image/*">
                        <Button>Load wallpapper</Button>
                    </FileUpload>
                }
                {activeStep === 3 &&
                    <FileUpload setFile={setAudio} accept="audio/*">
                        <Button>Load audio</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent='space-between'>
                <Button disabled={activeStep === 0} onClick={back}>Back</Button>
                <Button onClick={next}>Forward</Button>
            </Grid>
        </MainLayout>
    )
}

export default Create;