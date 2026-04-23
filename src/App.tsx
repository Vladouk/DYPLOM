import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import Booking from './screens/Booking';
import './styles/theme';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/booking" component={Booking} />
        </Switch>
        <Footer />
      </Router>
    </I18nextProvider>
  );
};

export default App;