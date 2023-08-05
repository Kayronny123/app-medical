import React from 'react';
import GlobalStyle from '../../Globalstyle/GlobalStyle';
import SearchHeader from '../../components/SearchSchedules/Header/SearchHeader';
import SchedulesHeader from '../../components/Schedules/Header/SchedulesHeader';
import HomeAside from '../../components/Home/Aside/HomeAside'
import HomeMain from '../../components/Home/Main/HomeMain'
import HomeFooter from '../../components/Home/Footer/HomeFooter';
const HomePage = () => {
  return (
    <div>
      <SearchHeader /> 
      <GlobalStyle/>
      <SchedulesHeader/>
      <HomeMain/>
      <HomeAside/>
      <HomeFooter/>
      
    </div>
  );
};

export default HomePage;
