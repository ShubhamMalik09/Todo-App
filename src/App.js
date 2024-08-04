import { Route, Routes} from "react-router-dom"
import Todo from './components/Todo';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Todo/>} />
        <Route path="/:search" element={<Todo/>} />
      </Routes>
  );
}

export default App;
