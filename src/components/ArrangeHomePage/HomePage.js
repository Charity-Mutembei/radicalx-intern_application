// import SideBar from './components/SideBar/SideBar';
import SideBar from '../SideBar/SideBar'
// import Internship from './components/Internship/Internship';
import Internship from '../Internship/Internship';
// import InternshipTable from './components/InternshipTable/InternshipTable';
import InternshipTable from '../InternshipTable/InternshipTable';
// import MainTitle from './components/MainTitle/MainTitle';
import MainTitle from '../MainTitle/MainTitle';
import React from 'react';
import './HomePage.css';

const HomePage = props => (
         <div className='body_container'>
        <div className='side_bar'>
        <SideBar/>
        </div>
        <div className='top_bar'>
          <div className='top_bar_section'>
            <MainTitle/>
          </div>
          <div className='internship_insight_section'>
            <Internship/>
          </div>
          <div className='learning_board'>
            <InternshipTable/>
          </div>
        </div>
      </div>
);


export default HomePage;