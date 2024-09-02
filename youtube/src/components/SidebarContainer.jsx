

function SidebarContainer({icon, text}){
    return(
        <>
            <div  className="flex justify-start items-start gap-x-2 px-3 py-1">
                {icon}
                <span>{ text }</span>
            </div>
        </>
    )
}

export default SidebarContainer