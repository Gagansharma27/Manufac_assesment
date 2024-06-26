

import { wineData } from './data/data.js';
import { createGamma } from './helper/utilityFunctions.js';

import StatsTable from './components/StatsTable.jsx';
import { useEffect, useState } from 'react';

function App() {
  // stored  data in state variable so that any time it changes it will trigger a re - render.
  const [data, setData] = useState(wineData);


  const fetchData = () => {
    const updatedData = createGamma(data, "Gamma");
    setData(updatedData);
  }

  //only calls createGamma when  component mount.
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      {/* created a stats table component which is responsoble for calculating stats on any property */}
      <StatsTable attribute={"Flavanoids"} data={data} />
      <StatsTable attribute={"Gamma"} data={data} />


    </div>
  );
}

export default App;
