"use client";
import React from "react";
import { useState, useEffect } from "react";
import bannerImage from "@/assets/images/banner_image.png";
import { Container, Table, Col } from "react-bootstrap";
import { getUsers } from "@/services/api";

function page() {
  const [users, setUsers] = useState([]);
  const handleGetUsers = async (page, perPage) => {
    const users = await getUsers(page, perPage);
    setUsers(users);
  };
  useEffect(() => {
    handleGetUsers();
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
      >
        <div>
          <h1 className="text-uppercase text-light text-center mt-5">
            a list of user from <br /> gorest api
          </h1>
        </div>
      </div>
      <Container lg={1} className="mt-5 bg-white p-5">
        <Col lg={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.status}</td>
                    <td>
                      <button className="btn btn-sm btn-danger">Delete</button>
                      <button className="btn btn-sm btn-warning ms-1">
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Container>
    </div>
  );
}

export default page;
