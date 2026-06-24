import { useState,useEffect } from "react";

const App =()=>{
  const [search,setSearch]=useState("");

  useEffect(()=>{
    const timer=setTimeout(()=>{
      console.log(search);
    },500);
    return ()=>{
      clearTimeout(timer);
    }
  },[search]);

  return(
    <div>
      <input
      placeholder="search.."
      value={search}
      type="text"
      onChange={(e)=> setSearch(e.target.value)}
      
      />

    </div>
  );
}
export default App;