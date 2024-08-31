import { useState } from 'react';
import './App.css';
import { generateMnemonic } from "bip39";
import { SolanaWallet } from './Solana';
import { EthWallet } from './EthWallet';

function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <div className="App">
      <button onClick={async function() {
        const mn = await generateMnemonic();
        setMnemonic(mn);
      }}>
        Create Seed Phrase
      </button>
      <br/>
      <input 
        type="text" 
        value={mnemonic} 
        readOnly 
        placeholder="Your seed phrase will appear here..."
      />
      <br />
      <SolanaWallet />
      <br/>
      <EthWallet />

    </div>
  );
}

export default App;
