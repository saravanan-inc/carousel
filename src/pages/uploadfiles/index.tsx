import React from 'react'
import styled from 'styled-components'

function UploadFiles() {

  const handleChange = () => {

  }
  return (
    <Container>
      <Content>
        <h1>Drag and drop files here to upload</h1>
        <input type="file" name="upload-file" id="upload-file" />
      </Content>
    </Container>
  )
}

export default UploadFiles

const Container = styled.div`
  margin-top: 1rem;
  background-color: white;
  padding: .5rem;
  color: black;
  text-align: center;
`

const Content = styled.div`
  border: 1px solid #747E7E;
  border-style: dashed;
  padding: 3rem;
  h1 {
    margin-bottom: 2rem;
  }
  input {
  }

  button {
    background-color: white;
    border: none;
    color: black;
  }
`