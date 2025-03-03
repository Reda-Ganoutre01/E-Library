import React, { useEffect, useState } from 'react'
import BorrowRecordService from '../../../services/BorrowRecordService'

export default function ManageBrrowRecord () {
  const [borrowRecord, setBorrowRecord] = useState([]); // Corrected 'BrrowRecord' to 'borrowRecord'
  useEffect(() => {
    BorrowRecordService.getAllBorrowRecords()
    .then((response) => {
        setBorrowRecord(response.data.content);
        console.log(response.data.content); 
    })
    .catch((error) => {
        console.error("Error fetching borrow records:", error); // Log error if fetch fails
    });
}, []);



  return (
    <div className='py-10'>
    <div className="flex items-center justify-center text-black text-2xl underline
    font-seri decoration-primary">BrrowRecord</div>
</div>    
  )
}

