import { useState, useEffect } from 'react';
import Task from './Task';
import TaskCard from './TaskCard';


export default function ListTask(){

    const[list, setList] = useState([]);

    useEffect(()=>{
        
        const arr = localStorage.getItem("arr");
        const item= JSON.parse(arr)
        if (item !== null){
            setList(item)
        }
    },[])

    const store = (formObject) =>{
        const newList = [...list,formObject]
        const json = JSON.stringify(newList);
        localStorage.setItem("arr",json)
        console.log(formObject)
        console.log(newList)
        setList(newList)
    }
    

    return(
        <div>
            <Task prop={store} />
            {/* {JSON.stringify(list)} */}
            {list.map((item,i)=><TaskCard prop={item} key={i} /> )}
            {/* <TaskCard /> */}
        </div>
    )
}