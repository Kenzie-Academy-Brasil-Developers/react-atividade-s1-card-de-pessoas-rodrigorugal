import './App.css';
import Developer from './components/Developer/Developer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Developer name='Rodrigo' age='21' country='Brasil'></Developer>   
        <Developer name='Luiz' age='25' country='Brasil'></Developer>   
        <Developer name='Vinicius' age='32' country='Itália'></Developer>
      </header>
    </div>
  );
}

export default App;