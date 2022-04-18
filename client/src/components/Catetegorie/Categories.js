
import React from 'react'
import styled from 'styled-components';
import {categories} from './data'; 
import CategoriesItem from './CategoriesItem';
import { mobile } from "../Responsive";



const Container = styled.div`
display: flex;
padding:20px;
justify-content: space-between;
${mobile({ padding :"0px", flexDirection:"Column" })};
`;

const Categories = () => {
  return (
    <Container>
        {categories.map(item =>
        <CategoriesItem item={item}  key={item.id} />
      )}
        </Container>
  )};

export default Categories;
