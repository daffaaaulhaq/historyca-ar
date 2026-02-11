import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="site/:id" element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
