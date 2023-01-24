import { useEffect, useState } from "react";

import { FormControl, TextField, InputLabel, InputAdornment, IconButton, Input, Autocomplete, Button, FormHelperText } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { Sidebar } from "../../../components/sidebar/Sidebar";
import { MyAlert } from "../../../components/myAlert/MyAlert";

import { getUserToEditAction } from "../../../store/actions/userActions";

import '../Register/index.css';
import { useParams } from "react-router-dom";

function Edit() {
    
    const {id} = useParams();
    
    return (
        <h1> ola {id}</h1>
    );
}

export { Edit };
