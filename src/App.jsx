import { Routes, Route } from 'react-router-dom';
import { Footer, Header, PageNotFound } from './components';
import { Home, RoomDetails } from './pages';

const App = () => {
  return (
    <main>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </main>
  );
};

export default App;
