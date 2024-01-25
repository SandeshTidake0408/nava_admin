/* eslint-disable */
import React, { useState } from "react";

export default function CreateEventForm() {
    const [formData, setFormData] = useState({
        name: "",
        hostName: "",
        description: "",
        startDate: "",
        endDate: "",
        tag: "",
        mode: "",
        slots: "",
        posters: null,
        address: "",
        link: "",
    });

    const handleChange = (e) => {
        const { id, value, type, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === "file" ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="text-w_text">
                <div className="flex flex-col items-start gap-1 mt-3">
                    <label htmlFor="name" className="text-w_text text-[16px]">
                        Name :
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="p-1 rounded w-full bg-main_black shadow-inputShadow"
                    />
                </div>
                <div className="flex flex-col items-start gap-1 mt-3">
                    <label
                        htmlFor="hostName"
                        className="text-w_text text-[16px]"
                    >
                        Name Of Host :
                    </label>
                    <input
                        type="text"
                        id="hostName"
                        value={formData.hostName}
                        onChange={handleChange}
                        className="p-1 rounded w-full bg-main_black shadow-inputShadow"
                    />
                </div>
                <div className="flex flex-col items-start gap-1 mt-3">
                    <label
                        htmlFor="description"
                        className="text-w_text text-[16px]"
                    >
                        Description :
                    </label>
                    <textarea
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="p-1 rounded w-full bg-main_black shadow-inputShadow"
                    ></textarea>
                </div>

                <div className="flex item-center justify-between gap-5 w-[100%]">
                    <div className="flex flex-col items-start gap-1 mt-3 w-[33%]">
                        <label
                            htmlFor="start_date"
                            className="text-w_text text-[16px]"
                        >
                            Start Date :{" "}
                        </label>
                        <input
                            type="text"
                            id="start_date"
                            value={formData.startDate}
                            onChange={handleChange}
                            className="p-1 rounded w-[100%] bg-main_black shadow-inputShadow"
                        />
                    </div>

                    <div className="flex flex-col items-start gap-1 mt-3 w-[33%]">
                        <label
                            htmlFor="end_date"
                            className="text-w_text text-[16px] "
                        >
                            End Date :{" "}
                        </label>
                        <input
                            type="text"
                            id="end_date"
                            value={formData.endDate}
                            onChange={handleChange}
                            className="p-1 rounded w-[100%] bg-main_black shadow-inputShadow"
                        />
                    </div>

                    <div className="flex flex-col items-start gap-1 mt-3 w-[33%]">
                        <label
                            htmlFor="tag"
                            className="text-w_text text-[16px] "
                        >
                            {" "}
                            Tag :{" "}
                        </label>
                        <select
                            id="tag"
                            value={formData.tag}
                            onChange={handleChange}
                            className="p-1 rounded w-[100%] text-f_text bg-main_black shadow-inputShadow"
                        >
                            <option
                                value=""
                                className="bg-main_black text-white"
                            ></option>
                            <option
                                value="Chemical"
                                className="bg-main_black text-f_text"
                            >
                                Chemical
                            </option>
                            <option
                                value="Organic"
                                className="bg-main_black text-f_text"
                            >
                                Organic
                            </option>
                        </select>
                    </div>
                </div>

                <div className="flex item-center justify-between gap-5 w-[100%]">
                    
                    <div className="flex flex-col items-start gap-1 mt-3 w-[33%]">
                        <label
                            htmlFor="mode"
                            className="text-w_text text-[16px] "
                        >
                            {" "}
                            Event Channel :{" "}
                        </label>
                        <select
                            id="mode"
                            value={formData.mode}
                            onChange={handleChange}
                            className="p-1 rounded w-[100%] text-f_text bg-main_black shadow-inputShadow"
                        >
                            <option
                                value=""
                                className="bg-main_black text-white"
                            ></option>
                            <option
                                value="Online"
                                className="bg-main_black text-f_text "
                            >
                                Online
                            </option>
                            <option
                                value="Offline"
                                className="bg-main_black text-f_text"
                            >
                                Offline
                            </option>
                        </select>
                    </div>

                  
                    <div className="flex flex-col items-start gap-1 mt-3 w-[33%]">
                        <label
                            htmlFor="slots"
                            className="text-w_text text-[16px]"
                        >
                            Available Slots :{" "}
                        </label>
                        <input
                            type="text"
                            id="slots"
                            value={formData.slots}
                            onChange={handleChange}
                            className="p-1 rounded w-[100%] bg-main_black shadow-inputShadow"
                        />
                    </div>

                    {/* Field 6 */}
                    <div className="flex flex-col items-start gap-1 mt-3 w-[33%]">
                        <label
                            htmlFor="posters"
                            className="text-w_text text-[16px] "
                        >
                            Event Posters :{" "}
                        </label>
                        <input
                            type="file"
                            id="posters"
                            onChange={handleChange}
                            className="p-1 rounded w-[100%] text-w_text text-[12px] bg-main_black shadow-inputShadow file file:text-sm file:bg-main_black file:text-w_text file:hidden placeholder: text-transparent"
                        />
                    </div>
                </div>


                <div className="flex flex-col items-start gap-1 mt-3">
                    <label
                        htmlFor="address"
                        className="text-w_text text-[16px]"
                    >
                        Address :{" "}
                    </label>
                    <input
                        type="text"
                        id="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="p-1 rounded w-full bg-main_black shadow-inputShadow"
                    />
                </div>

                <div className="flex flex-col items-start gap-1 mt-3">
                    <label htmlFor="link" className="text-w_text text-[16px]">
                        Link :{" "}
                    </label>
                    <input
                        type="text"
                        id="link"
                        value={formData.link}
                        onChange={handleChange}
                        className="p-1 rounded w-full bg-main_black shadow-inputShadow"
                    />
                </div>

                <button className="bg-primary text-w_text text-lg w-full py-2 mt-3 rounded border-2 border-solid border-green-300 opacity-90 backdrop-blur-sm tracking-[2px]">
                    CREATE EVENT
                </button>
            </form>
        </div>
    );
}
