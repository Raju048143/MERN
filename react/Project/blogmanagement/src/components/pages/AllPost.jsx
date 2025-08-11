import React, { useState, useEffect } from "react";
import appwriteService from "../../appwrite/config";
import Container from "../../components/container/Container";
import PostCard from "../PostCard";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 sm:px-0">
          {posts.map((post) => (
            <PostCard key={post.$id} post={post} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
