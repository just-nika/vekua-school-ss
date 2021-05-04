import React from 'react';
import Button from '@material-ui/core/Button';

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="first-column">
                    <a href="/"><img src="./logo.png" className="footer-logo" alt="logo"/></a>
                    <br />
                    <br />
                    <a href="https://www.facebook.com/schoolvekua/" target="_blank"><Button color="primary"><i class="fab fa-facebook"></i></Button></a>
                    <a href="https://www.instagram.com/42vekuaschool/" target="_blank"><Button color="primary"><i class="fab fa-instagram"></i></Button></a>
                    <a href="https://www.youtube.com/channel/UCHl29oGvshhX8VzeU9Lgziw" target="_blank"><Button color="primary"><i class="fab fa-youtube"></i></Button></a>
                </div>
                <br />
                <div className="second-column">
                    <h4>კონტაქტი</h4>
                    <br />
                    <br />
                    <p><strong>თბილისი, პეტრე ჩაიკოვსკის 9.</strong></p>
                    <br />
                    <p>ელექტრონული ფოსტა - <a href="mailto: tbilisi42@mes.gov.ge" target="_blank">tbilisi42@mes.gov.ge</a></p>
                    <p>ნომერი - <a href="tel:0322-99-82-10">(995) 0322 99 82 10</a></p>
                </div>
                <br />
                <div className="third-column">
                    <h4>გამოსადეგარი ლინკები</h4>
                    <br />
                    <div className="links">
                        <div className="first-link-column">
                            <p><a href="/history">ჩვენს შესახებ</a></p>
                            <p><a href="/news">სიახლეები</a></p>
                            <p><a href="/projects">პროგრამები და პროექტები</a></p>
                            <p><a href="/teachers">დირექცია და მასწავლებლები</a></p>
                        </div>
                        <div className="second-link-column">
                            <p><a href="/laws">შინაგანწესი</a></p>
                            <p><a href="/achievements">მიღწევები</a></p>
                            <p><a href="/contact">კონტაქტი</a></p>
                            <p><a href="/login">შესვლა</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p><strong>სსიპ აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის ქალაქ თბილისის N 42 საჯარო სკოლა</strong></p>
                <p><strong>ყველა უფლება დაცულია © 2021</strong></p>
            </div>
        </div>
    )
}

export default Footer
