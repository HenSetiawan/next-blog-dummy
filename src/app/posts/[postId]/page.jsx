"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { BsFillPersonFill } from 'react-icons/bs'
import {AiOutlineComment} from 'react-icons/ai'
import bannerImage from "@/assets/images/banner_image.png";
import author from '@/assets/images/author.png'

function page({ params, searchParams }) {
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
          <Col>
            <div className="d-flex">
              <p>
                <BsFillPersonFill /> Hendy Setiawan
              </p>
              <p className="ms-3">
                <AiOutlineComment /> 3
              </p>
            </div>
            <h3>Ini Judul Post Yang Lumayan Panjang Sih Ya</h3>
            <p className="text-justify">
              Sollers infit cubicularis. Illo terra pel. Synagoga defessus
              sophismata. Theologus turpe adsuesco. Eligendi cado vis. Cito
              molestiae ars. Vesica asper rerum. Facere adsuesco compello.
              Crastinus adsum avarus. Combibo adicio neque. Ullam aduro sperno.
              Enim curiositas aegrotatio. Aeneus anser virga. Candidus crastinus
              ara. Sordeo valde toties.
            </p>
            <div className="d-flex author-container p-2">
              <Image width={100} src={author} />
              <div className="author-info ms-2">
                <p>Name : Hendy Setiawan</p>
                <p>Email : hendy@google.com</p>
                <p>Gender : Pria</p>
                <p>Status : Aktif</p>
              </div>
            </div>

            <div className="commnents mt-4">
              <h3>Comments</h3>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default page;
