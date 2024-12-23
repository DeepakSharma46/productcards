import './App.css'
import Card from './card.js'

function App() {
  const products = [
    {
      imgSrc: "https://images.bewakoof.com/t1080/men-s-blue-moon-knight-typography-t-shirt-473052-1721984996-1.jpg",
      prodName: "Full Sleeve T Shirt",
      descrip:"Moon Knight typography Tshirt in Navy Blue",
      myPrice: 575,
    },
    {
      imgSrc: "https://images.bewakoof.com/t640/women-s-black-puffer-reversible-jacket-499009-1670255534-1.jpg",
      prodName: "Women Reversible Jacket",
      descrip:"Black Jacket With waterProof material",
      myPrice: 1899,
    },
    {
      imgSrc: "https://images.bewakoof.com/t640/women-s-blue-lazy-garfield-graphic-printed-oversized-t-shirt-591185-1716887258-1.jpg",
      prodName: "Cotton Tshirt",
      descrip:"OverSized printed blue Tshirt and Stylish",
      myPrice: 600,
    },
    {
      imgSrc: "https://images.bewakoof.com/t640/women-s-black-badass-graphic-printed-oversized-sweatshirt-550986-1703690318-1.jpg",
      prodName: "Baddass Hoodie",
      descrip:"black with printed baddass and Stylish",
      myPrice: 1499,
    },
    {
      imgSrc: "https://images.bewakoof.com/t640/women-s-harbor-gray-original-gangster-typography-oversized-sweatshirt-601625-1727095408-1.jpg",
      prodName: "Jacket with Stylish Look",
      descrip:"Jacket with black printed sleeves in Cyan",
      myPrice: 2100,
    },
    {
      imgSrc: "https://images.bewakoof.com/t1080/men-s-green-move-on-graphic-printed-t-shirt-587160-1717061149-1.jpg",
      prodName: "Half Sleeves T shirt",
      descrip:"Tshirt with Back Print",
      myPrice: 699,
    },
    {
      imgSrc: "https://images.bewakoof.com/t640/men-s-black-the-dark-knight-graphic-printed-t-shirt-592032-1728641290-1.jpg",
      prodName: "Black Tshirt",
      descrip:"Tshirt and mesmerizing Look",
      myPrice: 399,
    },
    {
      imgSrc: "https://images.bewakoof.com/t640/men-s-pink-tom-chase-graphic-printed-oversized-t-shirt-581117-1717061179-1.jpg",
      prodName: "Tshirt with 100% cotton",
      descrip:"Full Sleeves Tshirt printed Tom and Stylish look",
      myPrice: 699,
    },
    {
      imgSrc: "https://images.bewakoof.com/t640/men-s-grey-fear-nothing-graphic-printed-hoodies-628888-1720462487-1.jpg",
      prodName: "Hoodie in grey",
      descrip:"Devil Skull printed hoodie",
      myPrice: 1570,
    },
    {
      imgSrc: "https://images.bewakoof.com/t640/men-s-red-white-graphic-printed-oversized-hoodies-644547-1730989903-1.jpg",
      prodName: "Marvel Hoddie",
      descrip:"Mravel Hoodie with white and red combination",
      myPrice: 2100,
    },
    {
      imgSrc: "https://images.bewakoof.com/t640/men-s-jet-black-avengers-graphic-printed-oversized-hoodies-648723-1732205062-1.jpg",
      prodName: "Avenger Hoodie in grey",
      descrip:"Avengers Hoodie with white and red combination",
      myPrice: 2200,
    },
    {
      imgSrc: "https://images.bewakoof.com/t640/men-s-gardenia-black-iron-man-graphic-printed-super-loose-fit-hoodies-601619-1726048150-1.jpg",
      prodName: "Iron Man Tshirt",
      descrip:"Iron Man graphic printed super loose",
      myPrice: 999,
    },
    {
      imgSrc: "https://images.bewakoof.com/t640/women-s-granite-green-say-what-tom-graphic-printed-oversized-short-top-649684-1730899973-1.jpg",
      prodName: "Women Granite Green Top",
      descrip:"Tom Printed Oversized Short Top in granite green Color",
      myPrice: 899,
    },
    {
      imgSrc: "https://images.bewakoof.com/t640/women-s-blue-flat-knit-top-646223-1730892513-1.jpg",
      prodName: "Women Flat Knit Top",
      descrip:"Women Top in blue made with soft material",
      myPrice: 855,
    },
    {
      imgSrc: "https://images.bewakoof.com/t640/women-s-black-graphic-printed-slim-fit-short-top-627787-1718703250-1.jpg",
      prodName: "Women SHort Top",
      descrip:"Black Printed Slim fit short Top",
      myPrice: 1200,
    },
    {
      imgSrc: "https://images.bewakoof.com/t640/women-s-brown-mickey-the-original-graphic-printed-oversized-t-shirt-dress-546192-1700842684-1.jpg",
      prodName: "Oversized women T shirt",
      descrip:"Brown mickey graphic printed oversized tshirt",
      myPrice: 655,
    },
  ];
  return (
    <div className='mainContainer'>
      {products.map((product, index) => (
        <Card key={index} imgSrc={product.imgSrc} prodName={product.prodName} descrip={product.descrip} myPrice={product.myPrice}/>
      ))}
    </div>
  );
}

export default App;
