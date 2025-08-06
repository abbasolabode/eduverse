import supabase from "./supabase";

export async function logoutUser(){
    // 1. Sign out the user
    const { error } = await supabase.auth.signOut();

    if (error) {
        throw new Error("Logout failed. Please try again.");
    }

}