import './App.css';
import { Route } from "react-router-dom";
import homePage from './pages/homePage';
import chatPage from './pages/chatPage';

function App() {
  return (
    <div className="App">
      <Route path='/' component={homePage} exact />
      <Route path='/chat' component={chatPage} />
    </div>
  );
}

export default App;
