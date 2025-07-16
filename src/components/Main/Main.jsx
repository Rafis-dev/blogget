import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';

// eslint-disable-next-line
export const Main = () => {
  return (
    <main>
      <Layout>
        <Tabs />
        <List />
      </Layout>
    </main>
  );
};
