import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home/Home";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Donate } from "./pages/Donate";
import setAuthToken from './utils/setAuthToken';
import Donacont from "./pages/Donation/donacont";
import ChatBody from "./components/chatBody/ChatBody";

if(localStorage.getItem('token')) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/explore" component={Donacont} />
          <Route path="/donate" component={Donate} />
          <Route path="/chatbox" component={ChatBody} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
