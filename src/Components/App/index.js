import './app.scss';
import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';
import RulesModal from '../RulesModal';
import Result from '../Result';

import { useSelector } from 'react-redux';

const App = () => {

  const { displayRules } = useSelector((state) => state.displayOptions);
  const { playerChoice } = useSelector((state) => state.game);

  return (
    <div className="App">
      <Header />
      { !playerChoice && <Home /> }
      {  playerChoice && <Result playerChoice={playerChoice} /> }
      { displayRules && <RulesModal /> }
      <Footer />
    </div>
  );
}

export default App;
