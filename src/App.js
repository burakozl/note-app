import './App.css';
import Content from './components/Content';
import ContentList from './components/ContentList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <ContentList />
    </div>
  );
}

export default App;