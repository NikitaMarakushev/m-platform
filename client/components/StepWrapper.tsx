import { StepLabel, Stepper, Step, Grid, Card } from '@material-ui/core';
import { Container } from 'next/app';
import React from 'react';

interface StepWrapperProps {
    activeStep: number,
}

const steps = ['info about track', 'loading wallpaper', 'loading audio'];

const StepWrapper: React.FC<StepWrapperProps> = ({activeStep, children}) => {
    return(
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) => 
                        <Step
                            key={step}
                            completed={activeStep > index}
                        >
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    )}
            </Stepper>
            <Grid container justifyContent="center" style={{margin: '70px 0', height: 270}}>
                <Card style={{width: 600}}>
                    {children}
                </Card>
            </Grid>
        </Container>
    );
}

export default StepWrapper;