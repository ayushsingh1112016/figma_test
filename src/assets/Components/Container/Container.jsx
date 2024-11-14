import React from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';
import LogisticsInfo from '../LogisticsInfo/LogisticsInfo';
import Grid from '../Grid/Grid';
import TransporterBanner from '../TransporterBanner/TransporterBanner';
import Testimonials from '../Testimonials/Testimonials';


const Container = () => {
  return (
    <div className="max-w-full max-h-full min-h-screen min-w-full p-0 m-0">     
      
      <div className='flex justify-around px-10 my-5'>
      <LogisticsInfo/>
      <RegisterForm/>
      </div>
      <Grid/>
      <TransporterBanner/>
      <Testimonials/>
    </div>
  );
};

export default Container;
