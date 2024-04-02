import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app_wrapper_img-reverse'>
      <img src={images.chef} alt="Chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title={"Chef's Word"} />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
           <img src={images.quote} alt="quote" />
           <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta nisi iusto similique rerum quidem harum doloribus ab nobis veritatis rem iure ipsum, molestias cumque quod autem voluptatum mollitia repellendus aut?</p>
        </div>
        <div className='app__chef-sign'>
          <p className='headtext__cormorant'>James Smith</p>
          <p className='p__opensans'>Chef and CEO</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
