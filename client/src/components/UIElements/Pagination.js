import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
 return <section className="pagination">{props.links}</section>;
}
export default Pagination;