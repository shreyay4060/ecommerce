import React from 'react';
import category from './data';
import { useNavigate } from 'react-router';

export default function Category() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll hide-scroll-bar">
                    {/* main 2 */}
                    <div className="flex space-x-4 px-2">
                        {/* category */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-col items-center">
                                    {/* Image box */}
                                    <div
                                        onClick={() => navigate(`/categoryPage/${item.name}`)}
                                        className="w-24 h-24 lg:w-28 lg:h-28 bg-gray-100 border border-gray-400 rounded-lg flex items-center justify-center shadow-md hover:bg-pink-100 transition-all cursor-pointer"
                                    >
                                        <img
                                            src={item.image}
                                            alt="img"
                                            className="w-22 h-22 object-contain"
                                        />
                                    </div>

                                    {/* Name Text */}
                                    <h1 className="text-sm lg:text-base text-center font-medium title-font first-letter:uppercase mt-2">
                                        {item.name}
                                    </h1>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* style */}
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        '.hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}',
                }}
            />
        </div>
    );
}
