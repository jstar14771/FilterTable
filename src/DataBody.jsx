import React from 'react';

const DataBody = ({data}) => {
    return (
       <>
        {
           data.length !=0 ? data.map((item,i)=>{
                return <tr key={i} className={` text-center  ${i%2==0 ? 'bg-gray-300 ':''}`}>
                    <td>{item.id+1}</td>
                    <td>{item.Name}</td>
                    <td>{item.English}</td>
                    <td>{item.Maths}</td>
                    <td>{item.Science}</td>
                    <td>{item.SocialScience}</td>
                </tr>
            }): <tr className=''><td colSpan={6} className='text-center '>No Data</td></tr>
        }
       </>
    );
}

export default DataBody;
