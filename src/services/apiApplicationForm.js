import supabase from "./supabase";

export async function getApplicationForm(applicationFormData) {
	const { data, error } = await supabase
		.from("applicationForm")
		.insert([applicationFormData]);
	//.select();

	//If there's an error while getting data, throw an error
	if (error) {
		console.error(error.message);
		throw new Error("Unable to submit your application successfully");
	}

		console.log(data)
	//The returned data
	return data;
}
