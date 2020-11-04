import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in/sign-in-page.component';
import HomePage from './pages/homepage/homepage.component';
import SignUpPage from './pages/sign-up/sign-up-page.component';
import PasswordResetPage from './pages/password-reset-page/password-reset-page.component';
import ResetSuccessPage from './pages/reset-success-page/reset-success.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} /> 
        <Route path='/signin' component={SignInPage} />
        <Route path='/signup' component={SignUpPage} />
        <Route path='/resetpw' component={PasswordResetPage} />
        <Route path='/resetsuccess' component={ResetSuccessPage} />
      </Switch>
    </div>
  );
}

export default App;
