import img1 from '/src/assets/images/products/s4.jpg';
import img2 from '/src/assets/images/products/s5.jpg';
import img3 from '/src/assets/images/products/s7.jpg';
import img4 from '/src/assets/images/products/s11.jpg';
import { Button } from 'src/components/ui/button';
import { Link } from 'react-router';
import CardBox from '../shared/CardBox';
import { IconBasket, IconStar } from '@tabler/icons-react';

const ecoCard = [
  {
    title: 'Boat Headphone',
    subheader: 'September 14, 2023',
    photo: img1,
    salesPrice: 375,
    price: 285,
    rating: 4,
  },
  {
    title: 'MacBook Air Pro',
    subheader: 'September 14, 2023',
    photo: img2,
    salesPrice: 650,
    price: 900,
    rating: 5,
  },
  {
    title: 'Red Valvet Dress',
    subheader: 'September 14, 2023',
    photo: img3,
    salesPrice: 150,
    price: 200,
    rating: 3,
  },
  {
    title: 'Cute Soft Teddybear',
    subheader: 'September 14, 2023',
    photo: img4,
    salesPrice: 285,
    price: 345,
    rating: 2,
  },
];

const ProductCards = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {ecoCard.map((item, i) => (
          <div className="lg:col-span-3 md:col-span-6 col-span-12" key={i}>
            <CardBox className="p-0 overflow-hidden group card-hover">
              <div className="relative">
                <Link to="#">
                  <div className="overflow-hidden h-[280px] w-full">
                    <img
                      src={item.photo}
                      alt="Spike"
                      height={280}
                      width={500}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </Link>
                <div className="p-6 pt-4">
                  <div className="flex justify-between items-center -mt-8 ">
                    <div className="ms-auto relative z-10">
                      <Button
                        className="bg-primary hover:bg-primary/90 text-white rounded-full w-9 h-9 p-0 flex items-center justify-center shadow-lg"
                      >
                        <IconBasket size={18} />
                      </Button>
                    </div>
                  </div>
                  <h6 className="text-base line-clamp-1 group-hover:text-primary transition-colors mt-2">{item.title}</h6>
                  <div className="flex justify-between items-center mt-1">
                    <h5 className="text-base flex gap-2 items-center text-dark dark:text-white font-semibold">
                      ${item.price}{' '}
                      <span className="font-normal text-sm text-dark/50 dark:text-white/40 line-through">
                        ${item.salesPrice}
                      </span>
                    </h5>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, index) => (
                        <IconStar
                          key={index}
                          size={14}
                          className={index < item.rating ? "fill-warning text-warning" : "text-gray-300 dark:text-white/20"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardBox>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCards;
