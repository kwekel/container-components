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

function App() {
  return (
    <>
      <DataSourceWithRender
        getData={() => getDataFromServer('/users/3')}
        render={(resource) => <UserInfo user={resource} />}
      ></DataSourceWithRender>
    </>
  );
}

export default App;
