import './Footer.css';

function Footer() {
    return (
        <footer>
            Diogo Carvalho &copy; <span>{new Date().getFullYear()}</span> | <span className="footer-message">Made with love and lots of coffee &#9749;!</span>
        </footer>
    )
}

export default Footer;