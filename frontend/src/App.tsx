import { useQuery } from "@tanstack/react-query"
import { VacationPlannerApiService } from "./api-client"

export const App = () => {
  const { data } = useQuery({
    queryKey: ["timestamp"],
    queryFn: VacationPlannerApiService.timestamp,
    refetchInterval: 1_000,
  })

  return (
    <div className="grid h-full w-full place-content-center">
      <h1 className="text-center text-2xl">Hello world</h1>
      <p>{data}</p>
    </div>
  )
}
