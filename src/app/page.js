"use client";
import { useState, useEffect } from "react";
import { getPost } from "@/services/api";
import Blog from "@/components/blog";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ReactPaginate from "react-paginate";
import bannerImage from "@/assets/images/banner_image.png";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const handlePageClick = (event) => {
    console.log(event.selected);
    setPage(event.selected + 1);
  };

  const handleGetPost = async (page, perpage) => {
    const posts = await getPost(page, perpage);
    setPosts(posts);
  };

  useEffect(() => {
    handleGetPost(page, 9);
    // page count simulation
    setPageCount(Math.ceil(100 / 12));
  }, [page]);
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
      <ReactPaginate
        activeClassName={"item active "}
        breakClassName={"item break-me "}
        breakLabel={"..."}
        containerClassName={"pagination"}
        disabledClassName={"disabled-page"}
        marginPagesDisplayed={2}
        nextClassName={"item next "}
        nextLabel={<AiOutlineArrowRight style={{ fontSize: 18, width: 150 }} />}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageClassName={"item pagination-page "}
        pageRangeDisplayed={2}
        previousClassName={"item previous"}
        previousLabel={
          <AiOutlineArrowLeft style={{ fontSize: 18, width: 150 }} />
        }
      />
    </main>
  );
}
