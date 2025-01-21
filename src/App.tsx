import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Dashboard from "@/pages/Dashboard";
import Jobs from "@/pages/Jobs";
import Candidates from "@/pages/Candidates";
import CreateInterview from "@/pages/CreateInterview";
import InterviewSession from "@/pages/InterviewSession";
import SendInvite from "@/pages/SendInvite";
import InterviewResult from "@/pages/InterviewResult";
import HiringList from "@/pages/HiringList";
import PostJob from "@/pages/PostJob";
import InterviewList from "@/pages/InterviewList";
import HumanResource from "@/pages/HumanResource";
import Payroll from "@/pages/Payroll";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/create-interview" element={<CreateInterview />} />
          <Route path="/interview-session" element={<InterviewSession />} />
          <Route path="/send-invite" element={<SendInvite />} />
          <Route path="/interview-result" element={<InterviewResult />} />
          <Route path="/hiring-list" element={<HiringList />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/interviews" element={<InterviewList />} />
          <Route path="/human-resource" element={<HumanResource />} />
          <Route path="/human-resource/payroll" element={<Payroll />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;