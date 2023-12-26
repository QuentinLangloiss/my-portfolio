import React from 'react';
import PropTypes from 'prop-types';
import './Portfolio.scss';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        // Définir l'état initial avec les données des projets
        this.state = {
            projects: [
                {
                    id: 1,
                    image: 'src/assets/Helivo.png',
                    title: 'Helivo',
                    description: 'Site web pour une agence de développement web',
                    link: 'https://www.helivo.fr/',
                    codeLink: 'https://github.com/QuentinLangloiss/Helivo'
                },
                {
                    id: 2,
                    image: 'src/assets/Simple_landing_page.png',
                    title: 'Simple Landing Page',
                    description: 'Landing page pour le site du Wagon',
                    link: 'https://quentinlangloiss.github.io/landing/',
                    codeLink: 'https://github.com/QuentinLangloiss/landing'
                },
                {
                    id: 3,
                    image: 'https://images.unsplash.com/photo-1593436878396-e943a3cac98f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmF1eHxlbnwwfHwwfHx8MA%3D%3D',
                    title: 'Bientôt disponible',
                    description: 'Marketplace',
                    link: '#',
                    codeLink: '#'
                }
            ]
        };
    }

    renderProject(project) {
      return (
          <div id='projects' className="project">
              <img src={project.image} alt={project.title} />
              <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="link-portfolio">
                    {project.link && <a href={project.link}>Voir le site</a>}
                    {project.codeLink && <a href={project.codeLink}>Voir le code</a>}
                  </div>
              </div>
          </div>
      );
  }

    render() {
        const { projects } = this.state;

        return (
            <div className="portfolio">
                {projects.map(project => (
                    <div key={project.id} className="portfolio-item">
                        {this.renderProject(project)}
                    </div>
                ))}
            </div>
        );
    }
}

Portfolio.propTypes = {
    projects: PropTypes.array
};

export default Portfolio;
