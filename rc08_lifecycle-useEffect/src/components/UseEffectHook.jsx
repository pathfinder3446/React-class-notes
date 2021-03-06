//?========================================================
//?                  USEEFFECT HOOK
//?========================================================
//! UseEffect Hook'u fonksiyonel componenlerde yan etkileri
//! (sede effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]);

import { useState, useEffect } from "react";


const UseEffectHook = () => {
    const [count, setCount] = useState(0);


    //! ComponentDidMount
    // useEffect(() => {
    //     console.log("Mounted");
    //     setTimeout(() => {
    //         alert("Data fetched")
    //     }, 3000)
    // }, [])

    //! ComponentDidMount + ComponentDidUpdate
    // useEffect(() => {
    //     console.log("Mounted + Updated");
    //     setTimeout(() => {
    //         alert("Data fetched")
    //     }, 1000)
    // })
  
      //! ComponentDidMount + componentWillUnmount
  const fetchData = () => {
    console.log('Data Fetched');
  };

  useEffect(() => {
    const timerId = setInterval(fetchData, 1000);
    console.log('Mounted');
    return () => {
      clearInterval(timerId);
      console.log('Unmounted');
    };
  }, []);


    console.log("rendered");
    return (
      <div className="container text-center mt-4">
        <h1 className="text-danger">USEEFFECT</h1>
        <h3>Count:{count}</h3>
        <button className="btn btn-warning" onClick={() => setCount(count + 1)}>
          INC
        </button>
      </div>
    );
  };
  

export default UseEffectHook;