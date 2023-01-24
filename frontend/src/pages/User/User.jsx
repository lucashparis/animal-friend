import { useEffect, useState } from 'react';
import { RegistrationHeader } from '../../components/registrationHeader/RegistrationHeader';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { TableUI } from '../../components/tableUI/TableUI';
import './index.css';

import { getUsersAction } from '../../store/actions/userActions';

import moment from 'moment';
import { Link } from 'react-router-dom';

function User(props) {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);
    
    const getUsers = async () => {
        const users = await getUsersAction();
        const result = users.map(user => {
            return { ...user, 
                createdAt: moment(user.createdAt).format('DD/MM/YYYY'),
                updatedAt: moment(user.updatedAt).format('DD/MM/YYYY')
            }
        });
        setRows(result ? result : []);
    }

    const renderActionsButton = (params) => {
        return (
            <div class="flex justify-evenly w-full">
                <Link to={`/usuario/editar`}>
                    <a href="" title="Edit" class="hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </a>
                </Link>
            </div>
        )
    }

    const columns = [
        { field: 'nome', headerName: 'Nome', width: 130 },
        { field: 'usuario', headerName: 'Usuário', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'status', headerName: 'Status', width: 80 },
        { field: 'createdAt', headerName: 'Cadastrado', width: 130 },
        { field: 'updatedAt', headerName: 'Alteração', width: 130 },
        {
            field: 'actions',
            headerName: 'Ações',
            description: 'actions',
            sortable: false,
            width: 60,
            renderCell : (rows) => {
                return (
                    <div class="flex justify-evenly w-full">
                        <Link to={`/usuario/editar/${rows.row.id}`}>
                            <a href="" title="Edit" class="hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </a>
                        </Link>
                    </div>
                );
            }
        },
    ];

    return (
        <div class="antialiased bg-my-gray w-full min-h-screen text-slate-300 relative py-4">
            <div class="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
                <Sidebar />
                <div id="content" class="bg-my-black col-span-9 rounded-lg p-6">
                    <RegistrationHeader title={'Cadastro de usuário'} buttonName={'Cadastrar'} />
                    <TableUI columns={columns} rows={rows} />
                </div>
            </div>
        </div>
    );
}

export { User };