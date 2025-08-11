import React, { useState, useEffect } from "react";
import appwriteService from "../../appwrite/config";
import Container from "../container/Container";
import PostCard from "../PostCard";

function MyPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPostsForCurrentUser().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
          {posts.map((post) => (
            <PostCard key={post.$id} post={post} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default MyPost;
