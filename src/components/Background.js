import React from 'react';

class Background extends React.Component
{
    render()
    {
        return(
            <div className="image-background">
              <div className="col" style={{backgroundColor: "green"}}>

              </div>
              <div className="col"  style={{backgroundColor: "blue"}}>
                  
              </div>
            </div>
        )
    }
}

export default Background;