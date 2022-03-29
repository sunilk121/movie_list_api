import React from "react";
import { Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const MovieList = ({movieList,handleOnMovieDelete,handleOnSelect}) => {
	return (
		<Row>
			<Col>
				<div className="filter d-flex justify-content-between py-3">
					<ButtonGroup aria-label="Basic example" size="lg">
						<Button variant="warning" 	onClick={()=>handleOnSelect()}>ALL</Button>
						<Button variant="primary" 	onClick={()=>handleOnSelect("happy")}>HAPPY</Button>
						<Button variant="danger" 	onClick={()=>handleOnSelect("lazy")}>LAZY</Button>
					</ButtonGroup>
					<ButtonGroup aria-label="Basic example" size="lg">
						<Button variant="primary">GRID</Button>
						<Button variant="secondary">LIST</Button>
					</ButtonGroup>
				</div>
				<div className="d-flex justify-content-between flex-wrap">
					{movieList.map((movie,i)=>(
					<CustomCard key={i} movie={movie} btnDelete={true} fun={handleOnMovieDelete}/>
					))}
					
				</div>
			</Col>
		</Row>
	);
};
