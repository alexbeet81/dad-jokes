import "./App.css";
import MessageWindow from "./components/MessageWindow";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <MessageWindow />
      </QueryClientProvider>
    </div>
  );
}

export default App;
