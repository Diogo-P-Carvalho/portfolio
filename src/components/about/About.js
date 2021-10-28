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
          <p>Hi &#128075;!!!</p>
          <p> I'm Diogo and I'm fuelled on a daily basis by coffee.</p>
          <p>I love what I do and what challenges me is turning ideas into reality. I try my best to improve myself and my skills to become the better version everyday.</p>         
          <h3 className="highlights">I'm driven by the love of turning ideas into reality!</h3>          
          <p>I'm a fast learner, with an eye for detail and always looking for pratical and functional solutions. I work with C#, Angular, React, CSS, NodeJS and SQL.</p>
          <h3 className="highlights">Good user experience is finding that perfect balance between the way something looks and how it works.</h3>
          <p>When I'm not working, I spent my time to be with friends and riding my bicycle, last but not least I really love writting code and it's a never ending puzzle that I'm passionatly engaged in solving!</p>
          <h3 className="highlights">It's a never ending puzzle that I'm passionatly engaged in solving!</h3>          
        </div>  

        <img src={aboutImg} alt="It's me!"/> 
      </article>

      <BackToTopButton />

      <Footer />
    </section>
  );
}

export default About;