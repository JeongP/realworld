import Header from "./components/Header";
import Footer from "./components/Footer";

import { Switch, Route, withRouter, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          {/* <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/editor/:slug?" component={Editor} />
          <Route path="/article/:id" component={Article} />
          <PrivateRoute path="/settings" component={Settings} />
          <Route path="/@:username" component={Profile} />
          <Route path="/@:username/favorites" component={Profile} /> */}
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
