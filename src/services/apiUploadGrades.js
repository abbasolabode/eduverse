import supabase from "./supabase";

export async function getUploadGrades(formData) {
	if (!formData) return;
	const { data, error } = await supabase
		.from("uploadGrades")
		.insert([formData])
		.select();

	if (error) {
		console.error(error.message);
		throw new Error(error.message || "There's an error while uploading grades");
	}

	return data;
}
