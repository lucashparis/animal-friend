import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
  DataTypeProvider,
  TreeDataState, SortingState, SelectionState, FilteringState, PagingState,
  CustomTreeData, IntegratedFiltering, IntegratedPaging, IntegratedSorting, IntegratedSelection,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table, TableHeaderRow, TableFilterRow, TableTreeColumn,
  PagingPanel, TableColumnResizing, Toolbar, TableColumnVisibility, ColumnChooser,
} from '@devexpress/dx-react-grid-material-ui';

import { tasks, employees, priorities } from './tree-data';

const EmployeeFormatter = ({ row }) => (
  <div
    style={{
      display: 'flex',
    }}
  >
    <div
      style={{
        display: 'inline-block',
        background: 'white',
        borderRadius: '3px',
        width: '30px',
        height: '30px',
        margin: '-8px 8px -8px 0',
        textAlign: 'center',
      }}
    >
      <img
        src={`https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/${employees.find(e => e.ID === row.Assigned_Employee_ID).Picture}`}
        style={{
          height: '28px',
          margin: '0 auto',
        }}
        alt="Avatar"
      />
    </div>
    {employees.find(e => e.ID === row.Assigned_Employee_ID).Name}
  </div>
);

const getChildRows = (row, rows) => {
  const childRows = rows.filter(r => r.Parent_ID === (row ? row.ID : 0));
  return childRows.length ? childRows : null;
};

function TableUI(params) {
  const [columns] = useState([
    { name: 'Assigned_Employee_ID', title: 'Assigned', getCellValue: row => employees.find(e => e.ID === row.Assigned_Employee_ID).Name },
    { name: 'Status', title: 'Status' },
    { name: 'Priority', title: 'Priority', getCellValue: row => priorities.find(p => p.ID === row.Priority).Value },
    { name: 'Completion', title: '% Completed', getCellValue: row => `${row.Completion}%` },
    { name: 'Start_Date', title: 'Start Date', getCellValue: row => row.Start_Date.split('T')[0] },
    { name: 'Due_Date', title: 'Due Date', getCellValue: row => row.Due_Date.split('T')[0] },
  ]);
  const [rows] = useState(tasks);
  const [pageSizes] = useState([5, 10, 20]);
  // 177.33
  const [defaultColumnWidths] = useState([
    { columnName: 'Assigned_Employee_ID', width: 177.33},
    { columnName: 'Status', width: 177 },
    { columnName: 'Priority', width: 177 },
    { columnName: 'Completion', width: 177 },
    { columnName: 'Start_Date', width: 177 },
    { columnName: 'Due_Date', width: 177 },
  ]);
  const [defaultHiddenColumnNames] = useState(['Priority', 'Completion']);
  const [tableColumnExtensions] = useState([
    { columnName: 'Completion', align: 'right' },
  ]);
  const [employeeColumns] = useState(['Assigned_Employee_ID']);

  return (
    <Paper>
      <Grid rows={rows} columns={columns}>
        <DataTypeProvider
          for={employeeColumns}
          formatterComponent={EmployeeFormatter}
        />

        <TreeDataState />
        <FilteringState />
        <SortingState />
        <SelectionState />
        <PagingState defaultCurrentPage={0} defaultPageSize={pageSizes[1]} />

        <CustomTreeData getChildRows={getChildRows} />
        <IntegratedFiltering />
        <IntegratedSelection />
        <IntegratedSorting />
        <IntegratedPaging />

        <Table columnExtensions={tableColumnExtensions} />
        <TableColumnVisibility defaultHiddenColumnNames={defaultHiddenColumnNames} />
        <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
        <TableHeaderRow showSortingControls />
        <TableFilterRow />

        <Toolbar />
        <ColumnChooser />

        <PagingPanel pageSizes={pageSizes} />
      </Grid>
    </Paper>
  );
};

export default TableUI;