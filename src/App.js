import logo from './logo.svg';
import './App.css';
import Form from './comp/Form';
import { UserProvider } from './comp/UserContext';
import Header from './comp/Header';

function App() {
  return (
    <div className="container">
      <UserProvider>
        <Header/>
        <Form/>
      </UserProvider>
    </div>
  );
}

export default App;
