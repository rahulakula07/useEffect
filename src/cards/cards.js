import React, { useEffect,useState } from 'react'


const Cards = () => {
    const[data,setdata]=useState([])
// console.log(data);
    useEffect(()=>{
        fetch("https://dummyjson.com/recipes").then(res=>res.json()).then(res=>setdata(res.recipes)).catch(err=>console.log(err))    
    })

    const[filterdata,setfilterdata]=useState([])

    // useEffect((res)=>{
    //     data.filter()
    // },[])


    return (
        <div>
        <h1>Products</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {data.map((e) => {
            return (
              <div key={e.id} style={{ width: "350px", height: "3auto", margin: "10px", border: "2px solid black",  textAlign: "center",borderRadius:"" }} >
                <img src={e.image} alt={e.title} style={{ width: "100%", height: "60%" }} />
                <h3>name: ${e.name}</h3>
                <p>Cuisine:{e.cuisine}</p>
                 <p>mealType:{e.mealType}</p>
                 <p>difficulty:{e.difficulty}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };            


export default Cards
