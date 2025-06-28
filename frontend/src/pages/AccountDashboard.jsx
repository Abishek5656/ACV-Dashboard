import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, CircularProgress, Typography, Stack, Button } from '@mui/material';
import { getAccountData } from '../features/account/accountSlice';
import * as d3 from 'd3';
import { Link } from 'react-router-dom';

import SectionHeader from '../components/common/SectionHeader';
import ChartSection from '../components/common/ChartSection';
import TableSection from '../components/common/TableSection';

const AccountDashboard = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.account);

  useEffect(() => {
    dispatch(getAccountData());
  }, [dispatch]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  const accountData = Array.isArray(data) ? data : [];
  const totalACV = accountData.reduce((sum, item) => sum + item.acv, 0);

  const donutData = Array.from(
    d3.group(accountData, d => d.Acct_Industry),
    ([industry, records]) => ({
      label: industry,
      value: records.reduce((sum, item) => sum + item.acv, 0),
    })
  );

  return (
    <Grid container spacing={2} p={2}>
      {/* Navigation Buttons */}
      <Grid item xs={12}>
        <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
          <Button variant="outlined" component={Link} to="/">Customer Dashboard</Button>
          <Button variant="outlined" component={Link} to="/team">Team Dashboard</Button>
          <Button variant="outlined" component={Link} to="/acv">ACV Dashboard</Button>
        </Stack>
      </Grid>

      <SectionHeader title="Won ACV Mix by Industry" />
      <ChartSection
        data={accountData}
        donutData={donutData}
        totalACV={totalACV}
        groupKey="Acct_Industry"
      />
      <TableSection data={accountData} groupKey="Acct_Industry"/>
    </Grid>
  );
};

export default AccountDashboard;
