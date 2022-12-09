import React from 'react'
import styled from 'styled-components';

export interface fileTypeProps {
  name: string;
  size: number;
  type: string;
  upload_date: number;
}
  

function Card({ name, size, type, upload_date } : fileTypeProps) {
  return (
    <Container key={name}>
      <h2>{name}</h2>
      <Grid>
        <span>SIZE</span>
        <span>TYPE</span>
        <span>UPLOADED DATE</span>
        <span>{size}</span>
        <span>{type}</span>
        <span>{upload_date}</span>
      </Grid>
    </Container>
  )
}

export default Card

const Container = styled.div`
  text-align: left;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: .5rem;
  background: #e0e0e0;
  box-shadow:  31px 31px 61px #c7c7c7, -31px -31px 61px #f9f9f9;


  h2 {
    border-bottom: 1px solid rgba(0,0,0,.1);
    padding-bottom: .8rem;
  }
`

const Grid = styled.div`
  display: grid;
  gap: .8rem;
  grid-template-columns: auto auto auto;
  margin-top: 1rem;
`