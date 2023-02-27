import Header from "./component/Header/Header"
import Destion from "./component/Destion/destion"
import Holiday from "./component/Holiday/Holiday";
import Form from "./component/Form/Form"
import Footer from "./component/Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <div className="plan-title" >
          PLAN YOUR NEXT DREAM
        </div>
        <div className="list-popular">Most Popular Destination</div>
        <div className="all-dest">View all Destination </div>
      </div>
      <Destion />
      <div className="recommended">Recommended Holidays</div>
      <div className="all-holidays"> View all Holidays </div>
      <Holiday />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
