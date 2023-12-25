import './App.css';
import Tabs from './components/Tabs';

function App() {
  const allTabs = ['Tab 1 Content.', 'Tab 2 Content.', 'Tab 3 Content.'];
  return (
    <div className="App">
      <Tabs allTabs={allTabs} />
    </div>
  );
}

export default App;