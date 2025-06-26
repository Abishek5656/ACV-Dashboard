// // src/components/common/ChartSection.jsx
// import React from 'react';
// import { Grid, Card, CardContent } from '@mui/material';
// import BarChart from '../charts/BarChart';
// import DoughnutChart from '../charts/DoughnutChart';

// const ChartSection = ({ data, donutData, totalACV, groupKey }) => {
//   console.log("ChartSection ->", { data, donutData, totalACV, groupKey });

//   return (
//     <>
//       <Grid item xs={12} md={8}>
//         <Card>
//           <CardContent>
//             <BarChart data={data} groupKey={groupKey} />
//           </CardContent>
//         </Card>
//       </Grid>

//       <Grid item xs={12} md={4}>
//         <Card>
//           <CardContent>
//             <DoughnutChart data={donutData} total={totalACV} groupKey={groupKey} />
//           </CardContent>
//         </Card>
//       </Grid>
//     </>
//   );
// };

// export default ChartSection;
// src/components/common/ChartSection.jsx
import React from 'react';
import { Grid, Card, CardContent } from '@mui/material';
import BarChart from '../charts/BarChart.jsx';
import DoughnutChart from '../charts/DoughnutChart.jsx';

const ChartSection = ({ data, donutData, totalACV, groupKey }) => {
  // console.log("ChartSection ->", { data, donutData, totalACV, groupKey });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Card>
          <CardContent>
            <BarChart data={data} groupKey={groupKey} />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <DoughnutChart data={donutData} total={totalACV} groupKey={groupKey} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ChartSection;
