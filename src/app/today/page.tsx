
import { fetchData } from '../apihaku';
import Taulukko from '../components/taulukko';
import Table from '../components/table';
import moment from 'moment';

export default async function TodayPage() {
  
  //sivulle haetaan data uudelleen apihaku.js filestä.
  const data = await fetchData();

  const today = moment().format('YYYY-MM-DD');

  const filteredData = data.filter(item => {
    const startDate = moment(item.startDate).format('YYYY-MM-DD');
    return startDate === today;
  });
  
    return (<>
        <Taulukko importData={filteredData}/>
        <Table importData={filteredData}/>
      </>
      );
}

 