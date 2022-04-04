import { useEffect } from "react";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./Payment";

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from "./Orders";

const promise = loadStripe(
  'pk_test_51Kg0QaJtxX2BjBkzLKmdsRE6BD6r259l9R2p2mRAfnCe6bflApZDyz9UrsVfzS93f2x6UGG9ZCcQWEj0yXZE955z00TBeAba8L'
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="checkout" element={<> <Header /> <Checkout /> </>} />
          <Route path="orders" element={ <> <Header /> <Orders /> </> } />
          <Route path="login" element={ <Login /> } />
          <Route path="payment" element={<> <Header /> <Elements stripe={promise}>
              <Payment /> </Elements> </> } />
              
          <Route path="/" element={<> <Header /> <Home />  </>  } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
