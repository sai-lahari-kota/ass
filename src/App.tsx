import { useState } from 'react';
import { StringCalculator } from './StringCalculator';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const calculator = new StringCalculator();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const sum = calculator.add(input);
      setResult(sum);
    } catch (err: any) {
      setResult(null);
      setError(err.message || 'An error occurred');
    }
  };

  return (
    <div className="App">
      <h1>String Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter numbers (e.g. 1,2,3)"
        />
        <button type="submit">Calculate</button>
      </form>
      {result !== null && <div className="result">Sum: {result}</div>}
      {error && <div className="error">Error: {error}</div>}
    </div>
  );
}

export default App;
