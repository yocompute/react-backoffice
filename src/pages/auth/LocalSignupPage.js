import React, { useState } from 'react';
import { connect } from 'react-redux';


import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import PhoneForm from '../../components/auth/PhoneForm';
import EmailForm from '../../components/auth/EmailForm';

const LocalSignupPage = () => {
    const [type, setType] = useState("phone");

    const handleChange = (event, v) => {
        setType(v);
    }

    return (
        <Container maxWidth="sm">
            <Paper variant="outlined">
            <Tabs variant="fullWidth" value={type} onChange={handleChange}>
                <Tab value="phone" label="Phone"/>
                <Tab value="email" label="Email"/>
            </Tabs>

            {type === "phone" && (
                // <Box p={3}>
                <PhoneForm />
                // </Box>
            )}

            {type === "email" && (
                // <Box p={3}>
                <EmailForm />
                // </Box>
            )}
            </Paper>
        </Container>
    )    
}

export default LocalSignupPage;