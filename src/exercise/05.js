// useRef and useEffect: DOM interaction
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
// eslint-disable-next-line no-unused-vars
import VanillaTilt from 'vanilla-tilt'


function Tilt({children}) {
  const tiltRef = React.useRef(null);


  // React.useEffect(()=> {
  //   const handler = () => {
  //     console.log("clicked");
  //   }
  //   document.addEventListener('click', handler);
  //   // componentWillUnmount
  //   return function cleanup() {
  //     document.removeEventListener('click', handler);
  //   }
  // }, []);


  React.useEffect(()=> {
    const tiltNode = tiltRef.current;
    // componentDidMount, componentDidUpdate
    VanillaTilt.init(tiltNode, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    })
    // componentWillUnmount
    return function cleanup() {
      tiltNode.vanillaTilt.destroy()
    }
  }, []);


  return (
    <div className="tilt-root" ref={tiltRef}>
      <div className="tilt-child">{children}</div>
    </div>
  )
}

function App() {
  const [show, setShow] = React.useState(true);
  return (
    <>
    <div>
      <button onClick={e => setShow(!show)}>Toggle</button>
    </div>
    {show && 
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
    }
    </>
  )
}

export default App
