import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux

import store from './store'; // Import your Redux store

import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/success" element={<Success />} />
            <Route path="/orderHistory" element={<OrderHistory />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
