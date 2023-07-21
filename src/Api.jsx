import React, {useState, useEffect} from "react";
import axios from "axios";
const ApiDigest = () => {
    const [loading, setLoading] = useState(true)
    const [posts, setPost]= useState([]);
    useEffect(()=>{
        const load = async ()=>{
            setLoading(true)
            const response = await axios.get("http://universities.hipolabs.com/search?country=United+States")
            setPost(response.data)
            setLoading(false)
        }
        load()  
    },[])
    console.log(posts)
    return ( <>
               <div>
                   {
                    loading ? (<h3>loading...</h3>):(
                            posts.map(post=><div>
                                <h3>{post.name}</h3>
                                <p>{post.country}</p>
                            </div>)
                    )
                   }
               </div>
    </> );
}
 
export default ApiDigest;