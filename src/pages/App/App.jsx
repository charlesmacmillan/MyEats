import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import { getRecipeByIngredients } from '../../services/spoonacular';
import Body from '../../components/Body/Body';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      recipes: null
    };
  }

  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({user: null})
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()})
  }
/*--- Lifecycle Methods ---*/
  // async componentDidMount() {
  //   const recipes = await getRecipeByIngredients();
  //   this.setState({
  //     recipes: recipes
  //   })
  //   console.log(this.state)
  // }

  render() {
    return (
      <div className="App-body">
          <NavBar 
            user={this.state.user} 
            handleLogout={this.handleLogout}
          />
        <Switch>
          <Route exact path='/' render={() =>
            <div>
              <Body />
           </div> 
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              
            />
          }/>
          <Route exact path='/login' render={({history}) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </Switch>
        <footer className="App-footer">
          <p>Site Created By: Charles MacMillan</p>
        </footer>
      </div>
    );
  }
}

export default App;
