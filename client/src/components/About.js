// import React, { useContext, useEffect } from 'react'
// import noteContext from '../context/notes/noteContext'
// const About = () => {
//   const a = useContext(noteContext)
//   useEffect(()=>{
//     a.update();
//     // eslint-disable-next-line
//   },[])
//   return (
//     <div className='container'>
//       <h1>About {a.state.name} and {a.state.class}</h1>
//     </div>
//   )
// }

// export default About  000 About use context )))



const About = () => {
  const style={
    backgroundColor:'#0c9aea',
    color:'white'
  }
  return (
    <div className=' abs' style={style}>
      <h1>About </h1>
    </div>
  )
}

export default About
