import { useState } from "react";
import { MdOutlineFilterList } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import Input from "./Input";
import { AnimatePresence, motion } from "framer-motion";

export default function Filter() {
	const [toggle, setToggle] = useState(false);
	return (
		<div className='mb-10'>
			<div className='flex justify-end'>
				<button
					onClick={() => setToggle(!toggle)}
					className='btn-secondary'
				>
					<MdOutlineFilterList size={18} />
					<span>Filters</span>
				</button>
			</div>
			<AnimatePresence>
				{toggle && (
					<motion.form
						layout
						initial={{ opacity: 0, y: -30, height: 0 }}
						animate={{ opacity: 1, y: 0, height: "auto" }}
						exit={{ opacity: 0, y: -30, height: 0 }}
						transition={{ duration: 0.1, ease: "easeInOut" }}
						onSubmit={(e) => {
							e.preventDefault();
						}}
						className='flexible-center flex-wrap gap-x-6'
					>
						<Input
							name='tags'
							type='text'
							Icon={FiSearch}
							label='Tags'
							width='w-72'
						/>
						<Input
							name='date'
							type='date'
							Icon={BsCalendarDate}
							label='Date'
							width='w-72'
							options={{
								min: new Date().toISOString().split("T")[0],
							}}
						/>
						<Input
							name='location'
							type='text'
							Icon={HiLocationMarker}
							label='Location'
							width='w-72'
						/>
					</motion.form>
				)}
			</AnimatePresence>
		</div>
	);
}
