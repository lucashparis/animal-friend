import { useState } from "react";

import { FormControl, TextField, InputLabel, InputAdornment, IconButton, Input, Autocomplete, Button, FormHelperText } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import Sidebar from "../../../components/sidebar/Sidebar";
import { MyAlert } from "../../../components/myAlert/MyAlert";

import { createNewUserAction } from "../../../store/actions/userActions";

import './index.css';

function Register() {
    const minimalCharacters = 3; 
    const statusOptions = ['Ativo', 'Inativo'];

    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [status, setStatus] = useState(null);
    const [error, setError] = useState({});

    const [fieldNameWithError, setFieldNameWithError] = useState({ message: '' });
    const [fieldUserWithError, setFieldUserWithError] = useState({ message: '' });
    const [fieldEmailWithError, setFieldEmailWithError] = useState({ message: '' });
    const [fieldPasswordWithError, setFieldPasswordWithError] = useState({ message: '' });
    const [fieldConfirmPasswordWithError, setFieldConfirmPasswordWithError] = useState({ message: '' });
    const [fieldStatusdWithError, setFieldStatusdWithError] = useState({ message: '' });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
    };
    
    const validFieldName = () => {
        if (!name) {
            setError({ message: 'Preencha os campos obrigatórios' });
            setFieldNameWithError({ message: 'Esse campo não pode ser vazio!' });
        } else if(name.length < minimalCharacters){
            setError({ message: 'Preencha os campos obrigatórios' });
            setFieldNameWithError({ message: `Minimo de ${minimalCharacters} caracteres` });
        }
    }

    const validFieldUser = () => {
        if (!user) {
            setError({ message: 'Preencha os campos obrigatórios' });
            setFieldUserWithError({ message: 'Esse campo não pode ser vazio!' });
        } else if(user.length < minimalCharacters){
            setError({ message: 'Preencha os campos obrigatórios' });
            setFieldUserWithError({ message: `Minimo de ${minimalCharacters} caracteres` });
        }
    }
    
    const validFieldEmail = () => {
        if (!email) {
            setError({ message: 'Preencha os campos obrigatórios' });
            setFieldEmailWithError({ message: 'Esse campo não pode ser vazio!' });
        } else if (email) {
            const emailIsValid = verifyEmailIsValid(email);
            if (!emailIsValid) {
                setError({ message: 'Email inválido' });
                setFieldEmailWithError({ message: 'Email inválido!' });
            }
        }
    }
    
    const verifyEmailIsValid = (email) => {
        const regex = /\S+@\S+\.\S+/;
        const emailIsValid = regex.test(email);
        return emailIsValid;
    };

    const validFieldPassword = () => {
        if (!password) {
            setError({ message: 'Preencha os campos obrigatórios' });
            setFieldPasswordWithError({ message: 'Esse campo não pode ser vazio!' });
        }
    }

    const validFieldConfirmPassword = () => {
        if (!confirmPassword) {
            setError({ message: 'Preencha os campos obrigatórios' });
            setFieldConfirmPasswordWithError({ message: 'Esse campo não pode ser vazio!' });
        } else if (confirmPassword !== password){
            setError({ message: 'Senhas não conferem' });
            setFieldConfirmPasswordWithError({ message: 'Senhas não conferem' });
        }
    }
    
    const validFieldStatus = () => {
        if (!status) {
            setError({ message: 'Preencha os campos obrigatórios' });
            setFieldStatusdWithError({ message: 'Esse campo não pode ser vazio!' });
        }
    }

    const createNewUser = async () => {

        validFieldName();
        validFieldUser();
        validFieldEmail();
        validFieldPassword();
        validFieldConfirmPassword();
        validFieldStatus();
        
        const objUser = {
            name: name,
            user: user,
            email: email,
            password: password,
            status: status,
        }

        await createNewUserAction(objUser);
    }

    return (
        <div class="antialiased bg-my-gray w-full min-h-screen text-slate-300 relative py-4">
            <div class="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">

                <Sidebar />

                <div id="content" class="bg-my-black col-span-9 rounded-lg p-6">

                    { error && error.message && (
                        <MyAlert color={'error'} message={error.message} />
                    )}

                    <div class='flex justify-between pb-2.5'>
                        <TextField id="name" className="w-64" label="Nome" variant="standard" required onChange={(e) => setName(e.target.value)} 
                            error={fieldNameWithError.message.length > 0} helperText={fieldNameWithError.message ? fieldNameWithError.message : ''} 
                            InputProps={{ disableUnderline: true }}
                        />
                        <TextField id="user" className="w-64" label="Usuário" variant="standard" required onChange={(e) => setUser(e.target.value)} 
                            error={fieldUserWithError.message.length > 0} helperText={fieldUserWithError.message ? fieldUserWithError.message : ''} 
                            InputProps={{ disableUnderline: true }}
                        />
                        <TextField id="email" className="w-64" label="Email" variant="standard" required onChange={(e) => setEmail(e.target.value)} 
                            error={fieldEmailWithError.message.length > 0} helperText={fieldEmailWithError.message ? fieldEmailWithError.message : ''} 
                            InputProps={{ disableUnderline: true }}
                        />
                    </div>
                    <div class='flex justify-between pb-2.5'>
                        <FormControl variant="standard" error={fieldPasswordWithError.message.length > 0}>
                            <InputLabel htmlFor="password"> Senha </InputLabel>
                            <Input
                                id="password"
                                className="w-64"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FormHelperText id="my-helper-text">{fieldPasswordWithError.message}</FormHelperText>
                        </FormControl>

                        <FormControl variant="standard" error={fieldPasswordWithError.message.length > 0}>
                            <InputLabel htmlFor="confirmPassword"> Confirmar Senha </InputLabel>
                            <Input
                                id="confirmPassword"
                                className="w-64"
                                type={showConfirmPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowConfirmPassword}
                                            onMouseDown={handleMouseDownConfirmPassword}
                                        >
                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                required
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <FormHelperText id="my-helper-text" className="text-[#d32f2f]">{fieldConfirmPasswordWithError.message}</FormHelperText>
                        </FormControl>

                        <FormControl error={fieldStatusdWithError.message.length > 0}>
                            <Autocomplete
                                id="status"
                                className="w-64"
                                options={statusOptions}
                                autoSelect
                                renderInput={(params) => (
                                    <TextField {...params} label="Status" variant="standard" />
                                    )}
                                    onChange={(e, value) => setStatus(value)}
                            />
                            <FormHelperText id="my-helper-text">{fieldStatusdWithError.message}</FormHelperText>
                        </FormControl>
                    </div>
                    <div className="flex justify-end">
                        <Button className="inline-block h-3/4 px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out" 
                            variant="contained" 
                            color="success" 
                            onClick={() => createNewUser()}
                        >
                            Salvar
                        </Button>
                    </div>                               
                </div>
            </div>
        </div>
    );
}

export { Register };
