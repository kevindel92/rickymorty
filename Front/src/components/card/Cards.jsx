//import { findByLabelText } from '@testing-library/react';
import Card from './Card';
import c from './Card.module.css';

export default function Cards(props) {
   const { characters, onClose } = props;
  
   return (
   <div className={c.container}>
      {     
      characters.map( c => <Card name={c.name}
      image={c.image} onClose={() => onClose(c.id)} key={c.id} id={c.id}/>)
      }
   </div>
   );
}
