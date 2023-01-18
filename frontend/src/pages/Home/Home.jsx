import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileClipboard } from '@fortawesome/free-solid-svg-icons'
import MiniDashboard from '../../components/miniDashboard/MiniDashboard';
import MiniDashboardInfo from '../../components/miniDashboardInfo/MiniDashboardInfo';
import { Sidebar } from '../../components/sidebar/Sidebar';

function Home() {
    return (
        <div class="antialiased bg-my-gray w-full min-h-screen text-slate-300 relative py-4">
            <div class="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
                <Sidebar />
                
                <div id="content" class="bg-my-black col-span-9 rounded-lg p-6 shadow-[10px_10px_5px_-3px_rgba(0,0,0,0.36)]">
                    <h1 class="font-bold py-4 uppercase">Informações sobre os animais</h1>
                    <div id="stats" class="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <MiniDashboard icon={<FontAwesomeIcon icon={faFileClipboard} />} title={'Para adoção'} data={845} />
                        <MiniDashboard icon={<FontAwesomeIcon icon={faFileClipboard} />} title={'Para adoção'} data={845} />
                        <MiniDashboard icon={<FontAwesomeIcon icon={faFileClipboard} />} title={'Para adoção'} data={845} />
                    </div>
                    <div id="last-incomes">
                        <h1 class="font-bold py-4 uppercase">Last 24h incomes</h1>
                        <div id="stats" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            <MiniDashboardInfo 
                                icon={<FontAwesomeIcon icon={faFileClipboard} />} 
                                title={'28$'} 
                                data={'Regis Olivo'} 
                                date={'22 Nov 2022'} 
                            />
                            <MiniDashboardInfo 
                                icon={<FontAwesomeIcon icon={faFileClipboard} />} 
                                title={'28$'} 
                                data={'Regis Olivo'} 
                                date={'22 Nov 2022'} 
                            />
                            <MiniDashboardInfo 
                                icon={<FontAwesomeIcon icon={faFileClipboard} />} 
                                title={'28$'} 
                                data={'Regis Olivo'} 
                                date={'22 Nov 2022'} 
                            />
                            <MiniDashboardInfo 
                                icon={<FontAwesomeIcon icon={faFileClipboard} />} 
                                title={'28$'} 
                                data={'Regis Olivo'} 
                                date={'22 Nov 2022'} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;