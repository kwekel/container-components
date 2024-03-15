import { CurrentUserLoader } from './components/current-user-loader';
import { UserInfo } from './components/user-info';
import { UserLoader } from './components/user-loader';
import { ResourceLoader } from './components/resource-loader';
import { BookInfo } from './components/book-info'

function App() {
  return (
    <>
      <ResourceLoader resourceUrl={'/users/1'} resourceName="user">
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader resourceUrl={'/books/1'} resourceName="book">
        <BookInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
