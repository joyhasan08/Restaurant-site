import { useState } from "react";

const initUserData = {
    userName: '',
    phoneNumber: 0,
    userEmail: '',
    userImg: ''

}

const AddUser = () => {
    const [userData, setUserData] = useState(initUserData)

    const handleOnChange = (e) => {
        const { name, value, type } = e.target
        console.log(name, value);
        setUserData((prev) => ({ ...prev, [name]: type == "number" ? Number(value) : value }))
    }
    console.log(userData);

    const btnCls = 'cursor-pointer uppercase font-mono bg-white font-bold py-2 px-4 rounded border-2 border-black shadow-[0.25rem_0.25rem_#121212] transition-[transform_50ms, box-shadow_50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212]'

    const inputCls = 'cursor-pointer uppercase font-mono bg-white font-bold py-2 px-4 rounded border-2 border-black shadow-[0.25rem_0.25rem_#121212] transition-[transform_50ms, box-shadow_50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212]'

    const inputContainer = 'flex flex-col font-medium gap-2 '

    return (
        <section className="max-w-3xl mx-auto ">
            <h1 className="text-2xl font-light  w-full mb-10  uppercase font-mono bg-white  py-2 px-4  shadow-[0.0rem_0.25rem_#121212] " >User Registration Form</h1>
            <div className="grid grid-cols-2 gap-4">
                <div className={inputContainer}>
                    <label htmlFor="name">Full Name </label>
                    <input className={inputCls} onChange={handleOnChange} type="text" name="name" id="name" />
                </div>

                <div className={inputContainer}>
                    <label htmlFor="email">Email </label>
                    <input className={inputCls} onChange={handleOnChange} type="text" name="email" id="email" />
                </div>

                <div className={inputContainer}>
                    <label htmlFor="number">Phone Number </label>
                    <input className={inputCls} onChange={handleOnChange} placeholder="+880" type="number" name="number" id="number" />
                </div>

                <div className={inputContainer}>
                    <label htmlFor="userImg">Photo url </label>
                    <input className={inputCls} onChange={handleOnChange} placeholder="Photo url" type="text" name="userImg" id="userImg" />
                </div>
                <div className="w-full">
                    <button className={btnCls}>
                        Submit
                    </button>

                </div>


            </div>
        </section>
    );
};

export default AddUser;