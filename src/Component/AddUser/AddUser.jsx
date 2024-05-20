
const AddUser = () => {
    const handleOnChange = (e) => [
        e.preventDefault()

    ]

    return (
        <section className="max-w-3xl mx-auto ">
            <h1 className="text-2xl font-light underline divide-solid underline-offset-8 w-full mb-10" >User Registration Form</h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col  font-medium gap-2 ">
                    <label htmlFor="name">Full Name </label>
                    <input onChange={handleOnChange} type="text" name="name" id="name" />
                </div>

                <div className="flex flex-col font-medium gap-2 ">
                    <label htmlFor="email">Email </label>
                    <input onChange={handleOnChange} type="text" name="email" id="email" />
                </div>

                <div className="flex flex-col font-medium gap-2 ">
                    <label htmlFor="number">Phone Number </label>
                    <input onChange={handleOnChange} placeholder="+880" type="number" name="number" id="number" />
                </div>

                <div className="flex flex-col font-medium gap-2 ">
                    <label htmlFor="userImg">Photo url </label>
                    <input onChange={handleOnChange} placeholder="Photo url" type="text" name="userImg" id="userImg" />
                </div>



            </div>
        </section>
    );
};

export default AddUser;