import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import { getRecipeByIngredients } from '../../services/spoonacular';
import * as thingAPI from '../../services/things-api';
import Body from '../../components/Body/Body';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      things: [],
      recipes: []
    };
  }

  handleAddThing = async newThingData => {
    const newThing = await thingAPI.create(newThingData);
    console.log(newThing);
    this.setState(state => ({
      things: [...state.things, newThing]
    }),
      () => this.props.history.push('/'));
  }

  handleDeleteThing= async id => {
  await thingAPI.deleteOne(id);
  this.setState(state => ({
    // Yay, filter returns a NEW array
    things: state.things.filter(p => p._id !== id)
  }), () => this.props.history.push('/'));
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
  async componentDidMount() {
    // const recipes = await getRecipeByIngredients();
    const things = await thingAPI.getAll();
    this.setState({
      // recipes: recipes,
      things: things
    });
  }

  render() {
    return (
      <div>
        <NavBar 
          user={this.state.user} 
          handleLogout={this.handleLogout}
        />
        <div className="App-body">
        <Switch>
          <Route exact path='/' render={() =>
            <div>
              <Body
                handleDeleteThing={this.handleDeleteThing}
                handleAddThing={this.handleAddThing}  
                things={this.state.things}
                user={this.state.user}
                recipes={this.state.recipes}
              />
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
      </div>
    );
  }
}

export default App;
