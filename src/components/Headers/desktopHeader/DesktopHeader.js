import Styles from './styles/style.module.scss';
import Logo from './../../../imgs/logo.png';
import {Link} from 'react-router-dom';
import Ads from '../../Ads/Ads';

const DesktopHeader = () => {
    return( 
        <section className={[Styles.desktop_header_container, ' bg-gray-900 text-white']}>
            <header className='container mx-auto flex h-24 justify-between items-center'>
                <Link to='/'>
                    <img src={Logo} alt='logo-img'/>
                </Link>

                {/* <Ads /> */}

                <nav className='flex text-sm font-medium tracking-wider capitalize'>
                    <Link className='h-12 px-8 flex flex-col justify-center hover:text-gray-900 hover:bg-white' to='/'>home</Link>
                    <Link className='h-12 px-8 flex flex-col justify-center hover:text-gray-900 hover:bg-white' to='/portfolio'>portfolio</Link>
                    <Link className='h-12 px-8 flex flex-col justify-center hover:text-gray-900 hover:bg-white' to='/about'>about</Link>
                    <Link className='h-12 px-8 flex flex-col justify-center hover:text-gray-900 hover:bg-white' to='/contact'>contact</Link>
                </nav>
            </header>
        </section>
    )
}

export default DesktopHeader; 