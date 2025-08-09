import React, { useEffect, useState } from "react";
import appwriteService from "../../appwrite/config";
import Container from "../container/Container";
import PostCard from "../PostCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Home() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.auth.userData);
    const navigate = useNavigate(); 
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <Container>
        <div>Home Page</div>
      </Container>
    );
  }
 const visiblePosts = userData ? posts : posts.slice(0, 6);
 return (
  <div className="m-8 flex flex-wrap">
    {visiblePosts.map((post) => (
      <div key={post.$id} className="p-2 w-1/4 min-h-[350px]">
        <PostCard post={post} />
      </div>
    ))}

     {!userData && posts.length > 6 && (
      <div className="p-2 w-1/4 min-h-[350px] flex items-center justify-center">
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Login to view more
        </button>
      </div>
    )}
  </div>
);
}

export default Home;
