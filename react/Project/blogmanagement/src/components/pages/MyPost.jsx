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
console.log(posts)
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default MyPost;
