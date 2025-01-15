import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Candidates from "./pages/Candidates";
import PostJob from "./pages/PostJob";
import InterviewList from "./pages/InterviewList";
import CreateInterview from "./pages/CreateInterview";
import SendInvite from "./pages/SendInvite";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/interviews" element={<InterviewList />} />
          <Route path="/create-interview" element={<CreateInterview />} />
          <Route path="/send-invite" element={<SendInvite />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;