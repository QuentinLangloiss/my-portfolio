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
            title: 'Projet 2',
            description: 'Description du Projet 2',
            imageUrl: 'url_de_limage_du_projet_2',
            demoLink: 'lien_demo_projet_2',
            codeLink: 'lien_code_source_projet_2'
        },
        {
            title: 'Projet 3',
            description: 'Description du Projet 3',
            imageUrl: 'url_de_limage_du_projet_3',
            demoLink: 'lien_demo_projet_3',
            codeLink: 'lien_code_source_projet_3'
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
                        <a href={project.codeLink}>Code Source</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;
