// src/pages/Dashboard.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, CircularProgress, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { getCustomerTypeData } from '../features/customerType/customerTypeSlice';
import SectionHeader from '../components/common/SectionHeader';
import ChartSection from '../components/common/ChartSection';
import TableSection from '../components/common/TableSection';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.customerType);

  useEffect(() => {
    dispatch(getCustomerTypeData());
  }, [dispatch]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  const customerData = Array.isArray(data) ? data : [];

  const totalACV = customerData.reduce((sum, item) => sum + item.acv, 0);

  const donutData = [
    {
      label: 'Existing Customer',
      value: customerData
        .filter(d => d.Cust_Type === 'Existing Customer')
        .reduce((sum, item) => sum + item.acv, 0),
    },
    {
      label: 'New Customer',
      value: customerData
        .filter(d => d.Cust_Type === 'New Customer')
        .reduce((sum, item) => sum + item.acv, 0),
    },
  ];

  return (
    <Grid container spacing={2} p={2}>
      {/* Navigation Buttons */}
      <Grid item xs={12}>
        <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
          <Button variant="outlined" component={Link} to="/team">Team Dashboard</Button>
          <Button variant="outlined" component={Link} to="/acv">ACV Dashboard</Button>
          <Button variant="outlined" component={Link} to="/account">Account Dashboard</Button>
        </Stack>
      </Grid>

      {/* Charts and Tables */}
      <SectionHeader title="Won ACV Mix by Customer Type" />
      <ChartSection
        data={customerData}
        donutData={donutData}
        totalACV={totalACV}
        groupKey="Cust_Type"
      />
      <TableSection data={customerData} />
    </Grid>
  );
};

export default Dashboard;
