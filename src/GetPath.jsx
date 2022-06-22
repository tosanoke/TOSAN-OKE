import React,{useState} from "react";

const obj = {
  user: {
    id: 1,
    name: {
      firstName: "James",
      lastName: "Ibori",
    },
    location: {
      city: "Ikoyi",
      state: "Lagos",
      address: "One expensive house like that",
    },
  },
};

function GetPath() {
const [query, setQuery] = useState("")
const [output, setOutput] = useState("");


const handleSubmit =() =>{
    const path = getPath(obj, query);
    setOutput(path);
}



  const getPath = (obj, query) => {
    if (query === obj.user.id) {
      return `obj.user.id`;
    } else if (query === obj.user.name.firstName) {
      return `obj.user.name.firstName`;
    } else if (query === obj.user.name.lastName) {
      return `obj.user.name.lastName`;
    } else if (query === obj.user.location.city) {
      return `obj.user.location.city`;
    } else if (query === obj.user.location.state) {
      return `obj.user.location.state`;
    } else if (query === obj.user.location.address) {
      return `obj.user.location.address`;
    }else {
        return "Not found";
    }
  };



  return( 
    <>
    <div className="container">
        <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
        
        <div>
            datapath: {output}
        </div>
    </div>
    </>
    
  
  );
}

export default GetPath;
