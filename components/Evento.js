const Evento = (props) => {
    const {evento} = props;
    let desc = evento.description.text;

    if(desc){
        desc = desc.substr(0, 250) + '...';
    }

    return(
        
        <div className="card mb-3">
            <h3 className="card-header">Eventos en Mexico</h3>
            <div className="card-body">
                <h5 className="card-title">{evento.name.text}</h5>
            </div>
            {/* <img src="" alt="Card image" /> */}
            <img src={evento.logo.url} alt={evento.name.text}/>
            <div className="card-body">
                <p className="card-text">{desc}</p>
                <a href={evento.url} className="card-link">Ver Evento</a>
            </div>
        </div>
    );
}

export default Evento;