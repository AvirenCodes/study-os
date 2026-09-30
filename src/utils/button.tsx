type ID={
    targetId:string
}
export function BtnHideItem({targetId}:ID) {
    const handleClick=()=>{
        const el=document.getElementById(targetId)
    
        if(el)el.classList.toggle('hidden')

    }
    return(
       <button onClick={handleClick} className="btn-shadow">hide Text</button>
    )
}


