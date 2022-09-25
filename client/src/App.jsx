import { HomePage, PostFormPage, NotFoundPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/PostContext";
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <div className="flex items-center">
      <div className="p-10 container m-auto">
        <PostProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />;
            <Route path="/new" element={<PostFormPage />} />;
            <Route path="/posts/:id" element={<PostFormPage />} />;
            <Route path="*" element={<NotFoundPage />} />;
          </Routes>
          <Toaster />
        </PostProvider>
      </div>
    </div>
  );
}

export default App;
