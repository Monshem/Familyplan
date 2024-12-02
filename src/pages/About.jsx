import React from 'react';
import aboutImg from '../image/evelyn-paris-XJnP4L958ds-unsplash.jpg';
import Footer from './Fotter';
const About = () => {
  return (
    <div>
      <div className="flex pt-10 flex-col items-center justify-center container text-center max-auto md:px-20 lg:px-32 pb-12  bg-slate-200 w-full overflow-hidden">
        <h1 className="text-2xl sm:text-4xl font-bold">
          About{' '}
          <span className="underline underline-offset-4 decoration-1 under font-light">
            Our Family
          </span>
        </h1>
        <p className="text-gray-500 max-w-96 text-center mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rem!
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
          <div className="">
            <img src={aboutImg} alt="" />
          </div>
          <div className=" text-center sm:text-left ">
            <h1>Hello world</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              illo ducimus, odio ab recusandae labore optio nam obcaecati quis
              assumenda repellendus, magnam necessitatibus cumque! Reiciendis
              ratione corporis voluptatum perspiciatis nesciunt.
            </p>
            <ul>
              <li>Ducimus voluptatum</li>
              <li>Adio ducimus</li>
              <li>Ametsit assumenda</li>
              <li>Consetetur recusandae</li>
            </ul>
              <a href="#" className="underline underline-offset-5">
                Home service
              </a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
