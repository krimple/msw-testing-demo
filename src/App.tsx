import './App.css'
import {store} from './store/create-store';
import { Provider } from 'react-redux';
import CustomerManager from "@/features/customers/CustomerManager.tsx";

function App() {
  return (
    <Provider store={store}>
        <CustomerManager />
    </Provider>
  )
}

export default App
