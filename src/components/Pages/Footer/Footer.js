import './Footer.css'
import { Link} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () =>{
    return(<section className='footer'>
        <div className='footerSections'>
            <h3>Páginas</h3>
            <Link to='/' className='footerLinks' >Home</Link>
            <Link to='/' className='footerLinks' >Productos</Link>
            <Link to='/Nosotros' className='footerLinks'> Nosotros</Link>
        </div>
        <div className='footerSections'>
            <h3>Marcas</h3>
            <Link to='/category/Sony' className='footerLinks'>Sony</Link>
            <Link to='/category/Samsung' className='footerLinks'>Samsung</Link>
            <Link to='/category/Apple' className='footerLinks'>Apple</Link>
        </div>
        <div className='footerSections'>
            <h3>Redes Sociales</h3>
            <span><TwitterIcon/>Twitter</span>
            <span><InstagramIcon/>Instagram</span>
            <span><FacebookIcon/>Facebook</span>
        </div>
    </section>
    )
}