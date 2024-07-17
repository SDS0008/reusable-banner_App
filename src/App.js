
import './App.css';

import ReusableBanner from './components/ReusableBanner'


const bannerCardList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of you hand',
    className: 'card-1',
  },
  {
    id: 2,
    headerText: 'The Seasons Strated',
    description: 'Get the seasons all latest designs in a flick of you hand',
    className: 'card-2',
  },
  {
    id: 3,
    headerText: 'The Seasons Over',
    description: 'Get the seasons all latest designs in a flick of you hand',
    className: 'card-3',
  },

]



const App = () => {
  return (
    <div className="cards-bg-con">
      <ul>{ bannerCardList.map(eachObj => (
        <ReusableBanner sourceItem={ eachObj } key={ eachObj.id } />
      )) }

      </ul>


    </div>
  );
}

export default App;
