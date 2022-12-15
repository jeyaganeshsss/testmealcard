import React,{useState,useEffect} from 'react';

// export default function GetAll(props)
// {
//     const [mealData,setMealData]=React.useState({})
//     React.useEffect(async()=>
//     {
//         const res= await fetch('www.themealdb.com/api/json/v1/1/search.php?s'+props.name)
//         const data=await res.json()
//         setMealData(data.meals)
//     },[props.name])
// }

export async function getMemberInfo (loginInfo) 
{
    const res = await fetch('www.themealdb.com/api/json/v1/1/search.php?s');
    const json = await res.json();
    return json;
}
export default {getMemberInfo};

// const Allowance = () => {
//     // const [allowances, setAllowances] = useState([]);
  
//     useEffect(() => {
//       fetch("www.themealdb.com/api/json/v1/1/search.php?s")
//         .then(data => {
//           return data.json();
//         })
//         .then(data => {
//           // setAllowances(data);
//           return data;
//         })
//         .catch(err => {
//           console.log(123123);
//         });
//     }, []);
// }  

// export default {Allowance};