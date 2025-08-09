import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../../appwrite/config";
import { Button } from "../index.js";
import Container from "../container/Container";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
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
        if (post) setPost(post);
        else navigate("/");
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

  return post ? (
    <div className="py-8 ">
      <Container>
        <Container>
  <div className="flex mb-6 space-x-6">
    {/* Image section */}
    <div className="w-1/4 flex justify-center relative border rounded-xl p-2">
      <img
        src={appwriteService.getFilePreview(post.featuredImage)}
        alt={post.title}
        className="rounded-xl"
      />

      {isAuthor && (
        <div className="absolute right-6 top-6">
          <Link to={`/edit-post/${post.$id}`}>
            <Button bgColor="bg-green-500" className="mr-3">
              Edit
            </Button>
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

    {/* Content section */}
    <div className="flex-1">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <div className="browser-css">{parse(post.content)}</div>
    </div>
  </div>
</Container>

      </Container>
    </div>
  ) : null;
}
