import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Text } from '../../Container';

const AppContainer = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h2" gutterBottom>
                    <Text tid="hello" />
                    </Typography>

                    <Typography variant="subtitle1" gutterBottom>
                    <Text tid="welcomeDescription" />
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AppContainer