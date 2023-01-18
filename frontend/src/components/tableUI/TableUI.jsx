import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


function TableUI({columns, rows}) {
  return (
    <div style={{ width: '100%', height: '90%', backgroundColor: 'white' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5]}
        />
    </div>
  );
}

export { TableUI };