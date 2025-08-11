import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../../appwrite/config";
import { Button } from "../index.js";
import Container from "../container/Container";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
export default function Post() {
  const [post, setPost] = useState(null);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;
  useEffect(() => {
    if (!userData) {
      navigate("/login");
      return;
    }
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
          setLikes(post.likes ? post.likes.length : 0);
          setHasLiked(post.likes?.includes(userData.$id) || false);
        } else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate, userData]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  const likePost = () => {
    appwriteService
      .toggleLikePost(post.$id)
      .then((updatedLikes) => {
        setLikes(updatedLikes.length);
        setHasLiked(updatedLikes.includes(userData.$id));
      })
      .catch((err) => {
        console.error("Failed to like/unlike post", err);
      });
  };

return post ? (
  <div className="py-8">
    <Container>
      <div className="flex flex-col md:flex-row mb-6 space-y-6 md:space-y-0 md:space-x-6 relative">
        {/* Image section */}
        <div className="md:w-[450px] flex justify-center relative border rounded-xl p-2 max-w-md mx-auto md:mx-0">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>

        {/* Content section */}
        <div className="flex-1 m-4 relative">
          <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
          <div className="browser-css">{parse(post.content)}</div>
          <div className="mt-4">
            <button
              type="button"
              onClick={likePost}
              className="p-2 flex items-center justify-center gap-2"
            >
              <FaHeart
                className={hasLiked ? "text-red-500" : "text-white"}
                size={24}
              />
              <span className={hasLiked ? "text-red-500" : "text-white"}>
                {likes}
              </span>
            </button>
          </div>

          {isAuthor && (
            <div className="absolute right-0 bottom-0 flex space-x-3 mb-2 md:mb-0 md:right-6 md:bottom-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500">Edit</Button>
              </Link>
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={deletePost}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </Container>
  </div>
) : null;


}
