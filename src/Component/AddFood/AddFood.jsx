import { useState } from "react";

const initUserData = {
    userName: '',
    phoneNumber: 0,
    userEmail: '',
    userImg: ''

}

const AddFood = () => {

    const [userData, setUserData] = useState(initUserData)

    const handleOnChange = (e) => {
        const { name, value, type } = e.target
        console.log(name, value);
        setUserData((prev) => ({ ...prev, [name]: type == "number" ? Number(value) : value }))
    }
    console.log(userData);




    const btnCls = 'cursor-pointer uppercase font-mono  font-bold py-2 px-4 rounded border-2 border-black shadow-[0.25rem_0.25rem_#121212] transition-[transform_50ms, box-shadow_50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212] '

    const inputCls = 'cursor-pointer uppercase font-mono bg-white font-bold py-2 px-4 rounded border-2 border-black shadow-[0.25rem_0.25rem_#121212] transition-[transform_50ms, box-shadow_50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212]'

    const inputContainer = 'flex flex-col font-medium gap-2 '
    return (
        <div>
            <section className="max-w-3xl mx-auto ">
                <h1 className="text-2xl font-light  w-full mb-10  uppercase font-mono bg-white  py-2 px-4  shadow-[0.0rem_0.25rem_#121212] " > Add New Food items</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div className={inputContainer}>
                        <label htmlFor="name"> Name </label>
                        <input className={inputCls} onChange={handleOnChange} type="text" name="name" id="name" />
                    </div>

                    <div className={inputContainer}>
                        <label htmlFor="email">Price </label>
                        <input className={`${inputCls} `} onChange={handleOnChange} type="number" name="email" id="email" placeholder="$" />
                    </div>

                    {/* <div className={inputContainer}>
                        <label htmlFor="number">Phone Number </label>
                        <input className={inputCls} onChange={handleOnChange} placeholder="+880" type="number" name="number" id="number" />
                    </div> */}



                    <div className={inputContainer}>
                        <label htmlFor="">Category </label>
                        <select className={inputCls} name="" id="">
                            <option defaultValue>
                                Select Food Category
                            </option>

                            <option value="Pizza">Pizza</option>
                            <option value="Thai">Thai</option>
                            <option value="Chines">Chaines</option>
                            <option value="Indian">Indian</option>
                        </select>
                    </div>

                    <div className={inputContainer}>
                        <label htmlFor="userImg">Photo url </label>
                        <input className={`  pl-4  `} onChange={handleOnChange} placeholder="Photo url" type="file" name="userImg" id="userImg" />
                    </div>

                </div>
                <div className=" w-fit mx-auto   pt-10">
                    <button className={`${btnCls} bg-lime-400 hover:bg-white px-20 `}>
                        Add Food
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AddFood;