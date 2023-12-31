import { useRouter } from "next/router";
import Image from "next/image";
import { Button, Input } from "@mui/material";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
const top100Films = [
  // { label: "Monty Python and the Holy Grail", year: 1975 },
  { label: 234400 },
  { label: 721302 },
  { label: 110003 },
  { label: 560017 },
];

export default function Page({ addToCart }) {
  const router = useRouter();
  const { slug } = router.query;
  const [pin, setPin] = useState();
  const [service, setService] = useState();

  const checkServiceablity = async () => {
    let pins = await fetch("http://localhost:3000/api/pincode");
    let pinJson = await pins.json();
    // console.log(pinJson, pin);
    if (pinJson.includes(parseInt(pin))) {
      setService(true);
    } else {
      setService(false);
    }
  };
  const onChangePin = (e) => {
    setPin(e.target.value);
  };

  return (
    <>
      <section class='text-gray-600 body-font my-36 overflow-hidden'>
        <div class='container px-5 py-12 mx-auto'>
          <div class='lg:w-4/5 mx-auto flex flex-wrap'>
            <Image
              alt='ecommerce'
              class='lg:w-1/2 w-full lg:h-auto  object-contain object-center rounded'
              src='/s-1.jpg'
              width={564}
              height={741}
            />
            <div class='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 class='text-sm title-font text-gray-500 tracking-widest'>
                CODESWEAR
              </h2>
              <h1 class='text-gray-900 text-3xl title-font font-medium mb-1'>
                The Catcher in the Rye
              </h1>
              <div class='flex mb-4'>
                <span class='flex items-center'>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-4 h-4 text-indigo-500'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-4 h-4 text-indigo-500'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-4 h-4 text-indigo-500'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-4 h-4 text-indigo-500'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-4 h-4 text-indigo-500'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <span class='text-gray-600 ml-3'>4 Reviews</span>
                </span>
                <span class='flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s'>
                  <a class='text-gray-500'>
                    <svg
                      fill='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      class='w-5 h-5'
                      viewBox='0 0 24 24'
                    >
                      <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                    </svg>
                  </a>
                  <a class='text-gray-500'>
                    <svg
                      fill='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      class='w-5 h-5'
                      viewBox='0 0 24 24'
                    >
                      <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                    </svg>
                  </a>
                  <a class='text-gray-500'>
                    <svg
                      fill='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      class='w-5 h-5'
                      viewBox='0 0 24 24'
                    >
                      <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p class='leading-relaxed'>
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div class='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'>
                <div class='flex'>
                  <span class='mr-3'>Color</span>
                  <button class='border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none'></button>
                  <button class='border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none'></button>
                  <button class='border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none'></button>
                </div>
                <div class='flex ml-6 items-center'>
                  <span class='mr-3'>Size</span>
                  <div class='relative'>
                    <select class='rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10'>
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span class='absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        class='w-4 h-4'
                        viewBox='0 0 24 24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div class='flex'>
                <span class='title-font font-medium text-2xl text-gray-900'>
                  ₹ 499
                </span>
                <button class='flex ml-14  text-white bg-indigo-500 border-0 py-2 px-6 md:px-6 focus:outline-none hover:bg-indigo-600 rounded'>
                  Buy Now
                </button>
                <button
                  onClick={() => {
                    addToCart(
                      slug,
                      1,
                      499,
                      "Wear the code(XL/red)",
                      "XL",
                      "Red"
                    );
                  }}
                  class='flex ml-14 text-white bg-indigo-500 border-0 py-2 px-6 md:px-6 focus:outline-none hover:bg-indigo-600 rounded'
                >
                  Add to Cart
                </button>
                <button class='rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'>
                  <svg
                    fill='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'></path>
                  </svg>
                </button>
              </div>
              <div className='flex  my-14 flex-wrap '>
                <div className='mr-14 my-4'>
                  {/* <Autocomplete
                    // onChange={onChangePin}
                    disablePortal
                    id='combo-box-demo'
                    options={top100Films}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        type='input'
                        onChange={onChangePin}
                        {...params}
                        label='Pincode'
                      />
                    )}
                  /> */}
                  <TextField
                    type='input'
                    onChange={onChangePin}
                    id='outlined-basic'
                    label='pincode'
                    variant='outlined'
                  />
                </div>
                <Button
                  type='Button'
                  onClick={checkServiceablity}
                  variant='contained'
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 my-4 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Check
                </Button>
              </div>
              {!service && service != null && (
                <div
                  class='flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800'
                  role='alert'
                >
                  <svg
                    class='flex-shrink-0 inline w-4 h-4 mr-3'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
                  </svg>
                  <span class='sr-only'>Info</span>
                  <div>
                    <span class='font-medium'>Sorry!! </span> We do not deliver
                    to this pincode yet
                  </div>
                </div>
              )}
              {service && service != null && (
                <div
                  class='flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800'
                  role='alert'
                >
                  <svg
                    class='flex-shrink-0 inline w-4 h-4 mr-3'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
                  </svg>
                  <span class='sr-only'>Info</span>
                  <div>
                    <span class='font-medium'>Yah! </span> This pincode is
                    serviceable
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
