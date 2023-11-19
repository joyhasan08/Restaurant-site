import { data } from "autoprefixer";
import { useEffect, useState } from "react";


const useMenuData = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('menu.json').then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }, [])

};

export default useMenuData;