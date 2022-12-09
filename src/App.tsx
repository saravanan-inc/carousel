import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import Header from './components/header';
import Auth from './pages/auth';
import Dashboard from './pages/dashboard';
import File from './pages/files';
import FilesList from './pages/fileslist';
import UploadFiles from './pages/uploadfiles';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Welcome</h1>} />
          <Route path="/login" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload-files" element={<UploadFiles />} />
          <Route path="/files-list" element={<FilesList />} />
          <Route path="/files/:id" element={<File />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`