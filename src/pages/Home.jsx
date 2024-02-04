import React, { useEffect, useState } from "react"
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {

  const [loader,setLoader] = useState(false);

  const API_URL = "https://fakestoreapi.com/products";

  const [posts,setPost] = useState([]);

  async function FetchData () 
  {
    setLoader(true);
    console.log("api call bhi hone wali hai");
    try{

        const result = await fetch(API_URL);

        console.log("api call hogyi");

        const data = await result.json();

        
        setPost(data);

        console.log("aaya data?");
    }
    catch(eroor)
    {
      console.log("data hi nhi fetch hua hai")
      setPost([])
    }
    setLoader(false);
  }
 
 useEffect(()=>{
  FetchData()
  console.log("call krdiya")
  
 },[]);

  return(
    <div>
      {
        loader ? <Spinner />  :
        posts.length > 0 ? 
        (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map( (post) => (
            <Product key = {post.id} post={post}/>
          ) )
          }
        </div>) :
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> 
      }
    </div>
  )

}

export default Home;
