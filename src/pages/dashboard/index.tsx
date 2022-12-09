import React from 'react'
import styled from 'styled-components';

function Dashboard() {
  const showPrevious = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
  }

  const showNext = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
  }
  return (
    <>
      <Container>
        <Previous>
          <button onClick={showPrevious}>&#10162;</button>
        </Previous>
        <Content>
          <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          <img src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </Content>
        <Next>
          <button onClick={showNext}>&#10162;</button>
        </Next>
      </Container>
      <DotButton>
        <span data-active="1"></span>
        <span></span>
        <span></span>
      </DotButton>
    </>
  )
}

export default Dashboard;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    background-color: #747E7E;
    border: none;
    font-size: 2rem;
    border-radius: 50%;
    padding: .2rem .6rem;
  }
`

const Content = styled.div`
  display: flex;
  img {
    width: 49%;
    border-radius: 1rem;
    margin: .5%;
    object-fit: contain;
  }
`

const Previous = styled.div`
  position: absolute;
  left: 0;

  button {
    transform: rotate(180deg);
  }
`

const Next = styled.div`
  position: absolute;
  right: 0;
`

const DotButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: .5rem;

  span {
    width: .5rem;
    height: .5rem;
    background-color: #747E7E;
    margin-right: .2rem;
    border-radius: 50%;
  }

  [data-active="1"] {
    width: 1.5rem;
    border-radius: 1rem;
  }
`