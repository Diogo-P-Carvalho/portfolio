import Card from '../card/Card';
import { projects } from '../../data/projects.js';

export default function CardList() {
    return (
        <>
            {
                projects.map(project => {
                    return (
                        <Card key={project.id} 
                              id={project.id}
                              name={project.name}
                              description={project.description}
                              image={project.image}
                              liveUrl={project.liveUrl}
                              codeURl={project.codeURl}
                              icons={project.icons} 
                        />
                    )
                })
            }
        </>        
    )
}