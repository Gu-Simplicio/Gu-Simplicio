import { useState } from "react";

function HeaderLink(props) {
    const { txt, ref } = props;

    return(
        <a href={ref} className="hover:font-semibold transition-all">
            { txt }
        </a>
    )
}

function Header(){
    const [openNav, setOpenNav] = useState(false);

    return (
        <header className="fixed top-0 right-0">
            {/* PC SCREEN */}
            <div className="md:flex hidden
                    flex items-center justify-end
                    w-screen py-2 px-4
                    text-xl font-light
                    bg-[var(--bg-color2)]">
                
                {/* links of header */}
                <nav>
                    <HeaderLink txt="Projetos" ref="#projetos"/>
                    |
                    <HeaderLink txt="Educação" ref="#educacao"/>
                    | 
                    <HeaderLink txt="Contatos" ref="#contatos"/>
                    | 
                </nav>
            </div>

            {/* CELPHONE SCREEN */}
            <button 
                className="absolute right-5 top-2 cursor-pointer md:hidden"
                onClick={() => setOpenNav(!openNav)}> 
                {openNav ? 'Fechar' : 'Abrir'}
            </button>
            <div className={`md:hidden flex
                    pt-10 pl-2
                    ${ openNav ? 'w-[7.5rem]' : 'w-[0px]' } h-screen
                    flex-col gap-2
                    bg-[var(--bg-color2)]
                    transition-all`}>
                
                <nav>
                    <ul className="
                            flex flex-col gap-2">
                        <li>
                            <HeaderLink txt="Projetos" ref="#projetos"/>
                        </li>
                        <li>
                            <HeaderLink txt="Educação" ref="#educacao"/>
                        </li>
                        <li>
                            <HeaderLink txt="Contatos" ref="#contatos"/>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
} 

export default Header;