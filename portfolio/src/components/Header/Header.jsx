function HeaderLink(props) {
    const { txt, ref } = props;

    return(
        <a href={ref} className="hover:font-semibold transition-all">
            { txt }
        </a>
    )
}

function Header(){
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
            <div className="md:hidden flex
                    ">
                <h1>Tela de cll</h1>
            </div>
        </header>
    );
} 

export default Header;