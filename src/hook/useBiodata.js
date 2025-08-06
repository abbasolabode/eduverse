import { useQuery } from "@tanstack/react-query";
import { getBiodataForm } from "../services/apiBiodata";

// Custom hook to fetch biodata
// This hook uses react-query to fetch biodata from the server
// It returns the biodata and a loading state
// The useQuery hook is used to fetch data from the server
export function useBiodata(){
    const {data: biodata = [], isLoading} = useQuery({
        queryKey: ['biodataForm'],
        queryFn: getBiodataForm,
    })

    console.log(biodata)
    return {biodata, isLoading};
}




