import { render, screen } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { expect, test } from "vitest"
import { App } from "./App"

test("renders App", () => {
  render(<App />, {
    wrapper: ({ children }) => <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>,
  })

  expect(screen.getByText("Hello world")).toBeInTheDocument()
})
