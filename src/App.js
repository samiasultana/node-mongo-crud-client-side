// import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";
import './App.css';
import AddUser from "./components/AddUser/AddUser";
import Home from "./components/Home/Home";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import Users from "./components/Users/Users";
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header></Header>
          <Routes>
            
            <Route exact path="/"
              element={<Home></Home>}
            ></Route>

            <Route exact path="/users"
              element={<Users></Users>}
            ></Route>

            <Route path="/users/add"
              element={<AddUser></AddUser>}
            ></Route>

            <Route path="/users/add"
              element={<AddUser></AddUser>}>
            </Route>

            <Route path="/users/update/:id"
              element={<UpdateUser></UpdateUser>}>
            </Route>

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
