
import Dashboard from './dashboard/dashboard';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faTasks, faPlus, faCog, faMoneyBill, faChartBar, faPhone, faVideo, faEnvelope, faEllipsisH, faBell,faSearch, faMessage, faMicrophone, faUser} from '@fortawesome/free-solid-svg-icons';
import Dash from './dashboard/chartsboard/dash';

library.add(faHome, faTasks, faPlus, faCog, faMoneyBill, faChartBar, faPhone, faVideo, faEnvelope, faEllipsisH, faBell,faSearch, faMessage, faMicrophone, faUser);

function App() {
  return (
    <div>
      <Dash/>
      {/* <Dashboard/> */}
    </div>
  );
}

export default App;
