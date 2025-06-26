// src/components/common/TableSection.jsx
import React from 'react';
import { Grid, Card, CardContent } from '@mui/material';
import DataTable from '../DataTable';

const TableSection = ({ data }) => (
  <Grid item xs={12}>
    <Card>
      <CardContent>
        <DataTable data={data} />
      </CardContent>
    </Card>
  </Grid>
);

export default TableSection;
