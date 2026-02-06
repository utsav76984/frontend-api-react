import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetchUsersData();
  }, []);

  async function fetchUsersData() {
    const url = "https://dummy-json.mock.beeceptor.com/posts";
    const response = await fetch(url);
    const data = await response.json();
    setUsersData(data);   // store API data in state
    console.log(data, usersData);

  }

  return (
    <div className="App">
      <h1>Hello Utsav Kalathiya 👋</h1>

      {
       usersData && usersData.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <h1>{item.userId}</h1>
          </div>
        ))
      }
    </div>
  );
}

export default App;
