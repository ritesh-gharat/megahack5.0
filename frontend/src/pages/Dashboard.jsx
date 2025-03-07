import React from 'react';
import DashNav from '../components/DashboardComponents/DashNav';
import DashMain from '../components/DashboardComponents/DashMain';

export default function Dashboard() {
  return (
    <div className='flex'>
      <div className='w-[20%] bg-green-800 h-screen fixed'>
        <DashNav />
      </div>
      <div className='ml-[20%] w-[80%]'>
        <DashMain />
      </div>
    </div>
  );
}
