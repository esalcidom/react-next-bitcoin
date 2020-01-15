import MasterPage from '../components/Master';
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';
import Eventos from '../components/Eventos';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Precio del bitcoin</h2>
                <Precio
                    precio={props.precioBitcoin}
                />
            </div>
            <div className="col-md-8">
                <h2>Noticias de bitcoin</h2>
                <Noticias 
                    noticias={props.noticias}
                />
            </div>
            <div className="col-md-4">
                {/* <h2>Eventos en Mexico</h2> */}
                {console.log(props.evento)}
                <Eventos
                    evento={props.evento}
                />
            </div>
        </div>
    </MasterPage>
    
);

Index.getInitialProps = async () => {
    const conMarketKey = '2bbeec3a-60af-494c-8954-f75bfacbbf27';
    const conMarketUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug=bitcoin&convert=USD&CMC_PRO_API_KEY=${conMarketKey}`;
    const newsUrl = 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-15&sortBy=publishedAt&apiKey=c0b28beb134e4b4fb0e5f5c4ba3bdb43&language=es';
    const eventosUrl = 'https://www.eventbriteapi.com/v3/events/61062257857/?token=PC5P7JPDEWZDCWY35PW6';

    const precio = await fetch(conMarketUrl);
    const noticias = await fetch(newsUrl);
    const eventos = await fetch(eventosUrl);

    const resPrecio = await precio.json();
    const resNoticias = await noticias.json();
    const resEvento = await eventos.json();

    return {
        precioBitcoin: resPrecio.data["1"].quote.USD,
        noticias: resNoticias.articles,
        evento: resEvento
    }
}

export default Index;