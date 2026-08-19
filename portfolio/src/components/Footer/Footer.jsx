import Button from "../Button/Button";

function Footer(){
    const copyText = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            alert("Texto copiado!");
        } catch(erro) {
            alert("Erro ao tentar copiar!");
        }
    }

    return (
        <footer id="contatos" className="
                    pt-5 pb-15 px-10
                    w-screen bg-[var(--bg-color2)]">
            <h1 className="text-[1.75rem] font-bold pb-5">
                Contatos
            </h1>

            <div className="flex items-center gap-2 text-[1.5rem]">
                <div className="w-1/2">
                    <p>
                        <b>Telefone:</b> (13) 9 8876-3203 <Button txt="C" func={() => copyText("(13)988763203")} />
                    </p>
                    <p>
                        <b>E-mail: </b> gustavo.simplicio26@outlook.com <Button txt="C" func={() => copyText("gustavo.simplicio26@outlook.com")} />
                    </p>
                </div>
                <div className="w-1/2">
                    <p>
                        <b>Linkedin: </b> <a className="hover:opacity-75" title="Ir para o linkedin"
                                            href="https://linkedin.com/in/gustavo-silva-simplicio">https://linkedin.com/in/gustavo-silva-simplicio</a> <Button txt="C" func={() => copyText("https://linkedin.com/in/gustavo-silva-simplicio")} />
                    </p>
                    <p>
                        <b>Github: </b> <a className="hover:opacity-75" title="Ir para o linkedin"
                                            href="https://github.com/Gu-Simplicio">https://github.com/Gu-Simplicio</a> <Button txt="C" func={() => copyText("https://github.com/Gu-Simplicio")} />
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;