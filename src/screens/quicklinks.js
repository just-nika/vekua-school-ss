import React from 'react'

function QuickLinks() {
    return (
        <div className="quick-links">
            <div className="child-links">
                <a target="_blank" href="https://www.facebook.com/schoolvekua/"><img src="./findUs.svg" className="link" alt="" style={{width: "120px"}} /></a>
                <a target="_blank" href="https://www.instagram.com/42vekuaschool/"><img src="./instagram.png" className="link" alt="" style={{width: "120px"}} /></a>
                <a target="_blank" href="https://www.youtube.com/channel/UCHl29oGvshhX8VzeU9Lgziw"><img src="./youtube.png" className="link" alt=""/></a>
                <a target="_blank" href="http://mes.gov.ge/content.php?id=3929&lang=geo"><img src="https://www.mes.gov.ge/assets/images/mes.gov.ge-logo-geo.png" className="link" alt=""/></a>
            </div>
        </div>
    )
}

export default QuickLinks;
