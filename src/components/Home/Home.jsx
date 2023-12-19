import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <img className='photo' src="src/assets/pfp.png" alt="photo" />
                <p className='text-home-1'>Salut !</p>
                <p className='text-home-2'>Mon nom est <span style={{ color: '#2d6a4f', fontWeight: 'bold' }}>Quentin Langlois.</span></p>
                <p className='text-home-3'>Je suis un <span style={{ color: '#2d6a4f', fontWeight: 'bold' }}>développeur web</span> de 22 ans.</p>
                <p className='text-home-4'>J'adore les nouvelles technologie, apprendre de nouvelles compétences.</p>
            </div>
        );
    }
}

export default Home;
