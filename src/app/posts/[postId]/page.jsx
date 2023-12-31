"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import { getPostById, getUserById, getCommentsByPostId, getPost } from "@/services/api";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";
import bannerImage from "@/assets/images/banner_image.png";

function page({ params }) {
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [comments, setCommnents] = useState([]);
  const [otherPost, setOtherPost] = useState([]);

  const handleCommentsPost = async (id) => {
    const comments = await getCommentsByPostId(id);
    setCommnents(comments);
  };
  const handleGetUser = async (id) => {
    const user = await getUserById(id);
    setUser(user);
  };

  const handleOtherPost = async (page, perPage) => {
    const otherPost = await getPost(page, perPage);
    setOtherPost(otherPost);
  }
  const handleGetPost = async (id) => {
    const post = await getPostById(id);
    setPost(post);
    handleGetUser(post.user_id);
    handleCommentsPost(post.id);
  };

  useEffect(() => {
    handleGetPost(params.postId);
    handleOtherPost(1, 5);
  }, []);
  return (
    <div className="bg-light-blue">
      <div
        style={{
          backgroundImage: `url(${bannerImage.src})`,
          width: "100%",
          height: "100%",
        }}
        className="banner mt-5"
      ></div>

      <Container className="mt-5 bg-white p-5">
        <Row lg={2}>
          <Col lg={8}>
            <div className="d-flex">
              <p>
                <BsFillPersonFill />{" "}
                {user.name || "Admin (specific data not found in API)"}
              </p>
              <p className="ms-3">
                <AiOutlineComment /> {comments.length}
              </p>
            </div>
            <h3>{post.title}</h3>
            <p className="text-justify">{post.body}</p>
            <div className="d-flex author-container p-2">
              <div className="author-info ms-2">
                <p>{`Name : ${
                  user.name || "Admin (specific data not found in API)"
                }`}</p>
                <p>{`Email : ${user.email || "admin@gorest.com"}`}</p>
                <p>{`Gender : ${user.gender || "Male"}`}</p>
              </div>
            </div>

            <div className="commnents mt-4">
              <h3>Comments</h3>
              {comments.map((comment) => {
                return (
                  <div className="comment-box shadow-sm p-2 mb-5">
                    <p>{comment.name}</p>
                    <p className="text-secondary">{comment.body}</p>
                  </div>
                );
              })}
            </div>
          </Col>
          <Col lg={4}>
            <h3>Other Post</h3>
            {otherPost.map(post => {
              return (
                <Card className="mb-2">
                  <Link href={`posts/${post.id}`} className="text-dark text-decoration-none">
                    <Card.Body>{post.body.slice(0, 50)} ...</Card.Body>
                  </Link>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default page;
