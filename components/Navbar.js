import React from "react";
import Image from "next/image";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import { LuShoppingCart } from "react-icons/lu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  // console.log("====================================");
  // console.log(cart, addToCart, removeFromCart, clearCart, subTotal);
  return (
    <div>
      <nav className='bg-white dark:bg-gray-900 fixed  w-full z-50 shadow-xl top-0 left-0  border-b border-gray-200 dark:border-gray-600'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link href={"/"} className='flex items-center'>
            <Image
              src='/logo.png'
              width={50}
              height={100}
              className='h-12 mr-3'
              alt='CodesWear Logo'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              Codeswear
            </span>
          </Link>
          <div className='flex  md:order-2'>
            <Button
              type='Button'
              data-drawer-target='drawer-navigation'
              data-drawer-show='drawer-navigation'
              aria-controls='drawer-navigation'
              // onClick={console.log("hii")}
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              {/* <LuShoppingCart />  */}
              <ShoppingCartIcon /> Cart
            </Button>
            <Button
              data-collapse-toggle='navbar-sticky'
              type='Button'
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-sticky'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </Button>
          </div>
          <div
            className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
            id='navbar-sticky'
          >
            <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <Link
                  href={"/Tshirt"}
                  className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
                  aria-current='page'
                >
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link
                  href={"/Mugs"}
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Mugs
                </Link>
              </li>
              <li>
                <Link
                  href={"/Hoodies"}
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Hoodies
                </Link>
              </li>
              <li>
                <Link
                  href={"/Stickers"}
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Stickers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* sidebar */}

      <div class='text-center'>
        {/* <button
          class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          type='button'
          data-drawer-target='drawer-navigation'
          data-drawer-show='drawer-navigation'
          aria-controls='drawer-navigation'
        >
          Show navigation
        </button> */}
      </div>

      <div
        id='drawer-navigation'
        class='fixed top-20 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800'
        tabindex='-1'
        aria-labelledby='drawer-navigation-label'
      >
        <h5
          id='drawer-navigation-label'
          class='text-base font-semibold text-gray-500 uppercase dark:text-gray-400'
        >
          Shopping Cart
        </h5>
        <button
          type='button'
          data-drawer-hide='drawer-navigation'
          aria-controls='drawer-navigation'
          class='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
        >
          <svg
            aria-hidden='true'
            class='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clip-rule='evenodd'
            ></path>
          </svg>
          <span class='sr-only'>Close menu</span>
        </button>
        <div class='py-4 overflow-y-auto'>
          <ul class='space-y-2 font-medium'>
            {Object.keys(cart).length == 0 && <div>Your cart is Empty! </div>}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <a
                    href='#'
                    class='flex  justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                  >
                    <span class='ml-3'>{cart[k].name}</span>
                    <span class='ml-3'>
                      <RemoveCircleOutlineIcon
                        onClick={() => {
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                      />{" "}
                      {cart[k].qty}{" "}
                      <AddCircleOutlineIcon
                        onClick={() => {
                          addToCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                      />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div>
            <Button className='mt-8 mx-auto  mr-2  ' variant='outlined'>
              <ShoppingBagIcon className='mr-1' />
              Checkout
            </Button>
            <Button
              onClick={clearCart}
              className='mt-8 mx-auto  '
              variant='outlined'
            >
              <ShoppingBagIcon className='mr-1' />
              Clear Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
