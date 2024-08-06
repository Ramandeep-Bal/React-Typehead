/* Import the Search component inside the App Component as if it was created here */
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Search from './components/Search.jsx';
function App() {
  return (
    <div className="wrapper">
      <Search></Search>
    </div>
  );
}
export default App;
