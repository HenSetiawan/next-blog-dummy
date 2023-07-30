"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import bannerImage from "@/assets/images/banner_image.png";
import { Container, Table, Col, Row, Modal, Button } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { getUsers, deleteUserById, createNewUser } from "@/services/api";

function page() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [userId, setUserId] = useState(null);
  const [updated, setUpdated] = useState(0);
  const { register, handleSubmit } = useForm();
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalCreate, setShowModalCreate] = useState(false);

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };
  const handleGetUsers = async (page, perPage) => {
    const users = await getUsers(page, perPage);
    setUsers(users);
  };

  const onSubmit = async (data) => {
    try {
      const body = {
        name: data.userName,
        email: data.userEmail,
        gender: data.userGender,
        status: data.userStatus,
      };
      const response = await createNewUser(body);
      if (response.status === 201) {
        toast.success('Success create new user');
      }
      setShowModalCreate(false);
      setUpdated((updated) => updated + 1);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleGetUsers(page, 10);
  }, [page, updated]);
  return (
    <div className="bg-light-blue">
      <ToastContainer />
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
      <Container className="mt-5 bg-white p-5">
        <button
          onClick={() => {
            setShowModalCreate(true);
          }}
          className="btn btn-primary mb-4"
        >
          Create New User
        </button>
        <Row>
          <Col lg={12}>
            <Table responsive striped bordered hover>
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
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.gender}</td>
                      <td>{user.email}</td>
                      <td>{user.status}</td>
                      <td>
                        <button
                          onClick={() => {
                            setUserId(user.id);
                            setShowModalDelete(true);
                          }}
                          className="btn btn-sm btn-danger"
                        >
                          Delete
                        </button>
                        <button className="btn btn-sm btn-warning ms-1">
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <ReactPaginate
              activeClassName={"item active "}
              breakClassName={"item break-me "}
              breakLabel={"..."}
              containerClassName={"pagination"}
              disabledClassName={"disabled-page"}
              marginPagesDisplayed={2}
              nextClassName={"item next "}
              nextLabel={
                <AiOutlineArrowRight style={{ fontSize: 18, width: 150 }} />
              }
              onPageChange={handlePageClick}
              pageCount={10}
              pageClassName={"item pagination-page "}
              pageRangeDisplayed={2}
              previousClassName={"item previous"}
              previousLabel={
                <AiOutlineArrowLeft style={{ fontSize: 18, width: 150 }} />
              }
            />
          </Col>
        </Row>
      </Container>
      <Modal
        centered
        show={showModalDelete}
        onHide={() => setShowModalDelete(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmation Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure want delete the data?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalDelete(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={async () => {
              const response = await deleteUserById(userId);
              if (response.status === 204) {
                toast.success("Success delete the user !");
              }
              setUpdated((updated) => updated + 1);
              setShowModalDelete(false);
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        centered
        show={showModalCreate}
        onHide={() => setShowModalCreate(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <form>
              <label htmlFor="user-name" className="form-label mt-2">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="user name"
                {...register("userName")}
              />
              <label htmlFor="email" className="form-label mt-2">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email"
                {...register("userEmail")}
              />
              <label htmlFor="gender" className="form-label mt-2">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                className="form-control"
                {...register("userGender")}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

              <label htmlFor="status" className="form-label mt-2">
                Status
              </label>
              <select
                name="status"
                id="status"
                className="form-control"
                {...register("userStatus")}
              >
                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </select>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalCreate(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit(onSubmit)}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default page;
