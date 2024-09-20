import jsonp from "jsonp";

const env_var = import.meta.env;
export const getAllData = async (dept) => {
    // console.log(env_var.VITE_REACT_APP_FETCHURL);
    const url = `${env_var.VITE_REACT_APP_FETCH_WITH_PARAMS}?dept=${dept}`;
    await jsonp(url, { param: 'callback' }, (err, data) => {
        if (err) {
            console.error('Error fetching data:', err);
            return [];
        } else {
            console.log("Printing data in fetch data", data.data)
            return (data.data);
        }
    });
    // console.log(`${url}?dept=${dept}`);
    // const res = await fetch(`${url}?dept=${dept}`, { method: "GET" });

    // // console.log(res);
    // const { data } = await res.json();
    // return data;

};