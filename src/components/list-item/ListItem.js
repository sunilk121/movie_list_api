import React from "react";
import { Button, Col, Row } from "react-bootstrap";

export const ListItem = ({ movie, fun, btnDelete }) => {
  return (
    <Row>
      <Col>
        <img src={movie?.Poster} width="100%" alt="" />
      </Col>
      <Col>
        <h3>{movie?.Title}</h3>
        <h3>Rating: {movie?.imdbRating}</h3>

        <div className="d-grid gap-2">
          <Button variant="danger" onClick={() => fun(movie.imdbID)}>
            Delete
          </Button>
        </div>
      </Col>
    </Row>
  );
};
