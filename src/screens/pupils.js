import React from 'react';
import Covid from './covid';

function Pupils() {
    return (
        <div className="">
            <div className="pupils-main">
                <div className="pupils-background"></div>
                <div className="about-that">
                    <br />
                    <h4 style={{textAlign: "start"}}>რა არის სკოლის თვითმმართველობა?</h4>
                    <p style={{textAlign: "start"}}>სკოლის თვითმმართველობა არის სკოლის დემოკრატიული მართვის სისტემა, რომელშიც ჩართულნი არიან მოსწავლეები, მასწავლებლები, მშობლები, თემისა და სასკოლო საზოგადოების სხვადასხვა ინტერესთა ჯგუფები.</p>
                    <br />
                    <br />
                    <h4 style={{textAlign: "start"}}>რას წარმოადგენს სკოლის თვითმმართველობა?</h4>
                    <p style={{textAlign: "start"}}>მოსწავლეთა თვითმმართველობა წარმოადგენს სკოლის სტრუქტურულ ერთეულს, რომელიც იქმნება ზოგადი განათლების შესახებ კანონისა და სკოლის წესდების შესაბამისად. მოსწავლეები საკუთარ თვითმმართველობებს საბაზო და საშუალო საფეხურის დონეზე ირჩევენ თანასწორობის საფუძველზე, ფარული კენჭისყრით, კლასების მიხედვით თანაბარი წარმომადგენლობის პრინციპის დაცვით.</p>
                    <br />
                    <br />
                    <h4 style={{textAlign: "start"}}>ვინ და ვინაა ჩვენი სკოლის თვითმმართველი?</h4>
                    <p style={{textAlign: "start"}}>საბაზისო საფეხურის თავმჯდომარე გახდა 8/5 კლასის მოსწავლე - გიორგი მესტვირიშვილი, ხოლო საშუალო საფეხურის თავმჯდომარის პოზიცია 11/3 კლასის მოსწავლემ, ნინო მენაბდიშვილმა დაიკავა. სრული სია კი შეგიძლიათ იხილოთ <a href="https://docs.google.com/spreadsheets/d/1yAVjfLlXZvnZWAldixLrP33Ip3JGJru54gHEN6AGy5c/edit?usp=sharing" target="_blank">აქ</a>.</p>
                    <br />
                </div>
            </div>
            <Covid />
        </div>
    )
}

export default Pupils
