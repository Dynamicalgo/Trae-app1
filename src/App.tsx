import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Candidates from "./pages/Candidates";
import PostJob from "./pages/PostJob";
import InterviewList from "./pages/InterviewList";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/interview-list" element={<InterviewList />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;