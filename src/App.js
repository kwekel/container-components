import { CurrentUserLoader } from './components/current-user-loader';
import { UserInfo } from './components/user-info';
import { UserLoader } from './components/user-loader';
import { ResourceLoader } from './components/resource-loader';
import { BookInfo } from './components/book-info';
import { DataSource } from './components/data-source';
import axios from 'axios';

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

function App() {
  return (
    <>
      <DataSource
        getData={() => getDataFromServer('/users/3')}
        resourceName="user"
      >
        <UserInfo />
      </DataSource>
    </>
  );
}

export default App;
