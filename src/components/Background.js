import React from 'react';

class Background extends React.Component
{
    render()
    {
        return(
            <div id="image-background" style={{background:"linear-gradient(90deg, rgba(228,80,149,1) 0%, rgba(0,0,0,1) 70%)"}}>
              {/* <div className="col" style={{backgroundColor: "green"}}>

              </div>
              <div className="col"  style={{backgroundColor: "blue"}}>
                  
              </div> */}
            </div>
        )
    }
}

export default Background;