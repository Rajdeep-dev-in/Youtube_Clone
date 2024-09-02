import {House, TvMinimalPlay, SquarePlay, BookUser, History, ListVideo, Clock, ThumbsUp, TrendingUp, ShoppingBag, Music, Clapperboard, Radio, Gamepad2, Newspaper, Medal, Lightbulb, ScanFace, Tv, DollarSign, MonitorPlay, ListMusic, Cat, Flag, Settings, CircleHelp, MessageCircleWarning, Copyright} from 'lucide-react'
import SidebarContainer from '../SidebarContainer'


function Sidebar(){
    const menu = [{
            id: 1,
            text: "Home",
            icon: <House size={20} />
        },
        {
            id: 2,
            text: "Shorts",
            icon: <TvMinimalPlay size={20} />
        },
        {
            id: 3,
            text: "Subscriptions",
            icon: <SquarePlay size={20} />
        }
    ]

    const sidebarItems2 = [
        {
          id: 1,
          name: "Your Channel",
          icon: <BookUser size={20} />,
        },
        {
          id: 2,
          name: "History",
          icon: <History size={20} />,
        },
        {
          id: 3,
          name: "Playlists",
          icon: <ListVideo size={20} />,
        },
        {
          id: 4,
          name: "Your Videos",
          icon: <SquarePlay size={20} />,
        },
        {
          id: 5,
          name: "Watch later",
          icon: <Clock size={20} />,
        },
        {
          id: 6,
          name: "Liked videos",
          icon: <ThumbsUp size={20} />,
        },
    ];

    const sidebarItems3 = [
        {
          id: 1,
          name: "Trending",
          icon: <TrendingUp size={20} />,
        },
        {
          id: 2,
          name: "Shopping",
          icon: <ShoppingBag size={20} />,
        },
        {
          id: 3,
          name: "Music",
          icon: <Music size={20} />,
        },
        {
          id: 4,
          name: "Movies",
          icon: <Clapperboard size={20} />,
        },
        {
          id: 5,
          name: "Live",
          icon: <Radio size={20} />,
        },
        {
          id: 6,
          name: "Gaming",
          icon: <Gamepad2 size={20} />,
        },
        {
          id: 7,
          name: "News",
          icon: <Newspaper size={20} />,
        },
        {
          id: 8,
          name: "Sport",
          icon: <Medal size={20} />,
        },
        {
          id: 9,
          name: "Courses",
          icon: <Lightbulb size={20} />,
        },
        {
          id: 10,
          name: "Fashion & beauty",
          icon: <ScanFace size={20} />,
        },
        {
          id: 11,
          name: "Podcasts",
          icon: <Tv size={20} />,
        },
    ];
     const sidebarItems4 = [
    {
      id: 1,
      name: "Youtube Premium",
      icon: <DollarSign size={20} />,
    },
    {
      id: 2,
      name: "Youtube Studio",
      icon: <MonitorPlay size={20} />,
    },
    {
      id: 3,
      name: "Youtube Music",
      icon: <ListMusic size={20} />,
    },
    {
      id: 4,
      name: "Youtube Kids",
      icon: <Cat size={20} />,
    },
  ];

   const sidebarItems5 = [
    {
      id: 1,
      name: "Setting",
      icon: <Settings size={20} />,
    },
    {
      id: 2,
      name: "Report History",
      icon: <Flag size={20} />,
    },
    {
      id: 3,
      name: "Help",
      icon: <CircleHelp size={20} />,
    },
    {
      id: 4,
      name: "Send Feedback",
      icon: <MessageCircleWarning size={20} />,
    },
  ];
    
    return(
        <>
            <div
                className=" min-w-64  px-3 flex flex-col gap-y-2 overflow-y-scroll overflow-x-hidden scroll-smooth "
            >
                {menu.map((item) => {
                    return (
                    <div key={item.id} className="flex justify-start items-start gap-x-2 px-3 py-1">
                    {item.icon}
                    <span>{item.text}</span>
                    </div>
                )
                })}
                <div className='w-full border border-zinc-800 mt-1'></div>
                <div className='px-3 font-bold'>You</div>
                {sidebarItems2.map((item) => {
                    return(
                        <div key={item.id}>
                            <SidebarContainer icon={item.icon} text={item.name} />
                        </div>
                        
                    )
                })}
                <div className='w-full border border-zinc-800 mt-1'></div>
                <div className='px-3 font-bold'>Explore</div>
                {sidebarItems3.map((item) => {
                    return(
                        <div key={item.id}>
                            <SidebarContainer icon={item.icon} text={item.name} />
                        </div>
                    )
                })
                }
                <div className='w-full border border-zinc-800 mt-1'></div>
                <div className='px-3 font-bold'>More From Youtube</div>
                {sidebarItems4.map((item) => {
                    return(
                       <div key={item.id}>
                            <SidebarContainer icon={item.icon} text={item.name} />
                        </div> 
                    )
                })
                }
                <div className='w-full border border-zinc-800 mt-1'></div>
                {sidebarItems5.map((item) => {
                    return(
                       <div key={item.id}>
                            <SidebarContainer icon={item.icon} text={item.name} />
                        </div> 
                    )
                })
                }
                <div className='w-full border border-zinc-800 mt-1'></div>
                <div className='flex flex-wrap justify-start items-center gap-x-2 px-2 text-zinc-500'>
                    <p>About</p>
                    <p>Press</p>
                    <p>Copyright</p>
                    <p>Contact Us</p>
                    <p>Creators</p>
                    <p>Advertise</p>
                    <p>Developer</p>
                </div>
                <div className='flex flex-wrap justify-start items-center gap-x-2 px-2 text-zinc-500'>
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Policy & Safety</p>
                    <p>How YouTube Works</p>
                    <p>Test New Features</p>
                </div>
                <div className='flex flex-wrap justify-start items-center px-2 text-zinc-500'>
                    <Copyright size={16} /> <p>2024 Google LLC</p>
                </div>
            </div>
        </>
    )
}

export default Sidebar