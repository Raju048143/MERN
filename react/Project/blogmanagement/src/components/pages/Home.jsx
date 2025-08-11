import React, { useEffect, useState } from "react";
import appwriteService from "../../appwrite/config";
import Container from "../container/Container";
import PostCard from "../PostCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Container>
        <div className="flex justify-center items-center py-16">
          <svg
            className="animate-spin h-10 w-10 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        </div>
      </Container>
    );
  }
  const visiblePosts = userData ? posts : posts.slice(0, 6);
  return (
    <div className="m-4 sm:m-8">
      {visiblePosts.length === 0 ? (
        <Container>
          <div className="text-center py-8 text-lg font-semibold">
            No posts available
          </div>
        </Container>
      ) : (
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 px-2 sm:px-0">
          {visiblePosts.map((post) => (
            <div key={post.$id} className="">
              <PostCard post={post} />
            </div>
          ))}

          {!userData && posts.length > 6 && (
            <div className="min-h-[350px] flex items-center justify-center">
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full sm:w-auto"
              >
                Login to view more
              </button>
            </div>
          )}
        </div>
        </Container>
      )}
    </div>
  );
}

export default Home;
