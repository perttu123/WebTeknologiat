
import { fetchData } from '../apihaku';
import Taulukko from '../components/taulukko';
import Table from '../components/table';
import moment from 'moment';


export default async function Tomorrow() {

    //sivulle haetaan data uudelleen apihaku.js filestä.
    const data = await fetchData();
  
    const tomorrow = moment().add(1,'day').format('YYYY-MM-DD');
          
      const filteredData = data.filter(item => {
        const StartDate = moment(item.startDate).format('YYYY-MM-DD'); // Get date from the item
        return StartDate === tomorrow;
      });
  
      return (<>  
        <Taulukko importData={filteredData}/>
        <Table importData={filteredData}/>
        </>
      );
}
