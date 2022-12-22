import { faCircleDollarToSlot, faFileClipboard, faGauge, faPaw, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import '../../pages/Home/index.css';
import ItemMenu from '../itemMenu/ItemMenu';
import Version from '../version/Version';

function Sidebar(props) {
    return (
        <div id="menu" class="bg-white/10 col-span-3 rounded-lg p-4">
            <h1 class="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 to-transparent bg-clip-text text-transparent">Amigo Animal<span class="text-indigo-400">.</span></h1>
            <p class="text-slate-400 text-sm mb-2">Bem-Vindo Lucas Paris</p>
            <div href="#" class="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                <div>
                    <img class="rounded-full w-10 h-10 relative object-cover" src="https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=1800&t=st=1669749937~exp=1669750537~hmac=4c5ab249387d44d91df18065e1e33956daab805bee4638c7fdbf83c73d62f125" alt="" />
                </div>
                <div>
                    <p class="font-medium group-hover:text-indigo-400 leading-4">Lucas Paris</p>
                    <span class="text-xs text-slate-400">Old Dead Memories</span>
                </div>
            </div>
            <hr class="my-2 border-slate-700" />
            <div id="menu" class="flex flex-col space-y-2 my-5">
                <Link to={'/'}><ItemMenu icon={<FontAwesomeIcon icon={faGauge} />} name={'Dashboards'} description={'Visão gráfica dos dados'} /></Link>
                <Link to={'/animal'}><ItemMenu icon={<FontAwesomeIcon icon={faPaw} />} name={'Animais'} description={'Manutenção de animais'} /></Link>
                <Link to={'/usuario'}><ItemMenu icon={<FontAwesomeIcon icon={faUserPlus} />} name={'Usuários'} description={'Cadastro de novos usuários'} /></Link>
                <Link to={'/doacao'}><ItemMenu icon={<FontAwesomeIcon icon={faCircleDollarToSlot} />} name={'Doações'} description={'Manutenção de doações'} /></Link>
                <Link to={'/relatorio'}><ItemMenu icon={<FontAwesomeIcon icon={faFileClipboard} />} name={'Relatórios'} description={'Gerar relatórios'} /></Link>
            </div>
            <Version version={'V0.0.0'} author={'Lucas Paris'} />
        </div>
    );
}

export default Sidebar;