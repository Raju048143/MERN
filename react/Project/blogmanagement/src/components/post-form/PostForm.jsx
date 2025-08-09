import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../index.js";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;
      if (file && post.featuredImage) {
        appwriteService.updatePost(post.featuredImage);
      }
     
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : post.featuredImage,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);
      console.log("file", file);
      if (file) {
        const featuredImageId = file.$id;
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
          featuredImage: featuredImageId,
        });

        console.log("db post", dbPost);

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 rounded-2xl">
<form
  onSubmit={handleSubmit(submit)}
  className="flex flex-wrap max-h-[650px] overflow-auto"
>
  {/* Left Column - Inputs */}
  <div className="w-full md:w-1/2 max-w-[500px] px-4 space-y-4">
    <Input
      label="Title :"
      placeholder="Title"
      {...register("title", { required: true })}
    />
    <Input
      label="Slug :"
      placeholder="Slug"
      {...register("slug", { required: true })}
      onInput={(e) => {
        setValue("slug", slugTransform(e.currentTarget.value), {
          shouldValidate: true,
        });
      }}
    />

    <Input
      label="Featured Image :"
      type="file"
      accept="image/png, image/jpg, image/jpeg, image/gif"
      {...register("image", { required: !post })}
    />
    {post && (
      <div className="w-full">
        <img
          src={appwriteService.getFilePreview(post.featuredImage)}
          alt={post.title}
          className="rounded-lg"
        />
      </div>
    )}

    <Select
      options={["active", "inactive"]}
      label="Status"
      {...register("status", { required: true })}
    />

    <Button
      type="submit"
      bgColor={post ? "bg-green-500" : undefined}
      className="w-full"
    >
      {post ? "Update" : "Submit"}
    </Button>
  </div>

  {/* Right Column - RTE */}
  <div className="w-full md:w-1/2 max-w-[500px] px-4">
    <RTE
      label="Content :"
      name="content"
      control={control}
      defaultValue={getValues("content")}
    />
  </div>
</form>
/</div>
  );
}
