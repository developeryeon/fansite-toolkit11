import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<QueryClientProvider client={queryClient}>
		<Provider store={store}>
			<BrowserRouter>
				<React.StrictMode>
					<GlobalStyle />
					<App />
				</React.StrictMode>
			</BrowserRouter>
		</Provider>
	</QueryClientProvider>
);
