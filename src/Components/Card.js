import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ image, text, theme }) => {
	const [toggle, setToggle] = useState(false);

	const toggleModal = () => {
		setToggle((prev) => !prev);
	};

	return (
		<div className="w-full">
			<div
				style={{
					backgroundImage: `url(${image})`,
				}}
				className="rounded-md relative w-full md:h-96 h-48"
				onClick={toggleModal}
			>
				<div className="rounded-md flex justify-center items-center duration-300 absolute w-full h-full text-zero bg-opacity-0 bg-black text-opacity-0 hover:bg-opacity-50 hover:text-2xl">
					<p className="font-mono text-white">{text}</p>
				</div>
				<Modal toggle={toggle} setToggle={setToggle} theme={theme} />
			</div>
		</div>
	);
};

export default Card;