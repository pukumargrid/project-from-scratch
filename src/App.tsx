import Button from './components/Button';
import './App.css';

function App() {
  const handleClick = () => {
    // eslint-disable-next-line no-console
    console.log('Button clicked!');
  };

  return (
    <div className="app-container">
      <h1>Welcome to My React App</h1>
      <p>
        This is a sample React application with TypeScript and ESLint (AirBnB).
      </p>
      <Button onClick={handleClick} label="Click Me" />
    </div>
  );
}

export default App;
