import { Button } from "../button/Button";

function RegistrationHeader(props) {
    return (
        <div class="flex space-x-2 justify-between items-center">
            <h1 class="font-bold py-4 uppercase">{props.title}</h1>
            <Button name={props.buttonName} />
        </div>
    );
}

export { RegistrationHeader };