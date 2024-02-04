import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CartItem from "../components/CartItem";

const Cart = () =>
{
  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return(
    <div className="flex flex-row justify-between text-center   ">
    {
      cart.length > 0  ? 
      (<div className="flex flex-row space-x-10 justify-between mx-auto p-4 ">
  
  
        <div className="">
          {
            cart.map( (post,index) => {
              return <CartItem key={post.id} post={post} itemIndex={index} />
            } )
          }
        </div>
  
        <div className="flex flex-col justify-between space-y-6  mt-10 mb-2 p-2">
  
          <div>
            <div>Your Cart</div>
            <div>Summary</div>
            <p>
              <span>Total Items: {cart.length}</span>
            </p>
          </div>
  
          <div>
            <p>Total Amount: ${totalAmount}</p>
            <button>
              CheckOut Now
            </button>
          </div>
  
        </div>
  
  
      </div>) : 

      (<div>
        <h1>Cart Empty</h1>
        <Link to={"/"}>
          <button>
            Shop Now
          </button>
        </Link>
      </div>)
    }
      </div>
    );
  
}

export default Cart;
