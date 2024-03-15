import { CurrentUserLoader } from './components/current-user-loader';
import { UserInfo } from './components/user-info';
import { UserLoader } from './components/user-loader';
import { ResourceLoader } from './components/resource-loader';
import { BookInfo } from './components/book-info';
import { DataSource } from './components/data-source';
import axios from 'axios';
import { DataSourceWithRender } from './components/data-source-with-render';

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const getDataFromLocalStorage = (key) => () => {
  return localStorage.getItem(key);
};

const Message = ({ msg }) => <h1>{msg}</h1>;

function App() {
  return (
    <>
      <DataSource
        getData={() => getDataFromLocalStorage('test')}
        resourceName={'msg'}
      >
      <Message />
      </DataSource>
    </>
  );
}

export default App;
