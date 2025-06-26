import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, CircularProgress, Typography, Stack, Button } from '@mui/material';
import { getCustomerACV } from '../features/acv/acvTypeSlice';
import * as d3 from 'd3';
import { Link } from 'react-router-dom';

import SectionHeader from '../components/common/SectionHeader';
import ChartSection from '../components/common/ChartSection';
import TableSection from '../components/common/TableSection';

const ACVDashboard = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.acv);

  useEffect(() => {
    dispatch(getCustomerACV());
  }, [dispatch]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  const acvData = Array.isArray(data) ? data : [];
  const totalACV = acvData.reduce((sum, item) => sum + item.acv, 0);

  const donutData = Array.from(
    d3.group(acvData, d => d.ACV_Range),
    ([type, records]) => ({
      label: type,
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
          <Button variant="outlined" component={Link} to="/account">Account Dashboard</Button>
        </Stack>
      </Grid>

      <SectionHeader title="Won ACV Mix by ACV Type" />
      <ChartSection
        data={acvData}
        donutData={donutData}
        totalACV={totalACV}
        groupKey="ACV_Range"
      />
      <TableSection data={acvData} />
    </Grid>
  );
};

export default ACVDashboard;
