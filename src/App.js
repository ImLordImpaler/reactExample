import React,  {Component}from 'react';

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
            <Menu dishe1 = {this.state.dishes}/>
        </div>
    );
  }
}

export default App;
