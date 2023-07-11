import React, { useState } from 'react';
import Slider from 'react-slick';
import ReactFlagsSelect from 'react-flags-select';
import { RiErrorWarningLine } from 'react-icons/ri';

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const [selected, setSelected] = useState('TR');
  const phones = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
    IN: '+14',
  };

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);

  function handleInputChange(e) {
    const value = e.target.value.slice(0, 10);
    setPhoneNumber(value);
    setIsValid(validatePhoneNumber(value));
  }

  function validatePhoneNumber(phoneNumber) {
    const regex = /^\d{0,10}$/;

    return regex.test(phoneNumber) && phoneNumber.length > 9;
  }

  const inputClassName = `h-14 px-4 w-full border-2 border-gray-200 font-extralight text-sm rounded-lg transition-colors  hover:border-gradient-color outline-none focus:border-gradient-color peer pt-2 ${
    !isValid ? 'border-red-500' : 'border-gray-200'
  }`;

  return (
    <div className="relative before:bg-gradient-to-r before:from-gradient-color before:to-transparent before:absolute before:inset-0 before:w-full  before:z-10 before:h-[500px]">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"
            alt=""
          />
        </div>
      </Slider>

      <div className="container flex justify-between absolute top-0 left-1/3 -translate-x-1/3 h-full  z-20 items-center ">
        <div className="flex flex-col items-start mb-3 ml-32">
          <img
            className="h-[180px] mb-10"
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt=""
          />
          <h2 className="text-white font-semibold text-4xl ">
            Dakikalar içinde <br /> kapınızda
          </h2>
        </div>
        <div className="w-[400px] bg-gray-50 rounded-lg  p-6 mr-36 ">
          <h5 className=" text-sm text-gradient-color font-semibold text-center mb-4">
            Giriş yap veya kayıt ol
          </h5>
          <div className="flex gap-x-2 w-full rounded-lg cursor-pointer">
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
              countries={Object.keys(phones)}
              customLabels={phones}
              className="flag"
            />
            <label className="flex-1 relative block ">
              <input
                type=""
                onChange={handleInputChange}
                className={inputClassName}
                maxLength={10}
              />
              {!isValid && (
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500 h-[45px]">
                  <RiErrorWarningLine size={25} />
                </span>
              )}

              <span className="left-0 top-0 absolute h-full px-4 flex items-center transition-all  text-gray-500 peer-focus:h-7  peer-focus:text-gradient-color peer-focus:text-xs  peer-valid:h-14  ">
                Telefon numarası
              </span>
              {!isValid && (
                <span className="text-red-500 text-sm mt-1 ml-2 ">
                  {phoneNumber === ''
                    ? 'Telefon numaranızı giriniz.'
                    : 'Geçerli bir telefon numarası girin.'}
                </span>
              )}
            </label>
          </div>
          <button className="w-full bg-button-color h-12 whitespace-nowrap mt-4 font-semibold text-menu-color p-3 rounded-lg hover:bg-gradient-color hover:text-button-color transition-colors">
            Telefon numarası ile devam et
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
