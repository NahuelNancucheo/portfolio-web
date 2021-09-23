import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';

const Sidebar = () => {
    return (
        <div>
            <img 
                src="https://thumbs.dreamstime.com/z/icono-masculino-del-avatar-en-estilo-plano-icono-masculino-del-usuario-avatar-del-hombre-de-la-historieta-91462914.jpg" 
                alt="user avatar" 
                className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-rubik">
                <span>Nahuel</span> Nancucheo
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
                Frontend React developer
            </p>
            <a className="flex items-start justify-center px-2 py-1 my-3 bg-gray-200 rounded-full" href="" download="name" >
                <GiTie className="w-6 h-6"/> Download resume
            </a>

            {/** social icons */}
            
            <div className="flex justify-around w-9/12 mx-auto my-5 text-blue-500 md:w-full">
                <a href="">
                    <AiFillGithub className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="">
                    <AiFillTwitterCircle className="w-8 h-8 cursor-pointer"/>
                </a>
            </div>
            {/** address */}
            <div className="py-4 my-5 bg-gray-200" style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Bahia Blanca, Argentina</span>
                </div>
                <p className="my-1">nahuel.nancucheo@outlook.com</p>
            </div>

            {/**email button */}
            
            <button className="w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 px5 focus:outline-none" onClick={() => window.open('mailto:nahuel.nancucheo@outlook.com')}>Email me</button>
            <button className="w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 px5">Toggle Theme</button>
        </div>
    )
}

export default Sidebar;
