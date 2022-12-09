import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  const [auth, setAuth] = useState(false)
  const history = useNavigate()

  React.useEffect(() => {
    setAuth(localStorage.getItem("userInfo") ? true : false)
  },[history])

  const handleLogout = (e: React.MouseEvent<HTMLElement>) => {
    localStorage.removeItem("userInfo")
    setAuth(false)
  }

  return (
    <Container>
      <Content>
        <Logo to="/">Carousel</Logo>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/upload-files">Upload</Link>
        <Link to="/files-list">All-Files</Link>
      </Content>
      <Auth>
        {auth ? <Logout onClick={handleLogout}>Logout</Logout> : <Link to="/login">Login</Link> }
      </Auth>
    </Container>
  )
}

export default Header

const Container = styled.div`
  background-color: #555555;
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
  }
`

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 900;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: 50%;
`

const Auth = styled.div`
  button {
    cursor: pointer;
    background-color: inherit;
    border: none;
    color: white;
  }
`

const Logout = styled.button`
  
`