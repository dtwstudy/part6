import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
import { MessageContextProvider, useMessageDispatch } from './MessageContent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <MessageContextProvider>
      <App />
    </MessageContextProvider>

  </QueryClientProvider>

)