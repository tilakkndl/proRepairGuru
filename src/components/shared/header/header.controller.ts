import { useState } from "react";

const HeaderController = ()=>{
    const [open, setOpen] = useState(false);

    const onClose = ()=>setOpen(false);
    const onOpen = ()=>setOpen(true);
    return {open, onClose, onOpen}
}


export default  HeaderController