
import React from 'react';
import { Grid, Card, CardContent } from '@mui/material';
import DataTable from '../DataTable';

const TableSection = ({ data, groupKey }) => {
  console.log("datatable->", data, "groupKey->", groupKey);

  return (
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <DataTable data={data} queryKey={groupKey} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TableSection;
