import BackToTopButton from '../backToTopButton/BackToTopButton';
import Footer from '../footer/Footer';
import aboutImg from '../../assets/about.jpg';
import './About.css';

function About() {
  return (    
    <section>
      <h2>01 : About me</h2>

      <article className="about-article">
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maiores corporis consectetur hic quasi soluta temporibus eveniet culpa eos velit sed laboriosam minus quod numquam exercitationem laborum voluptatum, ut mollitia.</p>
          <h3 className="highlights">I'm driven by the love of turning ideas into reality!</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur repudiandae fugit veniam a dolores laborum eius quam, consequuntur porro nihil cumque nam nulla eaque atque ullam doloribus adipisci eveniet.</p>
          <h3 className="highlights">Good user experience is finding that perfect balance between the way something looks and how it works.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maxime dicta, impedit nesciunt saepe possimus qui exercitationem fugit, dolorem illum magnam reiciendis incidunt itaque porro tempora officia debitis aspernatur dolorum?</p>                
        </div>  

        <img src={aboutImg} alt="It's me!"/> 
      </article>

      <BackToTopButton />

      <Footer />
    </section>
  );
}

export default About;