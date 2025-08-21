import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import { Route, Routes } from 'react-router-dom';
import Modal from '../Modal';
import { HomePage } from './HomePage/HomePage';
import { useSelector } from 'react-redux';

// eslint-disable-next-line
export const Main = () => {
  const token = useSelector(state => state.tokenReducer.token);

  return (
    <main>
      <Layout>
        <Tabs />

        <Routes>
          <Route path="/" element={<HomePage token={token} />} />
          <Route path="/auth" element={<HomePage token={token} />} />

          <Route path="/category/:page" element={<List />}>
            <Route path="post/:id" element={<Modal />} />
          </Route>
        </Routes>
      </Layout>
    </main>
  );
};
