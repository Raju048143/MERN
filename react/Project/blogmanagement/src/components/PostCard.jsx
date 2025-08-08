import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <Link to={`/post/${post.$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        {post.featuredImage ? (
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl max-h-64 object-cover"
          />
        ) : (
          <div className="rounded-xl bg-gray-300 w-full h-40 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
        <h2 className="text-xl font-bold">{post.title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
