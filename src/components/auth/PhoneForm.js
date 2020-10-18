import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import AgreementLink from './AgreementLink';

const PhoneForm = () => {
    const [type, setType] = useState(0);
    const handleChange = () => {

    }
    return (
        <div>
            <Grid item xs={12} sm={12}>
                <Box m={3}>
                    <TextField id="phone-input" label="Phone number" />
                </Box>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Box m={3}>
                    <AgreementLink />
                </Box>
            </Grid>
            <Link to={'verify-code'} style={{ textDecoration: 'none' }}>
                <Button variant="outlined">Send Code</Button>
            </Link>
        </div >
    )
}

export default PhoneForm;