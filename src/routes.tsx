
import React from 'react';
import GlobalLayout from './pages/_layout'

const ProductsIndex = React.lazy(() => import('./pages/products/index'));
const ProductsId = React.lazy(() => import('./pages/products/[id]'));


export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/products', element: <ProductsIndex />, index: true},
      { path: '/products/:id', element: <ProductsId />, },
    ]
  }
]

export const pages = [
  { route: '/products' },
  { route: '/products/:id' },
]
