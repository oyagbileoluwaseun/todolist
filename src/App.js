import "./App.css";
import Footer from "./features/components/Footer";
import Header from "./features/components/Header";
// import Counter from './features/components/CounterUseReducer';
import Todo from "./features/components/Todo";
// import Display from './features/counter/Display';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Display /> */}
      <Header />
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
