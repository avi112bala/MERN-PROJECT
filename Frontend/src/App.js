import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './component/Home';
import Book from './component/Book';
import Services from './component/Services';
import Gallery from './component/Gallery';
import Review from './component/Review';
import Contact from './component/Contact';
import Signin from './component/Signin';
import { Package } from './component/Package';
import Uttarpradesh from './component/States/Uttarpradesh';
import { Punjab } from './component/States/Punjab';
import Kerala from './component/States/Kerala';
import Himachal from './component/States/Himachal';
import Tamilnadu from './component/States/Tamilnadu';
import Karanataka from './component/States/Karanataka';
import Agra from './component/Cities/Uttarpradesh/Agra';
import Lucknow from './component/Cities/Uttarpradesh/Lucknow'
import Varanasi from './component/Cities/Uttarpradesh/Varanasi';
import Allahabad from './component/Cities/Uttarpradesh/Allahabad'
import Kanpur from './component/Cities/Uttarpradesh/Kanpur';
import Vrindavan from './component/Cities/Uttarpradesh/Vrindavan';
import Amritsar from './component/Cities/Punjab/Amritsar';
import Bhatinada from './component/Cities/Punjab/Bhatinada';
import Chandigarh from './component/Cities/Punjab/Chandigarh';
import Jalandhar from './component/Cities/Punjab/Jalandhar';
import Ludhiana from './component/Cities/Punjab/Ludhiana';
import Patiala from './component/Cities/Punjab/Patiala';
import Allepy from './component/Cities/Kerla/Allepy'
import Waynad from './component/Cities/Kerla/Waynad';
import Trivendrum from './component/Cities/Kerla/Trivendrum';
import Poover from './component/Cities/Kerla/Poover';
import Vagamon from './component/Cities/Kerla/Vagamon';
import Kozikodh from './component/Cities/Kerla/Kozikodh';
import Kasol from './component/Cities/Himachal Pradesh/Kasol';
import Shimla from './component/Cities/Himachal Pradesh/Shimla';
import Kasauli from './component/Cities/Himachal Pradesh/Kasauli';
import Spitivally from './component/Cities/Himachal Pradesh/Spitivally';
import Manali from './component/Cities/Himachal Pradesh/Manali';
import Dalhousi from './component/Cities/Himachal Pradesh/Dalhousi';
import Ramewashwaram from './component/Cities/TamilNadu/Ramewashwaram';
import Chennai from './component/Cities/TamilNadu/Chennai';
import Kanyakumari from './component/Cities/TamilNadu/Kanyakumari';
import Madhurai from './component/Cities/TamilNadu/Madhurai';
import Kodaikanal from './component/Cities/TamilNadu/Kodaikanal';
import Ooty from './component/Cities/TamilNadu/Ooty';
import Mysore from './component/Cities/Karnataka/Mysore';
import Badami from './component/Cities/Karnataka/Badami';
import Coorge from './component/Cities/Karnataka/Coorge';
import Kabini from './component/Cities/Karnataka/Kabini';
import Manglor from './component/Cities/Karnataka/Manglor';
import Banglor from './component/Cities/Karnataka/Banglor';
import Signup from './component/Signup';
import Logout from './component/Logout';
import PrivateComponent from './component/PrivateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route index element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/book" element={<Book />}></Route>
            <Route path="/package" element={<Package />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/review" element={<Review />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/uttarpradesh" element={<Uttarpradesh />}></Route>
            <Route path="/punjab" element={<Punjab />}></Route>
            <Route path="/kerala" element={<Kerala />}></Route>
            <Route path="/himachal" element={<Himachal />}></Route>
            <Route path="/tamilnadu" element={<Tamilnadu />}></Route>
            <Route path="/karnataka" element={<Karanataka />}></Route>
            <Route path="/Agra" element={<Agra />}></Route>
            <Route path="/lucknow" element={<Lucknow />}></Route>
            <Route path="/varanasi" element={<Varanasi />}></Route>
            <Route path="/allahabad" element={<Allahabad />}></Route>
            <Route path="/Kanpur" element={<Kanpur />}></Route>
            <Route path="vrindavan" element={<Vrindavan />}></Route>
            <Route path="amritsar" element={<Amritsar />}></Route>
            <Route path="bhatinda" element={<Bhatinada />}></Route>
            <Route path="chandighar" element={<Chandigarh />}></Route>
            <Route path="jalandhar" element={<Jalandhar />}></Route>
            <Route path="ludhiana" element={<Ludhiana />}></Route>
            <Route path="Patiala" element={<Patiala />}></Route>
            <Route path="/allepy" element={<Allepy />}></Route>
            <Route path="/waynad" element={<Waynad />}></Route>
            <Route path="/trivendrum" element={<Trivendrum />}></Route>
            <Route path="/poover" element={<Poover />}></Route>
            <Route path="/vagamon" element={<Vagamon />}></Route>
            <Route path="/kozikodh" element={<Kozikodh />}></Route>
            <Route path="/kasol" element={<Kasol />}></Route>
            <Route path="/shimla" element={<Shimla />}></Route>
            <Route path="/kasauli" element={<Kasauli />}></Route>
            <Route path="/spitivally" element={<Spitivally />}></Route>
            <Route path="/manali" element={<Manali />}></Route>
            <Route path="/dalhousi" element={<Dalhousi />}></Route>
            <Route path="/rameshwaram" element={<Ramewashwaram />}></Route>
            <Route path="/chennai" element={<Chennai />}></Route>
            <Route path="/kanyakumari" element={<Kanyakumari />}></Route>
            <Route path="/madhurai" element={<Madhurai />}></Route>
            <Route path="/kodaikanal" element={<Kodaikanal />}></Route>
            <Route path="/ooty" element={<Ooty />}></Route>
            <Route path="/mysore" element={<Mysore />}></Route>
            <Route path="/badami" element={<Badami />}></Route>
            <Route path="/coorge" element={<Coorge />}></Route>
            <Route path="/kabini" element={<Kabini />}></Route>
            <Route path="/manglor" element={<Manglor />}></Route>
            <Route path="/banglor" element={<Banglor />}></Route>
          </Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
