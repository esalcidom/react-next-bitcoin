import Evento from './Evento';

const Eventos = (props) => {

    return(
        <div className="list-group">
            <Evento
                evento={props.evento}
            />
        </div>
    );
}

export default Eventos;