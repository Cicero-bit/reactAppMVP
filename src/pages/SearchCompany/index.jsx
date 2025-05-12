import icon from "../../assets/iconfallback.png"

export default function SearchCompany() {
    return(
        <main className=" max-w-7/10 mx-auto flex">
            <aside className="justify-self-start bg-white rounded-lg">
                <div className="border-solid border-1 rounded-lg p-4 flex flex-col gap-5 max-w-120 min-h-80">
                    <div className="flex items-center gap-5">
                        <img src={icon} className="w-15"/>
                        <h1 className="text-xl">Lorenzo pewpew</h1>
                    </div>
                        <h2 className="text-md  self-center">Sou segurança a 10 anos, já trabalhei para a Lady Gaga</h2>
                        
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg">Atuação: </h3>
                        <p className="text-sm">Shows, encontros corporativos, segurança pessoal e pequenas lojas</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg">Competências: </h3>
                        <p className="text-sm">Armado, armas não letais, Jiu-Jitsu, Noturno, Diurno, Alerta</p>
                    </div>
                
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg">Experiências: </h3>
                        <ul>
                            <li className="text-sm">Lady Gaga Show</li>
                            <li className="text-sm">Boteco do zé</li>
                            <li className="text-sm">Reunião Corporativo</li>
                        </ul>
                    </div>

                </div>
            </aside>
            <article className="justify-self-center w-screen px-10">
                <div className="bg-white shadow-lg h-100">a</div>
            </article>
        </main>
    )
}