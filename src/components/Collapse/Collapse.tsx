import './collapse.css'
import React, { useRef } from 'react'
import { useState } from 'react';

export const Collapse = () => {
    const [visible, setHidden] = useState(true)

    const refCollapse = useRef<HTMLDivElement>(null)

    const hendlerClick = (e:React.SyntheticEvent)=>{
        e.preventDefault()
        
        const card = refCollapse.current; 
        console.log(card)

        if (!card) return
        if(visible){
            setHidden(false)
            card?.classList.remove("expandedLabel")
            card?.classList.add("collapsedLabel")
        } else {
            setHidden(true)
            card?.classList.remove("collapsedLabel")
            card?.classList.add("expandedLabel")
        }
    }

  return (
<>
    <p>
        <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" onClick={hendlerClick}>
        Link with href
        </a>
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={hendlerClick}>
        Button with data-bs-target
        </button>
    </p>
    <div className = "expandedLabel" id="collapseExample" ref={refCollapse}>
        <div className = "my-card" id="card_1">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </div>
    </div>
</>
  )
}
