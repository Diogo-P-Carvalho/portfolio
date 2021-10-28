import './Card.css';

export default function Card({id, name, description, image, liveUrl, codeURl, icons}) {       
    const assets = require.context('../../assets', true);

    return (
        <div id={id}>
            <a href={liveUrl} target="_blank" rel="noreferrer" className="card-image" >
                <img src={assets(`./${image}`).default} alt="Project" />
            </a>

            <div className="card-info">
                <h3>{name}</h3>
                <div className="card-icons-container">
                    {
                        icons.map((icon, i) => {
                            return (
                                <img key={i} src={assets(`./${icon.src}`).default} alt={icon.alt} />
                            )
                        })
                    }
                </div>
                <p>{description}</p>
                <a href={liveUrl} target="_blank" rel="noreferrer" className="card-button">Live</a>
                <a href={codeURl} target="_blank" rel="noreferrer" className="card-button">Code</a>
            </div>
        </div>
    )
}