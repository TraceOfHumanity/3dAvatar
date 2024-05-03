import { useSelector } from 'react-redux';

function App() {
  const { value } = useSelector((state) => state.firstSlice);
  return <div className="App">{value}</div>;
}

export default App;
