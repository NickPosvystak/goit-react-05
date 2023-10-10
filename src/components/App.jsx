import { Layout } from './Layout';
import DetailsDogs from 'pages/DetailsDogs';
import Dogs from 'pages/Dogs';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Gallery } from './Gallery';
import { Subbreed } from './Subbreed';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="dogs/:dogId" element={<DetailsDogs />}>
          <Route path="subbreed" element={<Subbreed />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  );
};
