import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomCard = ({ movie, fun, btnDelete }) => {
  return (
    <Card style={{ width: "18rem" }} className="mt-3">
      <Card.Img variant="top" src={movie?.Poster} height="300px" />
      <Card.Body>
        <Card.Title>{movie?.Title}</Card.Title>
        <Card.Title>Rating: {movie?.imdbRating}</Card.Title>
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
        ;
      </Card.Body>
    </Card>
  );
};
