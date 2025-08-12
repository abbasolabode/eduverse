import supabase, { supabaseUrl } from "./supabase";

export async function uploadAssignment(formData){

  // 1. Validate file
  // Check if they're proper File objects
  if (!(formData?.optionalFile instanceof File) ) {
    throw new Error("Invalid file object");
  }

  // 2. Generate unique filenames
  const timestamp = Date.now();
  const fileName = `${timestamp}-${formData.optionalFile.name.replace(/\//g, '')}`;
 
  //3 upload image to bucket storage
  const { error: uploadError } = await supabase.storage
    .from('assignmentimage')
    .upload(fileName, formData.optionalFile, {
      contentType: formData.optionalFile.type,
    });

   //If there's an error while uploading file throw an error
   if( uploadError ) {
     throw new Error(uploadError.message || "There's an error while uploading file")
   }

  const assignmentUrl = `${supabaseUrl}/storage/v1/object/public/assignmentimage/${fileName}`;
   
  const allFormData = {...formData,  optionalFile: assignmentUrl || [] }

  //Send data to the table also with the optionalFile
 const { data, error } = await supabase
  .from('uploadAssignments')
  .insert([allFormData])
  //.select()


  if(error){
    throw new Error(error.message || "There's an error while sending form data")
  }


  return data;

}