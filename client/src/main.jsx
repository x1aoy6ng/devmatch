import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WalletProvider } from './App.jsx'
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WalletProvider />
  </StrictMode>,
)