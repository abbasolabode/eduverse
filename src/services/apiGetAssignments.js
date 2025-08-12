import supabase from "./supabase";

export async function getAssignment() {
	const { data, error } = await supabase.from("uploadAssignments").select("*");

	if (error) {
		throw new Error(error.message);
	}
	return data;
}
