// src/pages/TeamDashboard.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, CircularProgress, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { getTeamData } from '../features/team/teamSlice';
import * as d3 from 'd3';

import SectionHeader from '../components/common/SectionHeader';
import ChartSection from '../components/common/ChartSection';
import TableSection from '../components/common/TableSection';

const TeamDashboard = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.team);

  useEffect(() => {
    dispatch(getTeamData());
  }, [dispatch]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  const teamData = Array.isArray(data) ? data : [];

  const totalACV = teamData.reduce((sum, item) => sum + item.acv, 0);

  const donutData = Array.from(
    d3.group(teamData, d => d.Team),
    ([team, records]) => ({
      label: team,
      value: records.reduce((sum, item) => sum + item.acv, 0),
    })
  );

  return (
    <Grid container spacing={2} p={2}>
      {/* Navigation Buttons */}
      <Grid item xs={12}>
        <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
          <Button variant="outlined" component={Link} to="/">Customer Dashboard</Button>
          <Button variant="outlined" component={Link} to="/acv">ACV Dashboard</Button>
          <Button variant="outlined" component={Link} to="/account">Account Dashboard</Button>
        </Stack>
      </Grid>

      <SectionHeader title="Won ACV Mix by Team" />
      <ChartSection
        data={teamData}
        donutData={donutData}
        totalACV={totalACV}
        groupKey="Team"
      />
      <TableSection data={teamData}  groupKey="Team"/>
    </Grid>
  );
};

export default TeamDashboard;
