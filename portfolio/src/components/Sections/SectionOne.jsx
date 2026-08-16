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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse totam dolore similique, numquam, perspiciatis facere voluptatibus perferendis sed sint ut et tempora dolor molestiae deserunt aliquam eos. Eos, illum quasi.
                    </p>
                </div>
                <div> {/* right-down */}
                    Lista de stacks aparecendo
                </div>
            </div>
        </section>
    )
}

export default SectionOne;