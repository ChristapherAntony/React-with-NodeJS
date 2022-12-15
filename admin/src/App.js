import DashPage from "./Pages/Dash";
import LoginPage from "./Pages/Login";
import UsersManagementPage from "./Pages/UsersManagement";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/dash" element={<DashPage />}/>
          <Route path="/users" element={<UsersManagementPage />}/>
        </Routes>
      </Router>
      
      
      


    </div>
  );
}

export default App;
