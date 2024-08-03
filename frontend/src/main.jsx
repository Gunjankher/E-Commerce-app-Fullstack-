import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/app.scss'
import {createBrowserRouter,createRoutesFromElements,Routes,RouterProvider,Route,BrowserRouter} from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loader from './components/Loader.jsx'
import {Toaster} from 'react-hot-toast'
import { store } from './redux/store.js'
import {Provider} from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.js'


// ADMIN ROUTES

const DashBoard = lazy(()=> import('./Pages/Admin-Pages/DashBoard.jsx'))
const Transcation = lazy(()=> import('./Pages/Admin-Pages/Transcation.jsx'))
const Products = lazy(()=> import('./Pages/Admin-Pages/Products.jsx'))
const Customers = lazy(()=> import('./Pages/Admin-Pages/Customers.jsx'))
const NewProduct = lazy(()=> import('./Pages/Admin-Pages/management/NewProduct.jsx'))
const ProductMangement = lazy(()=> import('./Pages/Admin-Pages/management/ProductMangement.jsx'))
const TransactionManagement = lazy(()=> import('./Pages/Admin-Pages/management/TransactionManagement.jsx'))
const BarCharts = lazy(()=> import('./Pages/Admin-Pages/Charts/BarCharts'))
const LineCharts = lazy(()=> import('./Pages/Admin-Pages/Charts/LineChart.jsx'))
const PieCharts = lazy(()=> import('./Pages/Admin-Pages/Charts/PieCharts.jsx'))
const Coupon = lazy(()=> import('./Pages/Admin-Pages/apps/Coupon.jsx'))
const StopWatch = lazy(()=> import('./Pages/Admin-Pages/apps/StopWatch'))
const Toss = lazy(()=> import('./Pages/Admin-Pages/apps/Toss'))











const Home = lazy(()=> import('./Pages/Home.jsx'))
const Cart = lazy(()=> import('./Pages/Cart.jsx'))
const Search = lazy(()=> import('./Pages/Search.jsx'))
const Shipping = lazy(()=> import('./Pages/Shipping.jsx'))
const Login = lazy(()=>import('./Pages/Login.jsx'))
const Orders = lazy(()=> import("./Pages/Orders.jsx"))







const router = createBrowserRouter(
  createRoutesFromElements(
    <>
<Route path='/' element={<App />}>

    <Route 
    path='/'
    element ={
      <Suspense fallback={<Loader />}>
  <Home />
    </Suspense>
    }
    />
    
    <Route 
    path='/cart'
    element ={
      <Suspense fallback={<Loader />}>
  <Cart/>
    </Suspense>
    }
    />
    
    <Route 
    path='/search'
    element ={
      <Suspense fallback={<Loader />}>
  <Search />
    </Suspense>
    }
    />


// Logged in user routes

    <Route 
    path='/login'
    element ={
      <Suspense fallback={<Loader />}>
  <Login />
    </Suspense>
    }
    />
    <Route 
    path='/orders'
    element ={
      <Suspense fallback={<Loader />}>
  < Orders />
    </Suspense>
    }
    />


    // LOGIN USER ROUTES
    <Route 
    path='/shipping'
    element ={
      <Suspense fallback={<Loader />}>
  <Shipping />
    </Suspense>
    }
    />
    
















//                                                ADMIN ROUTES

      <Route path='/admin/dashboard' element={
        <Suspense fallback={<Loader />}>
          <DashBoard />
        </Suspense>
      } />
      <Route path='/admin/transaction' element={
        <Suspense fallback={<Loader />}>
          <Transcation />
        </Suspense>
      } />
      <Route path='/admin/products' element={
        <Suspense fallback={<Loader />}>
          <Products />
        </Suspense>
      } />
      <Route path='/admin/customer' element={
        <Suspense fallback={<Loader />}>
          <Customers />
        </Suspense>
      } />

                    {/* MANAGEMENT */}


      <Route path='/admin/product/new' element={
        <Suspense fallback={<Loader />}>
          <NewProduct />
        </Suspense>
      } />
      <Route path='/admin/product/:id' element={
        <Suspense fallback={<Loader />}>
          <ProductMangement />
        </Suspense>
      } />
      <Route path='/admin/transaction/:id' element={
        <Suspense fallback={<Loader />}>
          <TransactionManagement />
        </Suspense>
      } />


      {/* Charts */}

      <Route path='/admin/chart/bar' element={
        <Suspense fallback={<Loader />}>
          <BarCharts/>
        </Suspense>
      } />
      <Route path='/admin/chart/line' element={
        <Suspense fallback={<Loader />}>
          <LineCharts/>
        </Suspense>
      } />
      <Route path='/admin/chart/pie' element={
        <Suspense fallback={<Loader />}>
          <PieCharts/>
        </Suspense>
      } />

      {/* Apps */}

      <Route path='/admin/apps/stopwatch' element={
        <Suspense fallback={<Loader />}>
          <StopWatch />
        </Suspense>
      } />
      <Route path='/admin/apps/coupon' element={
        <Suspense fallback={<Loader />}>
          <Coupon />
        </Suspense>
      } />
      <Route path='/admin/apps/toss' element={
        <Suspense fallback={<Loader />}>
          <Toss/>
        </Suspense>
      } />
      </Route>
     
    </>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster
        position="bottom-center" // Set position to bottom-center
      />
    </Provider>
  </React.StrictMode>,
)
