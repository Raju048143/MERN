import React, { useState, useEffect } from "react";
import appwriteService from "../../appwrite/config";
import Container from "../container/Container";

import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../post-form/PostForm";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return post ? (
    <div className="py-8">
      <Container>
        <div className="max-w-2xl mx-auto px-3 sm:px-4">
          <PostForm post={post} />
        </div>
      </Container>
    </div>
  ) : null;
}

export default EditPost;
