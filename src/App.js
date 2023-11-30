import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faTasks, faPlus, faCog, faMoneyBill, faChartBar, faPhone, faVideo, faEnvelope, faEllipsisH, faBell,faSearch, faMessage, faMicrophone, faUser} from '@fortawesome/free-solid-svg-icons';
import Dash from './dashboard/dashboard/Dashboard';

library.add(faHome, faTasks, faPlus, faCog, faMoneyBill, faChartBar, faPhone, faVideo, faEnvelope, faEllipsisH, faBell,faSearch, faMessage, faMicrophone, faUser);

function App() {
  return (
    <div>
      <Dash/>
     
    </div>
  );
}

export default App;
