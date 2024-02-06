import React from "react";
import Pagination from 'react-bootstrap/Pagination';

const PaginationComp = () => {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} className="Pagination-item">
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <Pagination className="d-flex justify-content-center Pagination">
            <Pagination.Prev className="Pagination-item">Prev</Pagination.Prev>
            {items}
            <Pagination.Next className="Pagination-item">Next</Pagination.Next>
        </Pagination>
    )
}

export default PaginationComp;