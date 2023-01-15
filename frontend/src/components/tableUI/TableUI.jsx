import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { users } from './makeData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const renderActionsButton = () => {
  return (
    <div class="flex justify-evenly w-full">
      <a href="" title="Edit" class="hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
      </a>
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
    <div style={{ width: '100%', height: '90%', backgroundColor: 'white' }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
