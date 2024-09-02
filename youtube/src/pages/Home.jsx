import Card from "../components/Card"
import Sidebar from "../components/common/Sidebar"

function Home(){
    const chips = ['All', 'Cricket', 'News', 'AI', 'JavaScript', 'Python', 'Football' , 'Cloud Computing', 'Java', 'Action Thrillers', 'Comedy', 'Tourist Destinations', 'Sports', 'Songs', 'Film Criticisms']

    const cards = [1,2,3,4,5,6,7,8,9,10,12,13,14,16,17,18,19,15]
    return(
        <>
            <div className="flex">
                <Sidebar />
                <div
                    className=" h-screen overflow-y-scroll overflow-x-hidden py-4 px-6"
                >
                    <div className="flex gap-3 overflow-x-scroll ">
                        {chips.map((chip) => {
                            return(
                                <div 
                                className="bg-zinc-800 text-white px-2 py-2 rounded-lg cursor-pointer text-sm whitespace-nowrap " key={chip}>
                                    {chip}
                                </div>
                            )
                        })}     
                    </div>
                    <div 
                        className="md:flex justify-start items-start gap-3 py-4 flex-wrap "
                    >
                        {cards.map((card) => {
                            return(
                                <Card key={card}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home