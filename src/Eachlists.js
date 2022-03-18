import './App.css'
export const Eachitem =({name,price})=>{
   return (
       <div className="flex">
              <div>{name}</div>
              <div>{price}</div>
       </div>
   )
}