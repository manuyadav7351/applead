import { useState, useEffect } from 'react';
import Data from "./Data";

function Carousel() {
  const [state, setState] = useState(0);
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
        setState(data.length)
      });
  }, []);
  return (
    <div>
        {items.map((item, i) => <Data props= {{item, i}} /> )}      
    </div>
  );
}

export default Carousel;






