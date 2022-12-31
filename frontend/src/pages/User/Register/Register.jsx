import { FormControl, OutlinedInput, TextField, InputLabel, InputAdornment, IconButton, Input, Autocomplete, Button  } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

import Sidebar from "../../../components/sidebar/Sidebar";
import { createNewUserAction } from "../../../store/actions/userActions";

function Register() {

    const statusOptions = ['Ativo', 'Inativo'];

    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [status, setStatus] = useState(null);

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

    const createNewUser = async () => {
        const objUser = {
            name: name,
            user: user,
            password: password,
            email: email,
            status: status,
        }
        await createNewUserAction(objUser);
    }

    return (
        <div class="antialiased bg-black w-full min-h-screen text-slate-300 relative py-4">
            <div class="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">

                <Sidebar />

                <div id="content" class="bg-white/10 col-span-9 rounded-lg p-6">
                    <div class='flex justify-between'>
                        <TextField id="name" label="Nome" variant="standard" onChange={(e) => setName(e.target.value)} />
                        <TextField id="user" label="Usuário" variant="standard" onChange={(e) => setUser(e.target.value)} />
                        <TextField id="email" label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div class='flex justify-between'>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="password"> Senha </InputLabel>
                            <Input
                                id="password"
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
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="confirmPassword"> Confirmar Senha </InputLabel>
                            <Input
                                id="confirmPassword"
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
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </FormControl>
                        <Autocomplete
                            options={statusOptions}
                            id="status"
                            autoSelect
                            renderInput={(params) => (
                                <TextField {...params} label="Status" variant="standard" />
                            )}
                            onChange={(e, value) => setStatus(value)}
                        />
                    </div>
                    <div className="flex justify-end">
                        <Button variant="contained" color="success"
                            onClick={() => createNewUser() }
                        >
                            Success
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Register };
