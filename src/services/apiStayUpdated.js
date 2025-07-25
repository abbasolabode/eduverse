import supabase from "./supabase";

export async function getStayUpdated(email) {
	const { data, error } = await supabase
		.from("stayUpdated")//Querying the stayUpdated table in supabse
		.insert([email]) //inserting the data object 
		//.select();

	//If there's an error while getting data, throw an error
	if (error) {
		console.error(error.message);
		throw new Error("There's an error while fetching data from the server");
	}
   
    //The returned data
	return data;
}
