import React from "react";
import Container from "../container/Container";
import PostForm from "../post-form/PostForm";

function AddPost() {
  return (
    <div className="py-4">
      <Container>
        <div className="max-w-2xl mx-auto px-3 sm:px-4">
          <PostForm />
        </div>
      </Container>
    </div>
  );
}

export default AddPost;
