import Sidebar from '../../components/sidebar/Sidebar';
import '../../pages/Home/index.css';

function Report(props) {
    return (
        <div class="antialiased bg-my-gray w-full min-h-screen text-slate-300 relative py-4">
            <div class="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
                <Sidebar />
                <div id="content" class="bg-my-black col-span-9 rounded-lg p-6">
                    <div id="24h">
                        <h1 class="font-bold py-4 uppercase">Relatorio</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Report;