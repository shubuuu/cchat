import './App.css';
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import Join from "./component/join/Join";
import Chat from './component/chat/Chat';





function App() {




  return (


    <Router>
<Routes>
      <Route exact path="/" element={<Join/>} />
      <Route path="/chat" element={<Chat/>}  />
</Routes>
    </Router>

  );
}

export default App;