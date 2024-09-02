function Card(){
    return(
        <>
            <div className="w-80 h-72  cursor-pointer">
                <div className="w-full bg-gray-500 h-44 rounded-lg hover:rounded-none">

                </div>
                <div className="w-full flex justify-start items-start mt-2 gap-x-2 gap-y-8">
                    <div className="h-10 w-12 bg-zinc-600 rounded-full"></div>
                    <div className="">
                        <div><p>This is the title of the video with little description</p></div>
                        <div>
                            <p>Here the Channel Name</p>
                        </div>
                        <div>
                            <p>255 Views : 4 hours ago</p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}
export default Card