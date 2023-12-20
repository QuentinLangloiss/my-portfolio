import './Portfolio.css';

const Portfolio = () => {
    // Ici, vous pouvez définir vos projets sous forme d'un tableau d'objets
    const projects = [
        {
            title: 'Helivo',
            description: 'Site web agence de développement web',
            imageUrl: 'src/assets/Helivo.png',
            demoLink: 'https://www.helivo.fr/',
            codeLink: 'https://github.com/QuentinLangloiss/Helivo'
        },
        {
            title: 'Simple Landing Page',
            description: 'Site web simple pour présenter un produit',
            imageUrl: 'src/assets/Simple_landing_page.png',
            demoLink: 'https://quentinlangloiss.github.io/landing/',
            codeLink: 'https://github.com/QuentinLangloiss/landing'
        }
    ];

    return (
        <div className="portfolio-container">
            {projects.map((project, index) => (
                <div className="project-card" key={index}>
                    <img src={project.imageUrl} alt={project.title} className="project-image" />
                    <div className="project-info">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.demoLink}>Démo</a>
                        <span> | </span>
                        <a href={project.codeLink}>Code Source</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;
