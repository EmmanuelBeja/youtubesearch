import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { Container } from 'reactstrap'
import Search from './components/Search'
import Results from './components/Results'

import './App.scss'

const App = () => {
  return (
    <Provider store={store}>
      <Container className="app-container">
        <Search />
        <Results />
      </Container>
      <ToastContainer />
    </Provider>
  )
}

export default App
