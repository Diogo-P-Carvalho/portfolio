import { useEffect, useRef } from "react";
import { 
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import './Navigation.css';

function Navigation() {
    const pathName = useLocation().pathname;
    const toggleContent = useRef(null);
    const navContent = useRef(null);
    
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
                <nav className="navbar">
                    <button className="navbar-toggler" 
                            type="button" 
                            data-toggle="collapse"
                            data-target="#navbar-content"
                            aria-controls="navbar-content"
                            aria-expanded="false"
                            ref={toggleContent}>
                        <span className={ pathName !== "/" ? 'toggler-icon': 'toggler-icon toggler-icon-home'}></span>
                        <span className={ pathName !== "/" ? 'toggler-icon': 'toggler-icon toggler-icon-home'}></span>
                        <span className={ pathName !== "/" ? 'toggler-icon': 'toggler-icon toggler-icon-home'}></span>
                    </button>

                    <div className={ pathName !== "/" ? 'navbar-collapse' : 'navbar-collapse navbar-collapse-home' } ref={navContent} id="navbar-content">
                        <ul className={ pathName !== "/" ? 'navbar-nav' : 'navbar-nav navbar-nav-home' }>
                            <li className="nav-item">
                                <Link className={ pathName !== "/" ? 'nav-link' : 'nav-link nav-link-home' } to="/">01 : Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={ pathName !== "/" ? 'nav-link' : 'nav-link nav-link-home' } to="/about">02 : About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={ pathName !== "/" ? 'nav-link' : 'nav-link nav-link-home' } to="/projects">03 : Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={ pathName !== "/" ? 'nav-link' : 'nav-link nav-link-home' } to="/contact">04 : Contact</Link>
                            </li>
                        </ul>
                    </div>                        
                </nav>
            </header>                

            <Switch>
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
                <Route path="/about" component={About} />
                <Route path="/" exact component={Home} />                    
            </Switch>
        </>
    )
}

export default Navigation;