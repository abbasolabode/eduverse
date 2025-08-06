import { MdLogout } from "react-icons/md";
import { useLogout } from "../hook/useLogout";

export default function LogoutButton() {
    const { logout, isPending } = useLogout();

	return (
		<button
			disabled={isPending}
			onClick={logout}
			className="flex justify-center min-w-full md:min-h-[1.5rem] md:min-w-[5.55766875rem] items-center ring-1 ring-red-400 duration-300 transition-all hover:shadow-2xl shadow-sm rounded-sm md:pl-1 md:pr-1 md:pt-1 md:pb-1 "
		>
			<span className="md:min-w-[1.8125rem] flex items-center md:min-h-[1.375rem] text-red-500">
				<MdLogout />
			</span>
			<p className="text-red-500 font-lato font-medium text-sm">Logout</p>
		</button>
	);
}
