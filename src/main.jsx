import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient=new QueryClient();
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <PostLists/>,
//       },
//       {
//         path: "/post/:id",
//         element: <Post />,
//       },
//       {
//         path: "/post/:id/edit",
//         element: <EditPost />,
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
)
