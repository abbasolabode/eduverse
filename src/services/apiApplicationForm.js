/* eslint-disable no-unused-vars */
import supabase, { supabaseUrl } from "./supabase";


export async function getApplicationForm(formData) {

  // 1. Validate file
  // Check if they're proper File objects
  if (!(formData.fileResume instanceof File) || !(formData.fileTranscript instanceof File)) {
    throw new Error("Invalid file object");
  }

 // 2. Generate unique filenames
  const timestamp = Date.now();
  const fileTranscriptName = `${timestamp}-${formData.fileTranscript.name.replace(/\//g, '')}`;
  const fileResumeName = `${timestamp}-${formData.fileResume.name.replace(/\//g, '')}`;


  // 3. Upload files separately with proper configuration
  // Upload Resume
  const { error: resumeUploadError } = await supabase.storage
    .from('applicationformfiles')
    .upload(fileResumeName, formData.fileResume, {
      contentType: formData.fileResume.type, // `contentType`: Sets the MIME type of the file (e.g., 'application/pdf').
    // upsert: false // Prevents overwriting if a file with the same name exists.
    });

  if (resumeUploadError) {
    console.error("Resume upload error:", resumeUploadError);
    throw new Error(`Resume upload failed: ${resumeUploadError.message}`);
  }

  // Upload Transcript
  const { error: transcriptUploadError } = await supabase.storage
    .from('applicationformfiles')
    .upload(fileTranscriptName, formData.fileTranscript, {
      contentType: formData.fileTranscript.type, // `contentType`: Sets the MIME type of the file (e.g., 'application/pdf').
     // upsert: false  // Prevents overwriting if a file with the same name exists.
    });


  if (transcriptUploadError) {
    console.error("Transcript upload error:", transcriptUploadError);
    throw new Error(`Transcript upload failed: ${transcriptUploadError.message}`);
  }

  // 4. Generate public URLs for the uploaded files
  const resumeUrl = `${supabaseUrl}/storage/v1/object/public/applicationformfiles/${fileResumeName}`;
  const transcriptUrl = `${supabaseUrl}/storage/v1/object/public/applicationformfiles/${fileTranscriptName}`;

  // 5. Prepare data for database insertion (excluding the File objects)
  const { fileResume, fileTranscript, ...restFormData } = formData;


  // 6. Save to database
  const { data, error } = await supabase
    .from("applicationForm")
    .insert([{
      ...restFormData,
      resume_url: resumeUrl,
      transcript_url: transcriptUrl
    }])
    //.select();

  if (error) {
    console.error("Database error:", error);
    throw new Error(error.message || "Unable to submit your application successfully");
  }


  return data;
}