
// import "./Product.css"

// function Product({title, price, features}) {
//     // const list = features.map((feature) => <li>{feature}</li>)
//     return (
//         <div className="Product">
//             <h2>{title}</h2>
//             <h2>Price : {price}</h2>
//             <ul>{features}</ul>
//         </div>
//     ) 

// }

// export default Product;


import Price from "./Price";
import "./Product.css"

function Product({title, idx}) {

    

    let oldPrices = ["$12,495", "$11,900", "$1,599", "$599"];
    let newPrices = ["$8,999", "$9,199", "$899", "$278"];
    let description = [
        ["8,000 DPI", "5 Programmable Buttons"], 
        ["Intuitive surface", "Designed for Ipad Pro"], 
        ["Designed for Ipad Pro", "Intuitive surface"], 
        ["Wireless", "Optical Orientation"]];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            
            <Price oldPrice = {oldPrices[idx]} newPrice = {newPrices[idx]} />
        </div>
    ) 
}
export default Product;