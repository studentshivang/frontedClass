import React from "react";

export default function ArrayMapping(){

    const testarray=["Mishra Sir","Aditya","Ashish","Abhay","Shivang","Shivam"];

    return(<div>
        {testarray.map((element)=>{
            return (<>
                <h1><img src="https://picsum.photos/50" style={{"borderRadius":'50%'}}  alt="" />
                Dev {element}</h1>
            </>)
        })}
    </div>)

}