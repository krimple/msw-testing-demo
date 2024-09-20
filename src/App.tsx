import './App.css'
import {store} from './store/create-store';
import { Provider } from 'react-redux';
import ListCustomers from "@/features/customers/list-customers/ListCustomers";

function App() {
  return (
    <Provider store={store}>
        <ListCustomers />
    </Provider>
  )
}

export default App
