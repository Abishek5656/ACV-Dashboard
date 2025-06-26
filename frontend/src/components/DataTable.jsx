// src/components/DataTable.jsx
import React from 'react';
import {
  Table, TableBody, TableCell,
  TableHead, TableRow, Typography
} from '@mui/material';

const formatMoney = val => `$${(val / 1000).toFixed(0)}K`;

const DataTable = ({ data }) => {
  const grouped = {};

  data.forEach(row => {
    const quarter = row.closed_fiscal_quarter;
    if (!grouped[quarter]) grouped[quarter] = [];
    grouped[quarter].push(row);
  });

  const totals = data.reduce(
    (acc, curr) => ({
      count: acc.count + curr.count,
      acv: acc.acv + curr.acv
    }),
    { count: 0, acv: 0 }
  );

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Opportunity Table
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Cust Type</TableCell>
            {Object.keys(grouped).map(q => (
              <TableCell
                key={q}
                align="center"
                colSpan={3}
                sx={{
                  backgroundColor: ['2023-Q3', '2024-Q1'].includes(q)
                    ? '#1976d2'   // Dark Blue
                    : '#90caf9',  // Light Blue
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                {q}
              </TableCell>
            ))}
            <TableCell
              align="center"
              colSpan={3}
              sx={{
                backgroundColor: '#1565c0',  // Total header
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              Total
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell />
            {Object.keys(grouped).map((_, idx) => (
              <React.Fragment key={idx}>
                <TableCell># of Opps</TableCell>
                <TableCell>ACV</TableCell>
                <TableCell>% of Total</TableCell>
              </React.Fragment>
            ))}
            <TableCell># of Opps</TableCell>
            <TableCell>ACV</TableCell>
            <TableCell>% of Total</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {['Existing Customer', 'New Customer'].map(type => {
            const rowData = [];
            let totalCount = 0;
            let totalACV = 0;

            Object.values(grouped).forEach(quarterRows => {
              const entry = quarterRows.find(r => r.Cust_Type === type);
              if (entry) {
                totalCount += entry.count;
                totalACV += entry.acv;
                rowData.push(entry);
              } else {
                rowData.push({ count: 0, acv: 0 });
              }
            });

            return (
              <TableRow key={type}>
                <TableCell>{type}</TableCell>
                {rowData.map((d, i) => (
                  <React.Fragment key={i}>
                    <TableCell>{d.count}</TableCell>
                    <TableCell>{formatMoney(d.acv)}</TableCell>
                    <TableCell>{((d.acv / totals.acv) * 100).toFixed(0)}%</TableCell>
                  </React.Fragment>
                ))}
                <TableCell>{totalCount}</TableCell>
                <TableCell>{formatMoney(totalACV)}</TableCell>
                <TableCell>{((totalACV / totals.acv) * 100).toFixed(0)}%</TableCell>
              </TableRow>
            );
          })}

          <TableRow sx={{ fontWeight: 'bold' }}>
            <TableCell><strong>Total</strong></TableCell>
            {Object.values(grouped).map((qr, i) => {
              const t = qr.reduce((acc, r) => ({
                count: acc.count + r.count,
                acv: acc.acv + r.acv
              }), { count: 0, acv: 0 });

              return (
                <React.Fragment key={i}>
                  <TableCell><strong>{t.count}</strong></TableCell>
                  <TableCell><strong>{formatMoney(t.acv)}</strong></TableCell>
                  <TableCell><strong>100%</strong></TableCell>
                </React.Fragment>
              );
            })}
            <TableCell><strong>{totals.count}</strong></TableCell>
            <TableCell><strong>{formatMoney(totals.acv)}</strong></TableCell>
            <TableCell><strong>100%</strong></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default DataTable;
