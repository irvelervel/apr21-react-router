import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Layout from './components/Layout'

function App() {
  return (
    <div>
      {/* the Router is needed so you can put your Route components inside */}
      <Router>
        {/* if the value of your prop is NOT a string, wrap it in curly brackets */}
        <MyNav title="StriveStaurant" />
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
        <Route path="/" exact render={(routerProps) => <Home {...routerProps} title="strive" />} />
      </Router>
    </div>
  )
}

export default App
