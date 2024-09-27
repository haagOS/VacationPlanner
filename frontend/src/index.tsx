import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { OpenAPI } from "./api-client"

import { App } from "./App"
import "./index.css"

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
})
OpenAPI.BASE = import.meta.env.VITE_APP_API_BASE

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={createBrowserRouter([{ path: "/", element: <App /> }])} />
    </QueryClientProvider>
  </React.StrictMode>
)
