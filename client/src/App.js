import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import SignUpPage from "./Pages/SignUp";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import UserprofilePage from "./Pages/Userprofile";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/profile" element={<UserprofilePage/>}/>
          <Route path="/page1" element={<Page1/>}/>
          <Route path="/page2" element={<Page2/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
