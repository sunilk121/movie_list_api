import React from "react";
import { Button, Col, Row } from "react-bootstrap";

export const ListItem = ({ movie, fun, btnDelete }) => {
  return (
    <Row>
      <Col>
        <img src={movie?.poster} width="100%" alt="" />
      </Col>
      <Col>
        <h3>{movie?.title}</h3>
        <h3>Rating: {movie?.imdbRating}</h3>
        {btnDelete ? (
          <div className="d-grid gap-2">
            <Button variant="danger" onClick={() => fun(movie.imdbID)}>
              Delete
            </Button>
          </div>
        ) : (
          <div className="d-flex justify-content-between">
            <Button variant="info" onClick={() => fun("happy", movie)}>
              Happy
            </Button>
            <Button variant="secondary" onClick={() => fun("lazy", movie)}>
              Lazy
            </Button>
          </div>
        )}
      </Col>
    </Row>
  );
};
