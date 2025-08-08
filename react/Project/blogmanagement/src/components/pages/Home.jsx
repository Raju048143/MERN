import React, { useEffect, useState } from 'react'
import appwriteService from "../../appwrite/config";
import Container from "../container/Container";
import PostCard from '../PostCard';

function Home() {
const [posts, setPosts] = useState([])
console.log(posts)

useEffect(()=>{
    appwriteService.getPosts([]).then((posts)=>{
 if(posts)
 {
    setPosts(posts.documents)
 }
})
},[])


  if(posts.length === 0)
  {
    return (
       <Container>
         <div>
            Home Page
        </div>
       </Container>
    )
}

return (
    <div className='flex flex-wrap'>
{posts.map((post)=>(
    <div key={post.$id} className='p-2 w-1/4'>
        <PostCard post={post}/>
    </div>
))}
    </div>
)
}

export default Home