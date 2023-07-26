"use client";
import { useState, useEffect } from "react";
import { getPost } from "@/services/api";
import Blog from '../components/blog';
import bannerImage from "../assets/images/banner_image.png";
export default function Home() {
  const [posts, setPosts] = useState([]);

  const handleGetPost = async () => {
    const posts = await getPost();
    setPosts(posts);
  };

  useEffect(() => {
    handleGetPost();
  }, []);
  return (
    <main>
      <div
        style={{
          backgroundImage: `url(${bannerImage.src})`,
          width: "100%",
          height: "100%",
        }}
        className="banner mt-5"
      >
        <div>
          <h1 className="text-uppercase text-light text-center mt-5">
            a beatuiful blog with <br /> gorest api
          </h1>
        </div>
      </div>
      <div className="blog-title mt-5 mb-5">
        <h2 className="text-center">Blogs</h2>
        <div className="horz-line"></div>
        <p className="text-center">
          Best blog in the world, with best UI and updated information
        </p>
      </div>
      <Blog posts={posts} />
    </main>
  );
}
