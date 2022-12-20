import '../../pages/Home/index.css';

function MiniDashboard(props) {
    return (
        <div class="bg-black/60 p-6 rounded-lg">
            <div class="flex flex-row space-x-4 items-center">
                <div id="stats-1">
                    {props.icon}
                </div>
                <div>
                    <p class="text-blue-300 text-sm font-medium uppercase leading-4">{props.title}</p>
                    <p class="text-white font-bold text-2xl inline-flex items-center space-x-2">
                        <span>{props.data}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MiniDashboard;