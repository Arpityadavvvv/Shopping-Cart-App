import React from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";
import {FcDeleteDatabase} from "react-icons/fc"

const CartItem = ({post,itemIndex}) => 
{
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.success("Item Removed");
  }

  return(
  <div className="max-w-[750px] p-4 flex flex-col text-center mx-auto">
      <div className="flex flex-col items-center justify-between 
    hover:scale-105 transition duration-300 ease-in gap-3 p-4  mt-10 ml-5 rounded-xl outline">

      <div className="h-[180px]">
         <img src={post.image} className="h-full w-full " />
      </div>
      <div className="w-full">
         <h1 className="text-gray-700 font-semibold text-lg text-left  mt-1">{post.title}</h1>
         <h1 className=" text-gray-800 font-normal text-[10px] text-left">{post.description}</h1>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
          <p className="text-green-600 font-semibold">{post.price}</p>
       <div
         onClick={removeFromCart}>
        <FcDeleteDatabase/>
       </div>
  </div>

</div>


</div>


    </div>
  )

}

export default CartItem