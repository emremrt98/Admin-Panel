import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Sidebar from "./components/Sidebar";
import Analytics from './pages/analytics.jsx';
import Student from './pages/student';
import Goals from './pages/goals';
import Quiz from './pages/quiz';
import Subscription from './pages/subscription'
import {Content} from './pages/content'

const App = () =>{
  return(
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Analytics/>}></Route>
          <Route path="/analytics" element={<Analytics/>}></Route>
          <Route path="/student" element={<Student/>}></Route>
          <Route path="/goals" element={<Goals/>}></Route>
          <Route path="/quiz" element={<Quiz/>}></Route>
          <Route path="/subscription" element={<Subscription/>}></Route>
          <Route path="/content" element={<Content/>}></Route>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};
export default App;