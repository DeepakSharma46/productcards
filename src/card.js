import './card.css';

function Card({imgSrc,prodName,descrip,myPrice}){
    return(
        <div>
            <div className="cardContainer">
            <img className="cardImg" src={imgSrc} alt="tshirtpic"></img>
            <div className="details">
                <div className="title">{prodName}</div>
                <div className="description">{descrip}</div>
                <div className="price">₹ {myPrice}</div>
                <div className="size">
                    <span>S</span><span>M</span><span>L</span><span>XL</span><span>XXL</span>
                </div>
                <div className="buttonContainer">
                    <button className="addbtn">Add To Cart</button>
                    <button className="wishbtn">Add to Wishlist</button>
                </div>
            </div>
            </div>
        </div>
    );
};
export default Card;