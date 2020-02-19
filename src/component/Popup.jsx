import React from 'react';

export const Popup = props => {    
    const innerOpen = () => {
        console.log('open');
    }

     {/* <div className="dim-layer">
            <div className="dimBg"></div>
            <div id="layer2" class="pop-layer">
                <div class="pop-container">
                    <div class="pop-conts">
                        <!--content //-->
                        <p class="ctxt mb20">Thank you.<br>
                            Your registration was submitted successfully.<br>
                            Selected invitees will be notified by e-mail on JANUARY 24th.<br><br>
                            Hope to see you soon!
                        </p>

                        <div class="btn-r">
                            <a href="#" class="btn-layerClose">Close</a>
                        </div>
                        <!--// content-->
                    </div>
                </div>
            </div> 
        </div> */}

        /* React.cloneElement(trigger(isOpen), triggerProps); */
        console.log(    )
        console.log(  props.trigger )
        
        

    return(
        <>
            {React.cloneElement( props.trigger , { onClick : () => innerOpen() }  )}
        </>
       
    )
}

export default Popup;