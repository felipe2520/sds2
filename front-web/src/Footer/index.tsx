import './style.css';
import { ReactComponent as Youtube } from './youtube.svg'
import { ReactComponent as Linkendin } from './linkedin.svg'
import { ReactComponent as Instagram } from './instagram.svg'


function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <Youtube />
                </a>

                <a href="home" target="_new">
                    <Linkendin />
                </a>

                <a href="home" target="_new">
                    <Instagram />
                </a>
            </div>
        </footer>

    )
}

export default Footer;