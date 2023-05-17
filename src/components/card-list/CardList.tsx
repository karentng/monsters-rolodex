import './card-list.css';
import Card from "../card/Card";

import { Monster } from '../../App';

type CardListProps = {
  monsters: Monster[];
}

const CardList = ({ monsters }: CardListProps) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id}/>;
    })}
  </div>
);

export default CardList;
