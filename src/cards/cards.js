import React, { useEffect,useState } from 'react'


const Cards = () => {
    const[data,setdata]=useState([])
    const [filteredData, setFilteredData] = useState([])
console.log(data);
    useEffect(()=>{
        fetch("https://dummyjson.com/recipes").then(res=>res.json()).then(res=>{setdata(res.recipes)
          setFilteredData(res.recipes)
        }).catch(err=>console.log(err))    
    },[])


    const handleFilter = (difficulty) => {
      if (difficulty === "all") {
        setFilteredData(data);
      } else {
        const filtered = data.filter((item) => item.difficulty.toLowerCase() === difficulty);
        setFilteredData(filtered);
      }
    };
   


    return (
     
        <div style={{width:"100%",display:'flex'}}>
            <div id="left" style={{ width: "10%", display: "flex", flexDirection: "column", gap: "10px",marginTop:"100px",margin:"100px 70px 0 70px"}}>
            <button onClick={() => handleFilter("all")} style={{backgroundColor:"pink",border:"none",borderRadius:"7px",padding:"7px 0px"}}>All</button>
        <button onClick={() => handleFilter("easy")} style={{backgroundColor:"pink",border:"none",borderRadius:"7px",padding:"7px 0px"}}>Easy</button>
        <button onClick={() => handleFilter("medium")} style={{backgroundColor:"pink",border:"none",borderRadius:"7px",padding:"7px 0px"}}>Medium</button>
        
        
      </div>
           <div style={{width:"88%"}}>
           <h1 style={{paddingLeft:"500px"}}>Products</h1>  
        <div style={{ display: 'flex', flexWrap: 'wrap' }} id='right'>
          {filteredData.map((e) => {
            return (
              <div key={e.id} style={{ width: "350px", height: "3auto", margin: "10px", border: "2px solid black", padding:"10px", textAlign: "center",borderRadius:"10px" }} >
                <img src={e.image} alt={e.title} style={{ width: "100%", height: "60%", borderRadius:"10px" }} />
                <h3>name: ${e.name}</h3>
                <p>Cuisine:{e.cuisine}</p>
                 <p>mealType:{e.mealType}</p>
                 <p>difficulty:{e.difficulty}</p>
              </div>
            );
          })}
        </div>
           </div>
       
      </div>
    );
  };            


export default Cards
