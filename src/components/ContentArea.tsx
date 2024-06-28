import { useEffect } from "react";
import { useStore } from "../hooks/useStore";

const ContentArea = () => {
    const store = useStore((state: any) => state);

    useEffect(() => {
        console.log("store ", store.fileContent);
    }, [store.fileContent]);

    const handleInput = (event: any) => {
        store.updateFileContent(event.target.innerHTML);
    }
    
    return (
        <div 
        id="contentArea" 
        className="basis-3/4 p-3 bg-slate-100" 
        contentEditable={true}
        >
            {store.fileContent}
        </div>
    )
}
export default ContentArea;