import './styles/globals.scss';

import { FinanceProvider } from "./contexts/FinanceContext";
import { HomeTransaction } from "./pages/transaction/home";


function App() {

  return (
    <FinanceProvider>
      <HomeTransaction/>
    </FinanceProvider>
  );

}

export default App;
