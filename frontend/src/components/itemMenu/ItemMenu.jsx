import '../../pages/Home/index.css';

function ItemMenu(props) {
    return (
        <a href="#" class="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group">
            <div class="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                <div>
                    {props.icon}
                </div>
                <div>
                    <p class="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">{props.name}</p>
                    <p class="text-slate-400 text-sm hidden md:block">{props.description}</p>
                </div>
            </div>
        </a>
    );
}

export default ItemMenu;