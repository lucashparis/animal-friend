import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function RegistrationHeader(props) {
    return (
        <div class="flex space-x-2 justify-between items-center">
            <h1 class="font-bold py-4 uppercase">{props.title}</h1>
            <Link to={'/usuario/cadastrar'}>
                <Button className="inline-block h-3/4 px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out" 
                    variant="contained" 
                    color="success" 
                >
                    Novo
                </Button>
            </Link>
        </div>
    );
}

export { RegistrationHeader };