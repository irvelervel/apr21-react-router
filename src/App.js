import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Reservations from './components/Reservations'
import Menu from './components/Menu'
import DishDetails from './components/DishDetails'
// import Layout from './components/Layout'

function App() {
  return (
    <div>
      {/* the Router is needed so you can put your Route components inside */}
      <Router>
        <MyNav title="StriveStaurant" />
        {/* without a withRouter, a component inside a Router will not get 1 nor 2 */}
        {/* if the value of your prop is NOT a string, wrap it in curly brackets */}
        {/* 
      <Layout>
        <Home />
      </Layout>
      */}
        {/* this will just require the component name */}
        {/* this syntax will give Home automatically history, location and match */}
        {/* <Route path="/" exact component={Home} /> */}
        {/* but if you need your component to be loaded with props, you can use */}
        {/* the render prop, if will take a function returning the tag of your component */}
        <Route exact path="/" render={(routerProps) => <Home {...routerProps} title="strive" />} />
        {/* using the render prop will NOT automatically pass history, location and match down */}
        {/* you may choose to not use them, but if you want them you need to manually take them */}
        {/* from the parameter of the function and spred them over */}
        <Route path="/reservations" component={Reservations} />
        <Route path="/menu" component={Menu} />
        {/* a route like this will get 1 and 2 */}
        <Route path="/details/:dishId" component={DishDetails} />
      </Router>
    </div>
  )
}

export default App

// wrapping a component in a Route will provide 2 effects:
// 1) being able to conditionally render it just on specific paths
// 2) being able to work with the aditional props (history, location and match)
