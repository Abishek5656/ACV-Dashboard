// src/components/common/SectionHeader.jsx
import React from 'react';
import { Typography, Grid } from '@mui/material';

const SectionHeader = ({ title }) => (
  <Grid item xs={12}>
    <Typography variant="h5">{title}</Typography>
  </Grid>
);

export default SectionHeader;
