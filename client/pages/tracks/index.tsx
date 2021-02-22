import React from 'react'
import MainLayout from '../../layouts/MainLayout';
import {Box, Card, Grid, Button } from "@material-ui/core";
import { useRouter } from 'next/router';
import TrackList from '../../components/TrackList';
import {ITrack} from '../../types/track';

const Index = () => {
    const router = useRouter();

    return (
        <MainLayout>
            <Grid container justifyContent="center">
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent="space-between">
                            <h1>List of track</h1>
                            <Button onClick={() => router.push('/tracks/create')}>
                                Download
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    )

}

export default Index;
