// src/components/BonusCard.js
'use client'

import React, { useState, useEffect } from 'react';
import Confetti from 'react-dom-confetti';
import config from '@/utils/confetti'; // Adjust the path if necessary

const BonusCard = ({ onClose }) => {
    const [isExploding, setIsExploding] = useState(false);

    useEffect(() => {
        // Show confetti and bonus card after 0.5 seconds
        const timer = setTimeout(() => {
            setIsExploding(true);
        }, 500);

        // Cleanup timer
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="absolute inset-0 backdrop-blur-sm" aria-hidden="true"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-3xl text-gray-500 hover:text-gray-700"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                    <div className="relative">
                        <h2 className="text-2xl font-bold text-center mb-4 text-[#2a2f5b]">
                            🎁 Mega Money Multiplier Bonanza! 🎁
                        </h2>
                        <Confetti active={isExploding} config={config} />
                      
                        <p className="text-md text-gray-800 mb-4">
                            <span className="font-semibold text-[#2a2f5b]">Dearest customer, deposit funds into your Ajosdata account</span> and
                            watch your money grow! <br/><br/>Leave your funds in your account for just{' '}
                            <span className="font-bold text-red-500">3 days</span> and get{' '}
                            <span className="font-bold text-red-500">2x</span> the amount you deposited. The longer you leave it,
                            the more you earn!
                        </p>
                        <p className="text-md mb-4 text-gray-800">
                            <span className="font-medium">But <span className="font-bold text-red-500">login now</span> to check whether you were among the lucky few to be gifted funds</span>
                        </p>
                        <p className="text-lg font-semibold text-center text-gray-900">
                            <span className="font-bold text-yellow-500">This exclusive offer is available for the next 30 days.</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BonusCard;
