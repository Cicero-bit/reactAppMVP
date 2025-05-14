import icon from '../../assets/iconfallback.png';

export default function ProfileIndex() {
  return (
    <main className=" max-w-7/10 mx-auto flex">
      <article className="justify-self-center">helo</article>
      <aside className="justify-self-start bg-white rounded-lg">
        <div className="border-solid border-1 rounded-lg p-4 flex flex-col max-w-90 min-h-100">
          <div className="flex items-center gap-5">
            <img src={icon} className="w-15" />
            <h1 className="text-xl">Lorenzo pewpew</h1>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-md  self-center">
              Sou segurança a 10 anos, já trabalhei para a Lady Gaga
            </h2>
            <p className="text-sm">
              Shows, encontros corporativos, segurança pessoal e pequenas lojas
            </p>
          </div>
        </div>
      </aside>

    </main>
  );
}
