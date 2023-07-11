import React from 'react';

const Footer = () => {
  const menus = [
    {
      title: "Getir'i keşfedin",
      items: [
        { title: 'Hakkımızda' },
        { title: 'Kariyer' },
        { title: 'Teknoloji Kariyerleri' },
        { title: 'İletişim' },
        { title: 'Sosyal Sorumluluk Projeleri' },
      ],
    },
    {
      title: 'Yardıma mı İhtiyacınız var?',
      items: [
        { title: 'Sıkça Sorulan Sorular' },
        { title: 'Kişisel Verilerin Korunması' },
        { title: 'Gizlilik Politikası' },
        { title: 'Kullanım Koşulları' },
        { title: 'Çerez Politikası' },
      ],
    },
    {
      title: 'İş Ortağımız Olun',
      items: [
        { item: 'Bayimiz Olun' },
        { item: 'Deponuzu Kiralayın' },
        { item: 'GetirYemek Restoranı Olun' },
        { item: 'GetirÇarşı İşletmesi Olun' },
        { item: 'Zincir Restoranlar' },
      ],
    },
  ];
  return (
    <div className=" bg-white">
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-4 pt-10">
          <section>
            <div className="grid box-border gap-y-4 ">
              <h6 className="text-lg text-menu-color ">Getir'i indirin!</h6>
              <a href="#">
                <img
                  src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                  alt=""
                />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
