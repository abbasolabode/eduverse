import supabase, { supabaseUrl } from "./supabase";

// Function to fetch the biodata form
export async function getBiodataForm() {
	const { data, error } = await supabase.from("biodataForm").select("*");

	if (error) {
		console.error("Error fetching biodata:", error);
		throw new Error(error?.message || "Failed to fetch biodata");
	}

	return data;
}



//// Function to update the biodata form
export async function updateBiodataForm(biodataForm) {
  // 1. Validate file
  if (!(biodataForm.photo instanceof File)) {
    throw new Error("Invalid file object");
  }

  // 2. Generate filename
  const imageName = `${Date.now()}-${biodataForm.photo.name.replace(/\//g, '')}`;

  // 3. Upload with error handling
  const { error: uploadError } = await supabase.storage
    .from('biodataformphoto')
    .upload(imageName, biodataForm.photo, {
      contentType: biodataForm.photo.type,
    });

  if (uploadError) {
    console.error("Storage error:", uploadError);
    throw new Error(`Upload failed: ${uploadError.message}`);
  }

  // 4. Save to database
  const imageUrl = `${supabaseUrl}/storage/v1/object/public/biodataformphoto/${imageName}`;
  const { data, error } = await supabase
    .from('biodataForm')
    .insert([{ ...biodataForm, photo: imageUrl }]);

  if (error) throw error;
  return data;
}


