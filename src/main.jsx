import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme/theme';
import './assets/css/App.css';
import './styles/theme.scss';
import App from './App';
import { AppKitProvider } from './components/AppkitProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppKitProvider>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />

        </ChakraProvider>
      </BrowserRouter>
    </AppKitProvider>,
  </StrictMode>,
)