
// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable */
import Preview from 'src/components/Events/preview';
import CreateEventForm from 'src/components/Events/createEvent';
import { useState } from 'react';

const Events = () => {

	const [formData, setFormData] = useState({
		name: "",
		hostName: "",
		description: "",
		startDate: new Date(),
		startTime: new Date(),
		tag: "",
		mode: "",
		slots: "",
		posters: [],
		address: "",
		link: "",

		




	});

	return <>
		<div className="mt-14">
			<h2 className=" text-w_text font-barlow font-regular text-3xl leading-7 tracking-[10px] mt-3 mb-8 ">EVENTS</h2>
			{/* <div></div> // for event navigation (create, active,history) */}
			<div className="flex flex-wrap">
				<div className="w-[50%] "> {/*create form section*/}
					<CreateEventForm formData={formData} setFormData={setFormData} />
				</div>
				<div className="w-[50%] p-5 relative flex flex-col items-center justify-center font-barlow ">{/*preview section*/}
					<Preview formData={formData} />
				</div>
			</div >
		</div>
	</>

};

export default Events;
