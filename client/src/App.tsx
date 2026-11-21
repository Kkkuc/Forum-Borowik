import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import CreateThreadPage from "./pages/CreateThreadPage";
import HomePage from "./pages/HomePage";
import ThreadDetailsPage from "./pages/ThreadDetailsPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { NotFound } from "./pages/NotFound";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/homepage")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <p>{message}</p>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="threads/new" element={<CreateThreadPage />} />
          <Route path="threads/:id" element={<ThreadDetailsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
