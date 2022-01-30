import './card-ListStyles.css'
import { Card } from '../Card/card.component'
export const CardList = (props) => (
  <div className="card-list">
    {/* {props.children} */}
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
)
