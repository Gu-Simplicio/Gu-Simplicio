import { useState } from "react";
import EDUCATION from "../../model/education";
import Button from "../Button/Button";

function EducationCard(props){
    const {education} = props
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div className="border-b py-3">
            <div>
                <h1 className="text-[2rem] font-bold">
                    { education.degree } - { education.institution }
                </h1>
                <h4 className="text-[1.5rem] text-end font-semibold w-1/2">
                    { education.period }
                </h4>
                <Button
                    txt={showDescription ? "Ver menos" : "Ver mais"}
                    func={() => setShowDescription(!showDescription)}/>
            </div>
            <div className={`
                ${showDescription ? 'flex' : 'hidden'}
                `}>
                Hello World!!
            </div>
        </div>
    )
}

function SectionThree() {
    return (
        <section id="educacao">
            <h1 className="
                    pl-5
                    text-[3.5rem] font-semibold 
                    border-b">
                Educação
            </h1>

            {
                EDUCATION.map((education) => (
                    <EducationCard key={education.id} education={education} />
                ))
            }
        </section>
    )
}

export default SectionThree;