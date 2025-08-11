import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <Link to={`/post/${post.$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 min-h-[300px] flex flex-col">
        {post.featuredImage ? (
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl w-full h-48 sm:h-56 md:h-60 object-cover mb-4"
          />
        ) : (
          <div className="rounded-xl bg-gray-300 w-full h-40 flex items-center justify-center text-gray-500 mb-4">
            No Image
          </div>
        )}
        <h2 className="text-lg sm:text-xl font-bold line-clamp-2">
          {post.title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
