import axios from "axios"
axios.defaults.headers.common['X-Auth-Token'] = 'some kind of token'

function App() {
  const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

axios.all([
    axiosInstance.get('/todos?_limit=5'),
    axiosInstance.get('/posts?_limit=5')
  ])
  .then(axios.spread((todos, posts) => console.log(posts)))
  .catch(err => console.error("Couldnt get the data from the API", err))
}
export default App
