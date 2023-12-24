
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className=''>
          <div className="role">Développeur web passionné</div>
          <div className="description">Bienvenue dans mon monde, où créativité et technologie fusionnent. Expert en solutions web interactives, allant de React à une gamme étendue d'autres technologies, je mets en œuvre mon expertise pour transformer vos idées en expériences utilisateur captivantes et fonctionnelles. Découvrez comment ma polyvalence et mon approche créative peuvent enrichir vos projets.</div>
        </div>
        <div className="image-container">
          <img src="pfp.png" alt="Illustration Personnalisée" />
        </div>
        <div className="name-scroll">
          <div className="name-home">Quentin Langlois</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
