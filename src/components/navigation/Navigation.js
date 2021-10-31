import { useEffect, useRef, useState } from "react";
import { 
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";
import Home from "../home/Home";
import Logo from "../logo/Logo";
import About from "../about/About";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import './Navigation.css';

function Navigation() {
    const pathName = useLocation().pathname;
    const toggleContent = useRef(null);
    const navContent = useRef(null);    
    const [isHome, setIsHome] = useState(pathName === "/portfolio" || pathName === "/portfolio/");
    
    const handleResize = () => {
        if (window.innerWidth >= 992 && navContent.current.classList.contains('show')) {
            navContent.current.classList.remove('show');
        }
    }

    const handleToggle = (e) => {
        if (e.path.includes(toggleContent.current)) {
            navContent.current.classList.toggle('show');
        } else if (!e.path.includes(navContent.current) && navContent.current.classList.contains('show')) {
            navContent.current.classList.remove('show');
        }
    }         

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('click', handleToggle);
    },[]) 

    useEffect(() => {
        if (navContent.current.classList.contains('show')) {
            navContent.current.classList.remove('show');
        }
    }, [pathName])

    return (
        <>
            <header>                
                {!isHome ? <Logo className="nav-logo" /> : null}                
                <nav className="navbar">
                    <button className="navbar-toggler" 
                            type="button" 
                            data-toggle="collapse"
                            data-target="#navbar-content"
                            aria-controls="navbar-content"
                            aria-expanded="false"
                            ref={toggleContent}>
                        <span className={ pathName === "/portfolio" || pathName === "/portfolio/" ? 'toggler-icon toggler-icon-home' : 'toggler-icon' }></span>
                        <span className={ pathName === "/portfolio" || pathName === "/portfolio/" ? 'toggler-icon toggler-icon-home' : 'toggler-icon' }></span>
                        <span className={ pathName === "/portfolio" || pathName === "/portfolio/" ? 'toggler-icon toggler-icon-home' : 'toggler-icon' }></span>
                    </button>

                    <div className={ pathName === "/portfolio" || pathName === "/portfolio/" ? 'navbar-collapse navbar-collapse-home' : 'navbar-collapse' } ref={navContent} id="navbar-content">
                        <ul className={ pathName === "/portfolio" || pathName === "/portfolio/" ? 'navbar-nav navbar-nav-home' : 'navbar-nav' }>
                            <li className="nav-item">
                                <Link className={ pathName === "/portfolio" || pathName === "/portfolio/" ? 'nav-link nav-link-home' : 'nav-link' } to="/portfolio" onClick={() => setIsHome(true)}>01 : Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={ pathName === "/portfolio" || pathName === "/portfolio/" ? 'nav-link nav-link-home' : 'nav-link' } to="/portfolio/about" onClick={() => setIsHome(false)}>02 : About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={ pathName === "/portfolio" || pathName === "/portfolio/" ? 'nav-link nav-link-home' : 'nav-link' } to="/portfolio/projects" onClick={() => setIsHome(false)}>03 : Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={ pathName === "/portfolio" || pathName === "/portfolio/" ? 'nav-link nav-link-home' : 'nav-link' } to="/portfolio/contact" onClick={() => setIsHome(false)}>04 : Contact</Link>
                            </li>
                        </ul>
                    </div>                        
                </nav>
            </header>                

            <Switch>
                <Route path="/portfolio/contact" component={Contact} />
                <Route path="/portfolio/projects" component={Projects} />
                <Route path="/portfolio/about" component={About} />
                <Route path="/portfolio" exact component={Home} />                    
            </Switch>
        </>
    )
}

export default Navigation;