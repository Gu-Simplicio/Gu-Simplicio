import Button from "../Button/Button";
import PROJECTS from "../../model/projects";

function SectionTwo(){
    return (
        <section id="projetos">
            <h1 className="
                    pl-5
                    text-[3.5rem] font-semibold 
                    border-b">
                Meus Projetos
            </h1>

            {
                PROJECTS.map((project) => (
                    <div 
                        key={project.id}
                        className="
                            w-1/1 flex justify-between border-t py-10">
                        <div className="
                            flex w-1/2">
                            <img 
                                src={`./projectsImages/${project.name}.png`} alt="" 
                                className=" w-[150px] h-[150px] bg-[var(--btn-color)]"/>

                            <h2 className="pl-3 text-[2rem] font-semibold">
                                { project.name }
                            </h2>
                        </div>

                        <div className="
                            w-1/2 flex flex-col">
                            <h2 className="pr-3 text-end text-[2rem] font-semibold">
                                Descrição
                            </h2>

                            <p className="text-end text-xl">
                                {project.description}
                            </p>

                            <div className="flex gap-5 self-end pt-3">
                                {project.githubUrl ? <a href={project.githubUrl} title="Veja o projeto no github" className="hover:opacity-75">Projeto no Github</a> : ''}
                                {project.projectUrl ? <a href={project.projectUrl} title="Veja o projeto no ar" className="hover:opacity-75">Projeto no ar</a> : ''}
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}
export default SectionTwo;