import { Eachitem } from "./Eachlists";
export const ProductTable = ({ JSON, checkstock, inputv }) => {
    console.log(inputv);
    return (
        <>
            <div>  <h3>Electronics</h3>
                {checkstock === false ? JSON.filter(({ category }) => {
                    return (category === 'Electronics')
                }).filter((el) => {
                    if (el.name.includes(inputv)) {
                        return el
                    }
                }).map(({ name, price }, i) => {
                    return <Eachitem key={i} name={name} price={price} />
                }) :
                    JSON.filter(({ stocked }) => {
                        return (stocked === false)
                    }).map(({ name, price }, i) => {
                        return <Eachitem key={i} name={name} price={price} />
                    })
                }
            </div>
            <div><h3>Sporting Goods</h3>
                {checkstock === false ? JSON.filter(({ category }) => {
                    return (category === "Sporting Goods")
                }).filter((el) => {
                    if (el.name.includes(inputv)) {
                        return el
                    }
                }).map(({ name, price }, i) => {
                    return <Eachitem key={i} name={name} price={price} />
                }) :
                    JSON.filter(({ stocked }) => {
                        return (stocked === false)
                    }).map(({ name, price }, i) => {
                        return <Eachitem key={i} name={name} price={price} />
                    })}
            </div>
        </>
    )
}