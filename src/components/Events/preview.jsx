/* eslint-disable */
import React from "react";

import eyeIcons from "src/assets/icons/eyeIcons.png";
import locationIcon from "src/assets/icons/locationIcon.png";
import durationIcon from "src/assets/icons/durationIcon.png";
import shareIcon from "src/assets/icons/shareIcon.png";
import notIcon from "src/assets/icons/notIcon.png";
import logo from "src/assets/logo.png";
import ImageCarousel_1 from "src/assets/ImageCarousel_1.png";
import ImageCarousel_2 from "src/assets/ImageCarousel_2.png";

function Preview() {
    return (
        <>
            <div className="bg-[#525252] rounded-lg  w-[394px] bg-opacity-40  backdrop-blur-[3.9px]  text-main_black font-bold  text-md overflow-hidden">
                <div className="w-[394px] h-[252px] flex">
                    <img src={ImageCarousel_1} alt="img" />
                    <img src={ImageCarousel_2} alt="img" />
                </div>
                <div className="w-[394px] h-[60px] bg-[#99F5B3] flex px-6 justify-between items-center">
                    <p>12/03/2024</p>
                    <p>12:30 PM</p>
                </div>
                <div className="bg-white font-normal  text-sm p-4 m-4 rounded-xl">
                    <div className="flex gap-4 ">
                        <div className="bg-[#99F5B3] flex py-2 px-4 items-center rounded-full w-[70%] justify-between">
                            <p className="flex items-center justify-center">
                                <img
                                    className="inline-block mr-2 w-6 h-6 border rounded-full"
                                    src={logo}
                                    alt=""
                                />
                                host
                            </p>
                            <p className="flex items-center justify-center">
                                <img
                                    className="inline-block mr-2 h-6"
                                    src={locationIcon}
                                    alt=""
                                />
                                Online
                            </p>
                        </div>
                        <div className="bg-[#99F5B3] flex px-4  items-center  rounded-full w-[30%]">
                            <p className="flex items-center justify-center">
                                <img
                                    className="inline-block mr-2 w-4"
                                    src={durationIcon}
                                    alt=""
                                />
                                1 Hr
                            </p>
                        </div>
                    </div>
                    <div className="my-2">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Rerum, atque necessitatibus vitae at
                            recusandae dolor? Sapiente temporibus nesciunt
                            similique rem eligendi. Provident magnam
                            perspiciatis sit?
                        </p>
                    </div>
                    <div className="font-normal text-sm bg-white drop-shadow-lg inline-block px-4 py-2 rounded-full my-2">
                        <p>
                            <img
                                className=" inline-block mr-2"
                                src={eyeIcons}
                                alt=""
                            />
                            30000{" "}
                        </p>
                    </div>
                    <div className="flex gap-2 ">
                        <p className="bg-[#4ECB71]  text-center font-bold  text-md items-center p-2 rounded-full w-[50%]">
                            <img
                                className=" inline-block mr-2 w-5"
                                src={notIcon}
                                alt=""
                            />
                            Reminder
                        </p>
                        <p className="bg-[#ffff] drop-shadow-lg text-center font-bold  text-md items-center p-2 rounded-full w-[50%]">
                            <img
                                className=" inline-block mr-2 w-6"
                                src={shareIcon}
                                alt=""
                            />
                            Share
                        </p>
                    </div>
                </div>
            </div>
            <div className=" flex items-center justify-center w-full ">
                {/* <div className="absolute bottom-0 w-2 h-20 bg-primary"></div> */}
                <button className="bg-[#525252] rounded-lg text-center py-2 text-w_text  text-lg tracking-[2px] mt-3 w-[70%] bg-opacity-40  backdrop-blur-[3.9px] z-20 border-2 border-zinc-500">
                    {" "}
                    PREVIEW
                </button>
            </div>
        </>
    );
}

export default Preview;
