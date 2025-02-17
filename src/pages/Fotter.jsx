import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
const sections = [
  {
    title: 'Solution',
    items: ['Marketing', 'Analytics', 'Commerce', 'Data', 'Cloud'],
  },
  {
    title: 'Support',
    items: ['Pricing', 'Documentation', 'Guides', 'API', 'Status'],
  },
  {
    title: 'Company',
    items: ['About', 'Blog', 'Jobs', 'Parthners'],
  },
  {
    title: 'Legal',
    items: ['Claims', 'Privacy', 'Terms', 'Policies', 'Condition'],
  },
];

const items = [
  {
    name: 'Facebook',
    icon: FaFacebook,
    link: 'https://www.facebook.com/',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    link: 'https://x.com/home',
  },
  {
    name: 'Youtube',
    icon: FaYoutube,
    link: 'https://facebook.com',
  },
  {
    name: 'Linkdin',
    icon: FaLinkedin,
    link: 'https://.com',
  },
];
const Footer = () => {
  return (
    <>
      <div className="w-full mt-24 bg-slate-900 text-white py-y px-2">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 text-center sm:text-left md:text-left lg:text-left xl:text-left 2xl:text-left border-b-2 border-gray-600 py-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h6>{section.title}</h6>
              <ul>
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="py-1 cursor-pointer text-gray-400 hover:text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 pt-8 md:pt-2">
            <p className="font-bold uppercase">Subscribe to our newsletter</p>
            <p>The latest updates, articles and resources sent to your inbox</p>
            <form action="" className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full text-black rounded-md mr-4 mb-4 p-2"
              />
              <button className=" mb-4 mr-4 pr-2 border rounded-md pl-2 hover:bg-stone-800 transition duration-300">Subcribe</button>
            </form>
          </div>
        </div>
        <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
          <p>2024 Bryt Tech Tips LLC ALL right reserved.</p>
          <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">

            {items.map((x, index) => {
              return (
                <x.icon key={index} className="hover:text-white cursor-pointer" />
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
