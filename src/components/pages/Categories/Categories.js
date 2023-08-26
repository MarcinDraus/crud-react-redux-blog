
import React from 'react';
import { Link } from 'react-router-dom';
import {  Row, Col, } from 'react-bootstrap';
//import { getAllCategories } from '../../../Redux/categoriesRedux';
//import { useNavigate } from 'react-router-dom'

import initialState from '../../../Redux/initialState';
import { ListGroup } from 'react-bootstrap';
//import CategoryPage from '../CategoryPage/CategoryPage'

const Categories = () => {

return (
    
<Row className="mb-4" >
  <Col xs={6}>
   <h2>All categories</h2>
  </Col>
    
    <Row className="justify-content-between">
       <ListGroup>
       {initialState.categories.map(category => {
         return(
         <ListGroup.Item key={category.id} value={category.name} >
         
            <Link to={`/categories/${category.name}`}>{category.name}</Link>
          
         </ListGroup.Item>
            );
              })
       }
       </ListGroup>
    </Row>
</Row>

  );
};
export default Categories
