import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'

const Single = () => {
  return (
  <div className='single'>
      <div className='content'>
        <img src="http://www.todayifoundout.com/wp-content/uploads/2015/11/chimp-on-a-laptop.png" alt=""/>
        <div className='user'>
          <img src="http://www.todayifoundout.com/wp-content/uploads/2015/11/chimp-on-a-laptop.png" alt=""/>
          <div className='info'>
            <span>Jon</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            
            // TODO 38:00 about to add button Links
            <img src={Edit} alt=""/>
            <img src={Delete} alt=""/>
          </div>
        </div>
      </div>
      <div className='menue'>
      </div>
    
  </div>
  )
}

export default Single
