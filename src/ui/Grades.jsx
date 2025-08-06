export default function Grades(){
   
    return (
			<div className="min-w-full md:min-w-[44.875rem] flex flex-col bg-indigo-100 items-center justify-center pl-6 pr-6 pt-8 pb-8 mt-5">
				<div className="md:min-w-[41.875rem] rounded-lg shadow-lg  bg-white">
					<div className=" md:min-w-[41.875rem] md:min-h-[6.125rem] md:pl-6 md:pr-6 md:pt-6 md:pb-6 flex justify-between items-center p-4">
						<span className="flex flex-col gap-2">
							<h3 className="text-[1.5rem] text-[#020817] md:min-h-[1.4rem] font-lato font-semibold">
								Advanced Mathematics
							</h3>
							<p className="text-[#64748B] text-[0.875rem] font-lato font-semibold">
								MATH301
							</p>
						</span>

						<p className="rounded-full border font-lato min-h-[1.5rem] w-[1.5rem] text-center font-bold bg-indigo-500 text-white ">A</p>
					</div>

					<div  className="flex justify-between items-center text-white font-medium bg-indigo-400 p-4 border-t ">
						<div className="flex flex-col gap-2 font-lato">
							<p>Midterm:</p>
							<p>85%</p>
						</div>

						<div>
							<p>Assignments:</p>
							<p>92%</p>
						</div>

						<div>
							<p>Final:</p>
							<p>88%</p>
						</div>

						<div>
							<p>Overall:</p>
							<p>A-</p>
						</div>
					</div>
				</div>
			</div>
		);
}