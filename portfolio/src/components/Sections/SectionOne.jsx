import STACKS from "../../model/stacks";

function StackList() {
    return (
        <ul className="mt-10 flex gap-3 flex-wrap justify-end">
            {
                STACKS.map((stack) => (
                    <li key={stack.id} className="
                                            border py-2 px-3
                                            flex flex-col items-center justify-center
                                            text-center font-semibold">
                        
                        <p>
                            {stack.name}
                        </p>
                    </li>
                ))
            }
        </ul>
    )
}

function SectionOne() {
    return (
        <section className="flex align-center justify-between">
            <div className="w-1/2"> {/* left */}
                <div> {/* left-top */}
                    <h1 className="
                            pl-3
                            text-[4.5rem] font-semibold">
                        Gustavo Silva Simplicio
                    </h1>
                    <h5 className="
                            pr-15
                            text-[2.5rem] text-end font-bold opacity-70">
                        Desenvolvedor Web
                    </h5>
                </div>
                <div> {/* left-down */}
                    
                </div>
            </div>            
            <div className="w-1/2"> {/* right */}
                <div className="flex flex-col pt-15"> {/* right-top */}
                    <h1 className="
                            text-[3.5rem] font-semibold text-end">
                        Sobre mim
                    </h1>
                    <p className="
                        w-87/100 self-end
                        text-end text-[1.5rem]">
                        Sou um estudante de Análise em Desenvolvimento de Sistemas formado em Informática para Internet, sempre fui apaixonado por tecnologia e busco construir soluções escaláveis, inteligentes e que, principalmente, resolvam os problemas das pessoas
                    </p>
                </div>
                <div className="flex justify-end"> {/* right-down */}
                    <StackList />
                </div>
            </div>

        </section>
    )
}

export default SectionOne;