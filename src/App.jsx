import Header from "../ui/Header";
import Logo from "../ui/Logo";
import Notes from "../ui/Notes";
import FullNote from "../ui/FullNote";
import NewNote from "../ui/NewNote";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HoursCount from "../ui/HoursCount";

// Create a new Query Client with default options if needed
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 10, // 10 minutes
      retry: 1, // Retry failed requests once
    },
  },
});

function App() {
  const data = {
    case: "075689541",
    description: "Fraud case hotel Citizen",
    note: "blablabla",
    date: "21.6.2024",
    id: "GRZS5S4",
    priority: "low",
    color: "green",
    booking_id: "GRZS5S4",
    date_to_do: "27.6.2024",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit neque qui, velit dolorum praesentium explicabo unde veniam rerum deserunt esse commodi sapiente atque delectus obcaecati tempora ex ducimus quae dicta consequatur molestias? Corporis sed maiores omnis voluptates, ullam quia explicabo veritatis voluptatibus aperiam fugiat eligendi asperiores harum quisquam eaque reprehenderit!",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Header>
        <Logo />
        <HoursCount />
      </Header>
      <Notes data={data} />
      <FullNote data={data} />
      <NewNote />
    </QueryClientProvider>
  );
}

export default App;
