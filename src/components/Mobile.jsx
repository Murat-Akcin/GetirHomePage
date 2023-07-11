import React from 'react';

const Mobile = () => {
  return (
    <div>
      <div className="container mx-auto w-[1232px] ">
        <h3 className="flex text-sm font-semibold mb-4 mt-4">Kampanyalar</h3>
        <div className="bg-mobile  bg-menu-color  w-full rounded-lg flex justify-between  text-white items-center">
          <div className="flex flex-col gap-y-4 p-10 ">
            <h3 className="text-2xl font-bold tracking-tight">
              Getir'i indirin!
            </h3>
            <p className="font-semibold mb-8">
              İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
            </p>
            <div className="flex gap-x-2">
              <a href="^#">
                <img
                  src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="">
            <img
              className="pt-24"
              src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
