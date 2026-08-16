import STACKS from "../../model/stacks";
import GithubIcon from "../icons/GitHubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

function StackList() {
    return (
        <ul className="mt-10 flex gap-3 flex-wrap justify-end">
            {
                STACKS.map((stack) => (
                    <li key={stack.id} className="
                                            border py-2 px-3
                                            flex flex-col items-ce center
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
                    <div className="flex gap-10 pt-5">
                        <a href="https://github.com/Gu-Simplicio" target="_blank" title="Visite meu Github">
                            <GithubIcon />
                        </a>

                        <a href="https://linkedin.com/in/gustavo-silva-simplicio" target="_blank" title="Visite meu Linkedin">
                            <LinkedinIcon/>
                        </a>
                    </div>
                    { /* space to button 'download CV' */ }
                </div>
            </div>            
            <div className="w-1/2 "> {/* right */}
                <div className="flex flex-col gap-15 pt-15 pb-15"> {/* right-top */}
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