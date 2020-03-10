import React from 'react';
import './App.css';
import NavBar from './component/navBar'
import Home from './component/home'
import AboutUs from './component/about'
import Shop from './component/shop'
import {BrowserRouter,Switch,Route} from 'react-router-dom'


class App extends React.Component{
  state={
    item:0
  }
  addItem =()=>{
    this.setState({
      item:this.state.item + 1
    })
  }

  render(){
  return (
    
    <div className="App">
    <BrowserRouter>

    <NavBar item={this.state.item} />

    <Switch >
    <Route path="/" exact component={Home}/>
   
    <Route path = "/shop" component={()=>{ return <Shop addItem = {this.addItem}/>}}/>
    <Route path="/aboutus" component={AboutUs} />
    </Switch>

    </BrowserRouter>
    </div>
  );
  }
}

export default App;
