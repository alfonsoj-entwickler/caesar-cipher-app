import { useContext } from "react";
import { CeaserContext } from "@/context/CeaserProvider";

const useCeaser = () => {
    return useContext( CeaserContext )
}

export default useCeaser;