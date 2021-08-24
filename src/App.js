import './App.css';
import Header from './components/header';

import { Home } from './components/Pages/Home';
import About from './components/Pages/About';
import Blog from './components/Pages/Blog';
import Contact from './components/Pages/Contact';
import Footer from './components/foooter';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { StaticKitProvider } from '@statickit/react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Header />

      <div className="pages">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
