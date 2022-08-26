import React from 'react'
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import "./home.scss";
import data from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
function Home() {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={data} title="Kullanıcı İstatistiği" dataKey="users"/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}

export default Home