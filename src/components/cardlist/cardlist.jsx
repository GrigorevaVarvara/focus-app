import Card from '../card/card';
import './cardlist.scss'

function Cardlist({cards}) {
    return <div className="card-list">
        <div className="container">
            {
                cards.map((card)=>{
                return <Card img={card.img}
                name={card.name}
                description={card.description}
                price={card.price}/>;
                })
            }
            
        </div>
    </div>;
}

export default Cardlist;