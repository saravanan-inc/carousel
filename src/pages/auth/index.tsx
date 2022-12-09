import React from 'react'
import styled from 'styled-components'

function Auth() {

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
  };

  return (
    <Container>
      <Content>
        <h3>Login</h3>

        <form onSubmit={handleSubmit}>
          <Box>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </Box>

          <Box>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </Box>
          
          <button type='submit'>Login</button>
        </form>
      </Content>
    </Container>
  )
}

export default Auth

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  background-color: #666662;
`

const Content = styled.div`
  padding: 3rem 1rem;

  h3 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 900;
  }

  button {
    background-color: black;
    color: white;
    padding: .7rem 1rem;
    cursor: pointer;
    width: 100%;
    margin: 1rem 0;
    border: none;
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0;
  label {
    font-size: 1rem;
    margin-bottom: .5rem;
  }

  input {
    padding: .5rem;
    outline: none;
    border: none;
    border-radius: .3rem;
    font-size: 1.2rem;
  }
`