import BackToTopButton from '../backToTopButton/BackToTopButton';
import CardList from '../cardList/CardList';
import Footer from '../footer/Footer'; 
import './Projects.css';

 export default function Projects() {
    return (
      <section>
        <h2>03 : Projects</h2>

        <p className="projects-intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores quos est minima eos pariatur, esse sint vel, tempora exercitationem non. Enim ratione praesentium nam itaque rem dicta blanditiis officia?</p>

        <article className="projects-article">
          <CardList />
        </article>

        <BackToTopButton />

        <Footer />
      </section>      
    );
  }