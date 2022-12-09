import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Auth from './pages/auth';
import Dashboard from './pages/dashboard';
import File from './pages/files';
import FilesList from './pages/fileslist';
import UploadFiles from './pages/uploadfiles';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Welcome</h1>} />
          <Route path="/login" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload-files" element={<UploadFiles />} />
          <Route path="/files-list" element={<FilesList />} />
          <Route path="/files/:id" element={<File />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
