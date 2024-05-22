import Earth from "../../Component/Earth/Earth";
import Moving from "../../Component/MovingTruck/Moving";
import CardHover from "../../Component/Test/CardHover";


const DashBoard = () => {
    return (
        <div className="h-screen">
            <h1>this is dash board</h1>
            <CardHover />
            <div className=" w-full flex justify-between gap-10 items-center h-48">
                <Moving />
                <div className="w-full h-40 justify-center items-center">
                    <Earth className="w-fit mx-auto" />
                </div>
            </div>

            <button className="bg-green-950 text-green-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span className="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Hover Me
            </button>
        </div>
    );
};

export default DashBoard;