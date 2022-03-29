import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { fetchMovie } from "../../helpers/axiosHelper";
import { CustomCard } from "../card/CustomCard";

export const SearchForm = ({ handleOnAddToList, getMovie }) => {
  const [search, setSearch] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    getMovie(search);
    setSearch("");
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control
              placeholder="Search..."
              onChange={handleOnChange}
              value={search}
              required
            />
          </Col>
          <Col>
            <Button variant="warning" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
