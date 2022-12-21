import '../../pages/Home/index.css';

function Version(props) {
    const year = new Date().getFullYear();
 
    return (
        <p class="text-sm text-center text-gray-600">{props.version} | &copy; {year} {props.author}</p>
    );
}

export default Version;