import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { users } from './makeData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const renderActionsButton = () => {
  return (
    <div class="flex justify-evenly w-full">
      <FontAwesomeIcon icon={faPencil} class="cursor-pointer h-6"/>
      <FontAwesomeIcon icon={faTrashAlt} class="cursor-pointer h-6"/>
    </div>
  )
}

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Nome', width: 130 },
  { field: 'user', headerName: 'Usuário', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'dtRegister', headerName: 'Cadastrado', width: 130 },
  { field: 'dtUpdate', headerName: 'Alteração', width: 130 },
  {
    field: 'actions',
    headerName: 'Ações',
    description: 'actions.',
    sortable: false,
    width: 160,
    renderCell : renderActionsButton,
  },
];

export default function TableUI() {
  return (
    <div style={{ height: 400, width: '100%', backgroundColor: 'white' }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
