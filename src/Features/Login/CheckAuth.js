import React,{useState} from 'react';

const CheckAuth = ({ account }) => {
    const [auth, setAuth] = useState(false);

    if (account.name.length > 0 && account.pass.length > 0) {
        setAuth(true);
    } else {
        alert("Sorry, something wrong!!!");
    }

    return 


    


}

export default CheckAuth;