import './App.css';
import { Searchbar } from './Searchbar';
import { useEffect, useState } from 'react';
import { ProductTable } from './ProductTable';
import { Eachitem } from './Eachlists'
const json = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];
function App() {
  const [inputv, setinputv] = useState('')
  const [checkstock, setcheckstock] = useState(false)

  console.log(inputv);

  return (
    <>
      <Searchbar inputv={inputv} setcheckstock={setcheckstock} checkstock={checkstock} setinputv={setinputv} />
      <div> Name price</div>
      <ProductTable JSON={json} inputv={inputv} checkstock={checkstock} />
    </>
  );
}

export default App;
