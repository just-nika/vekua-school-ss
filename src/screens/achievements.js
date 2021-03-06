import React from 'react';
import QuickLinks from './quicklinks';
import Covid from './covid';
import { Helmet } from "react-helmet";

function Achievements(toggleDark) {
    return (
        <div className="">
            <Helmet>
              <title>მიღწევები</title>
            </Helmet>
            <div className="achievements-text">
                <div className="achievements-content">
                    <br />
                    <h2>მიღწევები</h2>
                    <br />
                    <div className="achievements">
                        <p><b>მიღწევების სანახავად გადადით შესაბამის ბმულზე</b></p>
                        <p className="years"><a href="./2019-2020.pdf" target="_blank">2019-2020 სასწავლო წლის მიღწევები</a></p>
                        <p className="years"><a href="./2018-2019.pdf" target="_blank">2018-2019 სასწავლო წლის მიღწევები</a></p>
                        <p className="years"><a href="./2017-2018.pdf" target="_blank">2017-2018 სასწავლო წლის მიღწევები</a></p>
                        <p className="years"><a href="./2016-2017.pdf" target="_blank">2016-2017 სასწავლო წლის მიღწევები</a></p>
                        <p className="years"><a href="./2015-2016.pdf" target="_blank">2015-2016 სასწავლო წლის მიღწევები</a></p>
                        <p className="years"><a href="./2014-2015.pdf" target="_blank">2014-2015 სასწავლო წლის მიღწევები</a></p>
                        <p className="years"><a href="./2013-2014.pdf" target="_blank">2013-2014 სასწავლო წლის მიღწევები</a></p>
                        <p className="years"><a href="./2012-2013.pdf" target="_blank">2012-2013 სასწავლო წლის მიღწევები</a></p>
                        <p className="years"><a href="./2011-2012.pdf" target="_blank">2011-2012 სასწავლო წლის მიღწევები</a></p>
                    </div>
                </div>
            </div>
        <QuickLinks />
        <Covid toggleDark={toggleDark} />
        </div>
    )
}

export default Achievements;
