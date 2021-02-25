import Header from "./commonComponents/Header";
import Footer from "./commonComponents/Footer";

import { Switch, Route, withRouter, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';
import Article from "./pages/Article";
import Login from "./pages/Login";
import Settings from "./Settings";
import Editor from "./pages/Article/Editor";


function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          {/* <Route path="/register" component={Register} /> */}
          <Route path="/editor" component={Editor} />
          <Route path="/article/" component={Article} />
          <Route path="/settings" component={Settings} />
          {/* <Route path="/@:username" component={Profile} /> */}
          {/* <Route path="/@:username/favorites" component={Profile} /> */}
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
