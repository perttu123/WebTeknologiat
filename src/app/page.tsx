
import './globals.css'
import Taulukko from './components/taulukko';
import Kortti from './components/kortti';
import { fetchData } from './apihaku';


async function HomePage(){
  
  const data = await fetchData();

  return (
   <>
    <Kortti importData={data}/>
    <Taulukko importData={data}/>
    </>
  );
};

export default HomePage;

