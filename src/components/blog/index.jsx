import React from 'react'
import Link from "next/link";
import { Row, Col, Card, Button, Container } from "react-bootstrap";

function index({posts}) {
  return (
    <Container>
      <Row lg={3}>
        {posts.map((post) => {
          return (
            <Col>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>{`${post.title.slice(0, 20)} ...`}</Card.Title>
                  <Card.Text>{`${post.body.slice(0, 100)} ...`}</Card.Text>
                  <Link
                    className="btn btn-outline-secondary"
                    href={`posts/${post.id}`}
                  >
                    Read More
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default index