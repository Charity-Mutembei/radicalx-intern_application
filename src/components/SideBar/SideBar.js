import React from 'react';
import './SideBar.css';


export default function SideBar() {
    return (
      <div id='side_bar'>
          <div id='main_container'>
          <div className='logo_section' id='logo_section'>
              {/* <img src={RadicallXLogo} alt="RadicalXLogo"/>             */}
          </div>
          <div className='section_links'>
              <div>
                  <div id='link'>
                      <a href='#Dashboard'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10 8h-8v10h8V11m-10 4H3v6h8v-6Z"/></svg>
                      </a>
                      Dashboard 
                  </div>
                  <div id='link'>
                      <a href='#Apprenterships'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3c-.625 0-1.246.21-1.781.594L12.563 4.75L10.655 5h-.031l-.031.031A3.394 3.394 0 0 0 8.03 7.594L8 7.625v.031l-.25 1.938l-1.156 1.5l-.032.031v.031c-.699 1.117-.73 2.559.032 3.625l1.187 1.656l.313 1.72l-3.219 4.905l-1.031 1.532h4.781l1.156 2.687L10.5 29l1.031-1.563l3.156-4.75c.848.348 1.805.38 2.626 0l3.156 4.75L21.5 29l.719-1.719l1.156-2.687h4.781l-1.031-1.532L24 18.313l.25-1.875l1.156-1.656l.032-.031v-.031c.699-1.117.73-2.528-.032-3.594L24.25 9.469l-.375-1.875h.031c-.004-.024-.027-.04-.031-.063c-.18-1.308-1.215-2.37-2.531-2.531h-.032l-1.875-.25l-1.656-1.156A3.074 3.074 0 0 0 16 3zm0 2.031c.23 0 .457.07.625.188L18.406 6.5l.219.156l.25.032L21.063 7h.03c.45.05.762.363.813.813v.062l.407 2.219l.03.219l.157.187l1.281 1.781c.239.332.27.895-.031 1.375l-1.406 1.969l-.032.25L22 18.063v.03a.994.994 0 0 1-.156.438l-.063.032v.03a.88.88 0 0 1-.593.313h-.063l-2.281.407l-.25.03l-.188.157l-1.781 1.281c-.332.239-.926.27-1.406-.031l-1.625-1.25l-.188-.156l-.281-.032L10.937 19h-.03a.885.885 0 0 1-.688-.438a.99.99 0 0 1-.125-.375v-.062l-.406-2.281l-.032-.25l-.156-.188l-1.281-1.781c-.239-.332-.27-.926.031-1.406l1.25-1.625l.156-.188l.031-.281l.282-2.094c.004-.015.027-.015.031-.031a1.394 1.394 0 0 1 1-1c.016-.004.016-.027.031-.031l2.094-.282l.25-.03l.219-.157l1.781-1.281c.168-.117.395-.188.625-.188zm6.906 15.219l1.532 2.344H22.03l-.25.625l-.687 1.593l-2.125-3.25l.468-.343l1.97-.344v.031c.023-.004.038-.027.062-.031a2.97 2.97 0 0 0 1.437-.625zm-13.812.031a2.85 2.85 0 0 0 1.562.719h.031l1.907.25l.437.344l-2.125 3.218l-.687-1.593l-.25-.625H7.563z"/></svg>
                      </a>
                      Apprenterships 
                  </div>
                  <div id='link'>
                      <a href='#Internships'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m19 1l-5 5v11l5-4.5V1m2 4v13.5c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5c-1.95 0-4.05.4-5.5 1.5v14.65c0 .25.25.5.5.5c.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5c1.35-.85 3.8-1.5 5.5-1.5c1.65 0 3.35.3 4.75 1.05c.1.05.15.05.25.05c.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1M10 18.41C8.75 18.09 7.5 18 6.5 18c-1.06 0-2.32.19-3.5.5V7.13c.91-.4 2.14-.63 3.5-.63c1.36 0 2.59.23 3.5.63v11.28Z"/></svg>
                      </a>
                      Internships 
                  </div>
                  <div id='link'>
                      <a href='#jobs'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.5h-3v-1a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3Zm-9-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm10 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V13a21.71 21.71 0 0 0 8 1.53A21.75 21.75 0 0 0 20 13Zm0-7.69a19.89 19.89 0 0 1-16 0V9.5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"/></svg>
                      </a>
                      Jobs
                  </div>
                  <div id='link'>
                      <a href='#settings'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.525 8.3q-.125 0-.262-.075q-.138-.075-.188-.225l-.65-1.4l-1.4-.65q-.15-.05-.225-.188q-.075-.137-.075-.262t.075-.263q.075-.137.225-.187l1.4-.65l.65-1.4q.05-.15.188-.225q.137-.075.262-.075t.263.075q.137.075.187.225l.65 1.4l1.4.65q.15.05.225.187q.075.138.075.263t-.075.262q-.075.138-.225.188l-1.4.65l-.65 1.4q-.05.15-.187.225q-.138.075-.263.075Zm2 7.025q-.125 0-.25-.075t-.2-.2l-.35-.75l-.75-.35q-.075-.05-.275-.45q0-.125.075-.25t.2-.2l.75-.35l.35-.75q.05-.075.45-.275q.125 0 .25.075t.2.2l.35.75l.75.35q.075.05.275.45q0 .125-.075.25t-.2.2l-.75.35l-.35.75q-.05.075-.45.275ZM8.4 22q-.375 0-.65-.25t-.325-.625l-.2-1.475q-.2-.075-.387-.2q-.188-.125-.313-.25l-1.375.6q-.35.175-.712.05q-.363-.125-.563-.475l-1.6-2.8q-.2-.325-.112-.7q.087-.375.387-.6l1.175-.875v-.8l-1.175-.875q-.3-.225-.387-.6q-.088-.375.112-.7l1.6-2.8q.2-.35.563-.475q.362-.125.712.05l1.375.6q.125-.125.313-.25q.187-.125.387-.2l.2-1.475q.05-.375.325-.625T8.4 6h3.25q.375 0 .65.25t.325.625l.2 1.475q.2.075.388.2q.187.125.312.25l1.375-.6q.35-.175.713-.05q.362.125.562.475l1.6 2.8q.2.325.113.7q-.088.375-.388.6l-1.175.875v.8l1.175.875q.3.225.388.6q.087.375-.113.7l-1.6 2.8q-.2.35-.562.475q-.363.125-.713-.05l-1.375-.6q-.125.125-.312.25q-.188.125-.388.2l-.2 1.475q-.05.375-.325.625t-.65.25Zm1.625-5q1.25 0 2.125-.875T13.025 14q0-1.25-.875-2.125T10.025 11q-1.25 0-2.125.875T7.025 14q0 1.25.875 2.125t2.125.875Zm0-2q-.425 0-.713-.288q-.287-.287-.287-.712t.287-.713Q9.6 13 10.025 13t.713.287q.287.288.287.713t-.287.712q-.288.288-.713.288Zm-.75 5h1.5l.2-1.8q.725-.2 1.238-.512q.512-.313 1.012-.838l1.65.75l.7-1.25l-1.45-1.1q.2-.575.2-1.25t-.2-1.25l1.45-1.1l-.7-1.25l-1.65.75q-.5-.525-1.012-.838Q11.7 10 10.975 9.8l-.2-1.8h-1.5l-.2 1.8q-.725.2-1.237.512q-.513.313-1.013.838l-1.65-.75l-.7 1.25l1.45 1.1q-.2.575-.212 1.25q-.013.675.212 1.25l-1.45 1.1l.7 1.25l1.65-.75q.5.525 1.013.838q.512.312 1.237.512Zm.75-6Z"/></svg>
                      </a>
                      Settings
                  </div>
              </div>
          </div>
          <div className='bottom_profile'>
                      <div className='grid-template'>
                      <a href='#profile'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8 3h8c2.76 0 5 2.24 5 5v8c0 2.76-2.24 5-5 5H8c-2.76 0-5-2.24-5-5V8c0-2.76 2.24-5 5-5Z"/></svg>
                      </a>
                      </div>
                      <div className='grid-template'>
                         <p> Adams Scott </p> 
                      </div>
                  </div>
      </div>
      </div>
    )
  }





