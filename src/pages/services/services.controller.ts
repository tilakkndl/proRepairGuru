import { useState } from "react";

const ServiceController = ()=>{
    const [open, setOpen] = useState(false);

    const onClose = ()=>setOpen(false);
    const onOpen = ()=>setOpen(true);
    return {open, onClose, onOpen}
}


export default  ServiceController