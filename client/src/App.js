import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import {HomePage,LoginPage,Page1,Page2,SignUpPage,UserprofilePage} from './Pages/index'

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
