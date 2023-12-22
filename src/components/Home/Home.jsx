
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="role">Votre rôle professionnel ici</div>
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
