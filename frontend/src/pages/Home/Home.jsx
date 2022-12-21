import './index.css';

import ItemMenu from '../../components/itemMenu/ItemMenu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileClipboard, faGauge, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import MiniDashboard from '../../components/miniDashboard/MiniDashboard';
import MiniDashboardInfo from '../../components/miniDashboardInfo/MiniDashboardInfo';
import Version from '../../components/version/Version';

function Home() {
    return (
        <div class="antialiased bg-black w-full min-h-screen text-slate-300 relative py-4">
            <div class="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
                <div id="menu" class="bg-white/10 col-span-3 rounded-lg p-4">
                    <h1 class="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 to-transparent bg-clip-text text-transparent">Amigo Animal<span class="text-indigo-400">.</span></h1>
                    <p class="text-slate-400 text-sm mb-2">Welcome Lucas Paris</p>
                    <a href="#" class="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                        <div>
                            <img class="rounded-full w-10 h-10 relative object-cover" src="https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=1800&t=st=1669749937~exp=1669750537~hmac=4c5ab249387d44d91df18065e1e33956daab805bee4638c7fdbf83c73d62f125" alt="" />
                        </div>
                        <div>
                            <p class="font-medium group-hover:text-indigo-400 leading-4">Lucas Paris</p>
                            <span class="text-xs text-slate-400">Old Dead Memories</span>
                        </div>
                    </a>
                    <hr class="my-2 border-slate-700" />
                    <div id="menu" class="flex flex-col space-y-2 my-5">
                        <ItemMenu icon={<FontAwesomeIcon icon={faGauge} />} name={'Dashboard'} description={'Visão gráfica dos dados'} />
                        <ItemMenu icon={<FontAwesomeIcon icon={faUserPlus} />} name={'Usuário'} description={'Cadastro de novos usuários'} />
                        <ItemMenu icon={<FontAwesomeIcon icon={faFileClipboard} />} name={'Relatório'} description={'Gerar relatórios'} />
                        <ItemMenu icon={<FontAwesomeIcon icon={faFileClipboard} />} name={'Doações'} description={'Manutenção de doações'} />
                    </div>
                    <Version version={'v0.0.0'} author={'Lucas Paris'} />
                </div>
                <div id="content" class="bg-white/10 col-span-9 rounded-lg p-6">
                    <div id="24h">
                        <h1 class="font-bold py-4 uppercase">Informações sobre os animais</h1>
                        <div id="stats" class="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <MiniDashboard icon={<FontAwesomeIcon icon={faFileClipboard} />} title={'Para adoção'} data={845} />
                            <MiniDashboard icon={<FontAwesomeIcon icon={faFileClipboard} />} title={'Para adoção'} data={845} />
                            <MiniDashboard icon={<FontAwesomeIcon icon={faFileClipboard} />} title={'Para adoção'} data={845} />
                        </div>
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
                    <div id="last-users">
                        <h1 class="font-bold py-4 uppercase">Last 24h users</h1>
                        <div class="overflow-x-scroll">
                            <table class="w-full whitespace-nowrap">
                                <thead class="bg-black/60">
                                    <th class="text-left py-3 px-2 rounded-l-lg">Name</th>
                                    <th class="text-left py-3 px-2">Email</th>
                                    <th class="text-left py-3 px-2">Status</th>
                                    <th class="text-left py-3 px-2 rounded-r-lg">Ações</th>
                                </thead>
                                <tr class="border-b border-gray-700">
                                    <td class="py-3 px-2 font-bold">
                                        <div class="inline-flex space-x-3 items-center">
                                            <span><img class="rounded-full w-8 h-8" src="https://images.generated.photos/tGiLEDiAbS6NdHAXAjCfpKoW05x2nq70NGmxjxzT5aU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM4ODM1LmpwZw.jpg" alt="" /></span>
                                            <span>Thai Mei</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-2">thai.mei@abc.com</td>
                                    <td class="py-3 px-2">Approved</td>
                                    <td class="py-3 px-2">
                                        <div class="inline-flex items-center space-x-3">
                                            <a href="" title="Edit" class="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                            </a>
                                            <a href="" title="Edit password" class="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                            </svg>
                                            </a>
                                            <a href="" title="Suspend user" class="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                            </svg>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b border-gray-700">
                                    <td class="py-3 px-2 font-bold">
                                        <div class="inline-flex space-x-3 items-center">
                                            <span><img class="rounded-full w-8 h-8" src="https://images.generated.photos/tGiLEDiAbS6NdHAXAjCfpKoW05x2nq70NGmxjxzT5aU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM4ODM1LmpwZw.jpg" alt="" /></span>
                                            <span>Thai Mei</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-2">thai.mei@abc.com</td>
                                    <td class="py-3 px-2">Approved</td>
                                    <td class="py-3 px-2">
                                        <div class="inline-flex items-center space-x-3">
                                            <a href="" title="Edit" class="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                            </a>
                                            <a href="" title="Edit password" class="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                            </svg>
                                            </a>
                                            <a href="" title="Suspend user" class="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                            </svg>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b border-gray-700">
                                    <td class="py-3 px-2 font-bold">
                                        <div class="inline-flex space-x-3 items-center">
                                            <span><img class="rounded-full w-8 h-8" src="https://images.generated.photos/tGiLEDiAbS6NdHAXAjCfpKoW05x2nq70NGmxjxzT5aU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM4ODM1LmpwZw.jpg" alt="" /></span>
                                            <span>Thai Mei</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-2">thai.mei@abc.com</td>
                                    <td class="py-3 px-2">Approved</td>
                                    <td class="py-3 px-2">
                                        <div class="inline-flex items-center space-x-3">
                                            <a href="" title="Edit" class="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                            </a>
                                            <a href="" title="Edit password" class="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                            </svg>
                                            </a>
                                            <a href="" title="Suspend user" class="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                            </svg>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b border-gray-700">
                                    <td class="py-3 px-2 font-bold">
                                        <div class="inline-flex space-x-3 items-center">
                                            <span><img class="rounded-full w-8 h-8" src="https://images.generated.photos/niCVbIBAm4hahzwS83HoEtcVEIactkKohOzgXWYY4lM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTk4ODczLmpwZw.jpg" alt="" /></span>
                                            <span>Marquez Spineli</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-2">marquez.spineli@cba.com</td>
                                    <td class="py-3 px-2">Approved</td>
                                    <td class="py-3 px-2">
                                        <div class="inline-flex items-center space-x-3">
                                            <a href="" title="Edit" class="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                            </a>
                                            <a href="" title="Edit password" class="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                            </svg>
                                            </a>
                                            <a href="" title="Suspend user" class="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                            </svg>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b border-gray-800">
                                    <td class="py-3 px-2 font-bold">
                                        <div class="inline-flex space-x-3 items-center">
                                            <span><img class="rounded-full w-8 h-8" src="https://images.generated.photos/f_xU7q780YXiKG7IwKVV05eU6Sj2nIodEkN1S8GyM2M/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDk2MTc4LmpwZw.jpg" alt="" /></span>
                                            <span>Mark Spike</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-2">mark.spike@abc.com</td>
                                    <td class="py-3 px-2">Approved</td>
                                    <td class="py-3 px-2">
                                        <div class="inline-flex items-center space-x-3">
                                            <a href="" title="Edit" class="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                            </a>
                                            <a href="" title="Edit password" class="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                            </svg>
                                            </a>
                                            <a href="" title="Suspend user" class="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                            </svg>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;