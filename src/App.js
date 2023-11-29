
import Dashboard from './dashboard/dashboard';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faTasks, faPlus, faCog, faMoneyBill, faChartBar, faPhone, faVideo, faEnvelope, faEllipsisH, faBell,faSearch, faMessage, faMicrophone, faUser} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faTasks, faPlus, faCog, faMoneyBill, faChartBar, faPhone, faVideo, faEnvelope, faEllipsisH, faBell,faSearch, faMessage, faMicrophone, faUser);

function App() {
  return (
    <div>
      <Dashboard/>
    </div>
  );
}

export default App;
