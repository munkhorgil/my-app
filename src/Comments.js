import React from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import styled from "styled-components";

const Wrapper = styled.div``;

export default function Comments({ loading, items = [] }) {
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  if (items.length === 0) {
    return null;
  }

  const renderItem = (item, idx) => (
    <div key={idx} className="content">
      <small>{new Date(item.createdAt).toDateString()}</small>
      <p>{item.comment}</p>
      <cite>~{item.name}</cite>
    </div>
  );

  return <Wrapper>{items.map(renderItem)}</Wrapper>;
}
