import React from 'react';
import './InternshipTable.css';
import Board1 from './Board1/Board1';
import Board2 from './Board2/Board2';
import Board3 from './Board3/Board3';
import Board4 from './Board4/Board4';
import Board5 from './Board5/Board5'; 

const InternshipTable = props => (
	<>
		<div className='overall_body'>
   <div className='sectional_heading'>
        <div className='grid-template-a'>
            <div className='internship_item'>
                <p>Internship Title</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m8 12l4 4l4-4m-4-4v8"/><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9s-9-1.8-9-9s1.8-9 9-9z"/></g></svg>
            </div> 
        </div> 
        <div className='grid-template-b'>
            <div className='internship_item_1'>
            <p>Completion Period</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m8 12l4 4l4-4m-4-4v8"/><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9s-9-1.8-9-9s1.8-9 9-9z"/></g></svg>
        </div> 
        </div> 
        <div className='grid-template-c'>
            <div className='internship_item_2'>
            <p>Total Enrolled</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m8 12l4 4l4-4m-4-4v8"/><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9s-9-1.8-9-9s1.8-9 9-9z"/></g></svg>
        </div>
        </div> 
        <div className='grid-template-d'>
            <div className='internship_item_3'>
            <p>Qualified Candidates</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m8 12l4 4l4-4m-4-4v8"/><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9s-9-1.8-9-9s1.8-9 9-9z"/></g></svg>
            </div>  
        </div> 
        <div className='grid-template-e'>
            <span></span>
        </div>
    </div>
    <div className='learningBoards'>
        <div className='grid-template-1'>
            <Board1/>
        </div> 
        <div className='grid-template-2'>
            <Board2/>
        </div> 
        <div className='grid-template-3'>
             <Board3/>
        </div> 
        <div className='grid-template-4'>
            <Board4/>
        </div> 
        <div className='grid-template-5'>
            <Board5/>
        </div>             
    </div>
    <div className='learningBoards'>
        <div className='grid-template-1'>
            <Board1/>
        </div> 
        <div className='grid-template-2'>
            <Board2/>
        </div> 
        <div className='grid-template-3'>
             <Board3/>
        </div> 
        <div className='grid-template-4'>
            <Board4/>
        </div> 
        <div className='grid-template-5'>
            <Board5/>
        </div>             
    </div>
    <div className='learningBoards'>
        <div className='grid-template-1'>
            <Board1/>
        </div> 
        <div className='grid-template-2'>
            <Board2/>
        </div> 
        <div className='grid-template-3'>
             <Board3/>
        </div> 
        <div className='grid-template-4'>
            <Board4/>
        </div> 
        <div className='grid-template-5'>
            <Board5/>
        </div>             
    </div>
    <div className='learningBoards'>
        <div className='grid-template-1'>
            <Board1/>
        </div> 
        <div className='grid-template-2'>
            <Board2/>
        </div> 
        <div className='grid-template-3'>
             <Board3/>
        </div> 
        <div className='grid-template-4'>
            <Board4/>
        </div> 
        <div className='grid-template-5'>
            <Board5/>
        </div>             
    </div>
    <div className='learningBoards'>
        <div className='grid-template-1'>
            <Board1/>
        </div> 
        <div className='grid-template-2'>
            <Board2/>
        </div> 
        <div className='grid-template-3'>
             <Board3/>
        </div> 
        <div className='grid-template-4'>
            <Board4/>
        </div> 
        <div className='grid-template-5'>
            <Board5/>
        </div>             
    </div>
   </div>
   
	</>
);





export default InternshipTable;
