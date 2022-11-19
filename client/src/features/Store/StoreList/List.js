import React from 'react';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import StoreListCard from "./Card";

const StoreList = (props) => {
  return (
    <Container fluid="md">
      <Row xs={1} md={2} lg={4} className="g-4">
        {props.items &&
          props
            .items.slice(props.min, props.max)
            .map((item) => (
              <StoreListCard
                id={item._id}
                key={item._id}
                img={item.imageUrl[0]}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))}
      </Row>
    </Container>
  );
};

export default StoreList;
