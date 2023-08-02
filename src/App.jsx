
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import avatar from '../public/dev-ed-wave.png'
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import {useState} from 'react'
const App = () => {


  const [dark,setDarkMode] = useState(false)
  return (
    <div className={`${dark ? 'dark' : ''}`}>
          <div className={`px-10 min-h-screen   dark:bg-gray-900` }>
      <header className=" p-10 flex justify-between gap-5 items-center dark:bg-slate-900 dark:text-white">
        <h1 className="uppercase text-xl font-burtons">developedbyed</h1>
        <ul className="flex items-center">
          <li onClick={() => setDarkMode(!dark)} className="mr-5 cursor-pointer">{<BsFillMoonStarsFill />}</li>
          <li className=" cursor-pointer bg-gradient-to-r from-cyan-500 text- to-teal-500 p-2 rounded-lg text-white">Resume</li>
        </ul>
      </header>
      <main>
        <section className="text-center p-10 dark:bg-gray-900">
          <h1 className="text-5xl text-cyan-500 my-2 ">Dimitri Marco</h1>
          <h2 className="text-2xl text-gray-500">Developer and designer.</h2>
          <p className="text-sm leading-6 my-2">Freelancer providing services for programming and design <br/> content needs. Join me down below and let's get cracking!</p>
          <ul className="text-3xl flex gap-16 justify-center text-gray-400 my-10">
            <li>{<AiFillLinkedin/>}</li>
            <li>{<AiFillTwitterCircle/>}</li>
            <li>{<AiFillYoutube/>}</li>
          </ul>
        </section>
        <section className="dark:bg-gray-900">
          <div className="bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto pt-10">
            <img src={avatar} className="mx-auto" width='500px' />
          </div>
        </section>
        <section className="mx-10 my-5 lg:mx-40 dark:bg-gray-900">
          <h1 className="text-4xl">Services I offer</h1>
          <p className="text-gray-400">Since the beginning of my journey as a freelance designer and developer, I've done remote work for <span className="text-cyan-500">agencies</span> consulted for <span className="text-cyan-500">startups</span> and collaborated with talanted people to create digital products for both business and consumer use.</p>
          <p className="text-gray-400">I offer from a wide range of services, including brand design, programming and teaching.</p>
        </section>
        <section className="flex flex-col  md:flex-row gap-10 lg:mx-40 dark:bg-gray-900">
          <div className="card text-center shadow-lg p-10">
              <img className="mx-auto" width="200px" src={code} />
              <h2>Beautiful Designs</h2>
              <h3>Creating elegant designs suited for your needs following core design theory.</h3>
              <p className="text-cyan-400">Design Tools I Use</p>
              <p>Photoshop</p>
              <p>Illustrator</p>
              <p>Figma</p>
              <p>Indesign</p>
          </div>
          <div className="card text-center shadow-lg p-10">
              <img className="mx-auto" width="200px" src={consulting} />
              <h2>Beautiful Designs</h2>
              <h3>Creating elegant designs suited for your needs following core design theory.</h3>
              <p className="text-cyan-400">Design Tools I Use</p>
              <p>Photoshop</p>
              <p>Illustrator</p>
              <p>Figma</p>
              <p>Indesign</p>
          </div>
          <div className="card text-center shadow-lg p-10">
              <img className="mx-auto" width="200px" src={design} />
              <h2>Beautiful Designs</h2>
              <h3>Creating elegant designs suited for your needs following core design theory.</h3>
              <p className="text-cyan-400">Design Tools I Use</p>
              <p>Photoshop</p>
              <p>Illustrator</p>
              <p>Figma</p>
              <p>Indesign</p>
          </div>
        </section>
        <section className="mt-16 lg:mx-40 dark:bg-gray-900">
          <h1 className="text-3xl">Portofolio</h1>
          <p className="text-gray-400 mt-5">Since the beginning of my journey as a freelance designer and developer, I've done remote work for agencies consulted for startups and collaborated with talanted people to create digital products for both business and consumer use.</p>
          <p className="text-gray-400">I offer from a wide range of services, including brand design, programming and teaching.</p>
          <div className="mt-10 flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <img className="rounded-lg object-cover" width={"100%"} height={"100%"} src={web1} />
            </div>
            <div className="basis-1/3 flex-1">
              <img className="rounded-lg object-cover" width={"100%"} height={"100%"} src={web2} />
            </div>
            <div className="basis-1/3 flex-1">
              <img className="rounded-lg object-cover" width={"100%"} height={"100%"} src={web3} />
            </div>
            <div className="basis-1/3 flex-1">
              <img className="rounded-lg object-cover" width={"100%"} height={"100%"} src={web4} />
            </div>
            <div className="basis-1/3 flex-1">
              <img className="rounded-lg object-cover" width={"100%"} height={"100%"} src={web5} />
            </div>
            <div className="basis-1/3 flex-1">
              <img className="rounded-lg object-cover" width={"100%"} height={"100%"} src={web6} />
            </div>
          </div>
        </section>
      </main>
    </div>
    </div>
  )
}

export default App