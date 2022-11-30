import Head from 'next/head'
const layout = ({children}) =>{

  return(
    <div>
    <Head>
        <title>Ruben Wilson</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
     </Head>
    <main className='bg-blue-900 min-h-screen px-10'>
        <nav className="navbar">
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl">Ruben Wilson</a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal p-0">
                <li><a href='/aboutMe'>About Me</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
          </nav>

          {children}
      </main>
    </div>
  )


}

module.exports = layout;