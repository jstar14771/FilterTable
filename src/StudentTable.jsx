import React, { useState } from 'react';
import { data } from './data';
import Filters from './Filters';
import DataBody from './DataBody';

const StudentTable = () => {
    const [StuData, setData] = useState(data);
    const [order, setOrder] = useState("asc");

    function sortTable(column) {
        const newOrder = order === "asc" ? "desc" : "asc";
        setOrder(newOrder);

        const sortedData = StuData.slice().sort((a, b) => {
            let a1 = a[column];
            let a2 = b[column];
            return (a1<a2 ? -1 : 1) * (newOrder === "asc" ? 1 : -1);
        });

        setData(sortedData);
    }

    return (
        <>
            <div className='h-screen w-screen flex justify-center items-center bg-gray-300'>
                <div className='flex flex-col justify-between mt-8 border h-[75vh] w-[80%] p-10 bg-white'>
                    <h2 className='text-center font-semibold mb-2'>Student Table</h2>
                    <div className='flex h-full w-full justify-between'>
                    <Filters data={data} setD={setData}/>
                    <div className='w-[3/5]'>
                        <table className='border-collapse'>
                            <thead>
                                <tr className='bg-green-200 border-black border-[1px] text-center h-10'>
                                    <th className='w-24 border-r-[1px] border-black cursor-pointer' onClick={() => sortTable("id")}>S.No</th>
                                    <th className='w-24 border-r-[1px] border-black cursor-pointer' onClick={() => sortTable("Name")}>Name</th>
                                    <th className='w-24 border-r-[1px] border-black cursor-pointer' onClick={() => sortTable("English")}>English</th>
                                    <th className='w-24 border-r-[1px] border-black cursor-pointer' onClick={() => sortTable("Maths")}>Maths</th>
                                    <th className='w-24 border-r-[1px] border-black cursor-pointer' onClick={() => sortTable("Science")}>Science</th>
                                    <th className='w-40 cursor-pointer' onClick={() => sortTable("SocialScience")}>Social Science</th>
                                </tr>
                            </thead>
                            <DataBody data={StuData} />
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentTable;
