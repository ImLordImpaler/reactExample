import React,  {Component}from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent'
import {DISHES} from './shared/DishesInfo'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        dishes : DISHES
    };
  };
  render(){
    return(
        <div className='container'>
            <Menu dishes = {this.state.dishes}/>
        </div>
    );
  }
}

export default App;
