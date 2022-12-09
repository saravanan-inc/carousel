import React from 'react'
import styled from 'styled-components'
import Card from '../../components/card'
import { server } from '../../utils/axios'

function FilesList() {
  const [files, setFiles] = React.useState([]);
  React.useEffect(() => {
    async function getFiles() {
      const res = await server.get("allfiles")
    }
    getFiles()
  }, [])
  return (
    <Container>
      {files?.map((file: any) => (
        <Card name={file.name} size={file.size} type={file.type} upload_date={file.lastModified} />
      ))}
    </Container>
  )
}

export default FilesList

const Container = styled.div`
  
`