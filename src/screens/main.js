import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Covid from './covid';
(function(){
    var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
    i.src = "https://cdn.curator.io/published/3fb8606e-f310-443a-88c0-33de6c6f3205.js";
    e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
    })();

function Main() {
    return (
        <div className="page-container">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{maxHeight: "calc(100vh - 125px)", color: "white"}}>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner" style={{maxHeight: "calc(100vh - 125px)"}}>
                <div className="carousel-item active" style={{maxHeight: "calc(100vh - 125px)"}}>
                    <img src="1947-2.jpg" className="d-block w-100 h-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h3>სსიპ აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის ქალაქ თბილისის N 42 საჯარო სკოლა</h3>
                    </div>
                </div>
                <div className="carousel-item" style={{maxHeight: "calc(100vh - 125px)"}}>
                    <img src="cos.jpg" className="d-block w-100 h-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h3>სწავლება</h3>
                        <h6>აქ ყველა პირობაა შექმნილი იმისათვის, რომ მოსწავლეებმა გაიღრმავონ მათემატიკისა და ფიზიკის ცოდნა, დაეუფლონ უმაღლესი მათემატიკის ელემენტებს.</h6>
                    </div>
                </div>
                <div className="carousel-item" style={{maxHeight: "calc(100vh - 125px)"}}>
                    <img src="carousel.jpg" className="d-block w-100 h-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h3 style={{color: "rgb(212, 200, 200)"}}>ჩვენ გვჯერა!</h3>
                        <h6 style={{color: "rgb(212, 200, 200)"}}>ჩვენი ქვეყანა გაძლიერდება, როდესაც თითოეულ ახალ ვეკუელს შეუძლია ხელი შეუწყოს ჩვენს კეთილდღეობასა და ინოვაციას მათემატიკისა და მეცნიერების საშუალებებით.</h6>
                    </div>
                </div>
                <div className="carousel-item" style={{maxHeight: "calc(100vh - 125px)"}}>
                    <img src="chess.jpg" className="d-block w-100 h-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>ყოველ დღე</h3>
                        <h6>ჩვენ ვხსნით შესაძლებლობების კარს და ვხელმძღვანელობთ ჩვენს მოსწავლეებს, რადგან ისინი წარმოადგენენ ჩვენი საერთო მომავლის შესაძლებლობებს.</h6>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            <div className="main-text">
                <p>
                    აკადემიკოს ილია ვეკუას სახელობის  ფიზიკა-მათემატიკის ქალაქ თბილისის N42 საჯარო  სკოლა სპეციალიზებულია. 
                    სკოლის სტრატეგიული მიზნები და მისია მისი პროფილიდან გამომომდინარეობს. 
                    სკოლა აქტიურად ზრუნავს, მოამზადოს ახალგარდა ლიდერები სამოქალაქო საზოგადოების მშენებლობაში წარმატებული 
                    მოღვაწეობისათვის. მხოლოდ სამოქალაქო საზოგადოების პირობებშია შესაძლებელი დემოკრატიული სახელმწიფოს 
                    ფორმირება. სკოლის საქმიანობა ასევე ემსახურება მომავალ თაობებში პატრიოტული გრძნობებისა და სამოქალაქო 
                    ცნობიერების განვითარებას, სათანადო უნარ-ჩვევების გამომუშავებას, პიროვნების პატივისცემასა და ა.შ.
                    სკოლის ძირითადი დანიშნულებაა მოამზადოს  განათლებული ახალგაზრდა 
                    ლიდერები, რომელთაც შეეძლებათ, საბაზრო ეკონომიკის პირობებში, თავიანთი ინტელექტუალური პოტენციალის 
                    თვითრეალიზება და ქვეყნის ეკონომიკური განვითარების პროცესებში წარმატებულად მონაწილეობა.
                </p>
            </div>
            <div className="facebook">
                <div id="curator-feed-default-feed-layout"><a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a></div>
            </div>
            <Covid />
        </div>
    )
}

export default Main
