import React from 'react'

function QuickLinks() {
    return (
        <div className="quick-links">
            <div className="child-links">
                <a target="_blank" href="https://www.facebook.com/schoolvekua/"><img src="findUs.png" className="link" alt=""/></a>
                <a target="_blank" href="https://www.instagram.com/42vekuaschool/"><img src="instagram.jpg" className="link" alt=""/></a>
                <a target="_blank" href="https://www.youtube.com/channel/UCHl29oGvshhX8VzeU9Lgziw"><img src="YouTube-Subscribe-Button-Transparent.png" className="link" alt=""/></a>
                {/* <a target="_blank" href="http://mes.gov.ge/content.php?id=3929&lang=geo"><img src="teaching.jpg" className="link" alt=""/></a> */}
                {/* <a target="_blank" href="https://www.naec.ge/#/ge/index"><img src="naec.png" className="link" alt=""/></a> */}
            </div>
        </div>
    )
}

export default QuickLinks;
