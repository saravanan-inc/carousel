import React from 'react'
import styled from 'styled-components'
import Card from '../../components/card';

function UploadFiles() {
  const [files, setFiles] = React.useState<any[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const arr = []
    if (e.target.files) {
      for (let i=0; i < e.target.files.length; i++) {
        arr.push(e.target.files[i])
      }
    }
    setFiles(arr);
    console.log(arr);
    
  }
  return (
    <Container>
      <Content>
        <h1>Drag and drop files here to upload</h1>
        <input onChange={handleChange} type="file" name="upload-file" id="upload-file" multiple />
      </Content>
      
      {files?.map((file)=> (
        <Card name={file.name} size={file.size} type={file.type} upload_date={file.lastModified} />
      ))}
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