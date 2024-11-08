import React, { useState } from 'react';

const Filters = ({data,setD}) => {
    const[subject,setSubject]=useState("");
    const[Option,setOption]=useState("Above");
    const[Value1,setValue1]=useState("");
    const[Value2,setValue2]=useState("");
    const[err,setError]=useState({})
    
    const clearFilter=()=>{
        setSubject("");
        setValue1("")
        setValue2("")
        setOption("Above")
        setError({})
        setD(data)
    }
    console.log(Option)

    const validate=()=>{
        const e={};
        if(!Value1) e.Value1="Enter Value";
        if(Option==="Between" && !Value2) e.Value2="Enter Value"

        return e;
    }

    const filterApply=()=>{
        const r=validate()

        if(Object.keys(r).length!=0){
            setError(r);
        }else{
            let filteredData = data.filter(student => {
                const d = student[subject];
                if (Option === "Above") return d > Value1;
                if (Option === "Below") return d < Value1;
                if (Option === "Between") return d >= Value1 && d <= Value2;
                return true;
            });
            setD(filteredData)
        }

       
    }
    return (
        <>
        <div className='border-[1px] w-2/5 flex flex-col items-center'>
            <h2 className='text-center mt-5 font-semibold'>Filters</h2>
            <form action="" onSubmit={(e)=>e.preventDefault()} className=' w-[80%] mt-5 py-2 space-y-4'>
                <select name="se" id="" className='border-2 w-full py-2' onChange={(e)=>setSubject(e.target.value)}>
                    <option value="" >Select Subject</option>
                    <option value="English">English</option>
                    <option value="Maths">Maths</option>
                    <option value="Science">Science</option>
                    <option value="SocialScience">SocialScience</option>
                </select>
                
                   {
                    subject!="" &&
                    <div>
                        <div className='flex-col mb-4'>
                    <div className=' flex gap-2 items-center'>
                    <input type="radio" name='Option' defaultChecked value="Above" id='above' onChange={(e)=>setOption(e.target.value)}/><label htmlFor="above">Above</label>
                    </div>
                    <div className=' flex gap-2 items-center'>
                    <input type="radio" name='Option' value="Below" id='below' onChange={(e)=>setOption(e.target.value)}/><label htmlFor="below">Below</label>
                    </div>
                    <div className=' flex gap-2 items-center'>
                    <input type="radio" name='Option' value="Between" id='between' onChange={(e)=>setOption(e.target.value)}/><label htmlFor="between">Between</label>
                    </div>
                    </div>
                    <div className='space-y-2'>
                        <input type="text" value={Value1} placeholder='Enter value' onChange={(e)=>setValue1(isNaN(parseInt(e.target.value))?"":parseInt(e.target.value))} className={` border-2 w-full py-2 px-5 ${err.Value1 && 'border-red-300'}`}/>
                        {
                        
                        Option=="Between" && <input type="text" value={Value2} placeholder='Enter value' onChange={(e)=>setValue2(isNaN(parseInt(e.target.value))?"":parseInt(e.target.value))} className={` border-2 w-full py-2 px-5 ${err.Value2 && 'border-red-300'}`}/>
                        }
                    </div>
                    <div className='flex justify-between mt-4'>
                        <button className='bg-green-400 px-8 py-2' onClick={filterApply}>Filter</button>
                        <button className='bg-red-400 px-8 py-2' onClick={clearFilter}>Clear</button>
                    </div>
                    </div>
                   }
                
            </form>
        </div>
        </>
    );
}

export default Filters;
