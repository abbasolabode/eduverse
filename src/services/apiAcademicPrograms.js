import supabase from "./supabase";

export async function getAcademicPrograms() {
    //Reading data from the supabase query
	const { data, error } = await supabase.from("academicPrograms").select("*");

	//If there's an error while getting data, throw an error
	if (error) {
		console.error(error.message);
		throw new Error("There's an error while fetching data from the server");
	}

	//Return data if the fetching was successful
	return data;
}
