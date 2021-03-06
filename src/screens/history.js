import React from 'react';
import Covid from './covid'
import { Helmet } from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';

function History(toggleDark) {
    const dark = toggleDark.toggleDark;
    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: dark ? "#383838" : "#dbf3fc",
        },
    }));
    const classes = useStyles();
    return (
        <div className="">
            <Helmet>
                <title>ისტორია და მისია</title>
            </Helmet>
            <div className="mission-background"></div>
            <div className="text-about">
                <div className="page-content" style={{textAlign: 'start'}}>
                    <br />
                    <div className="mission">
                        <br />
                        <h1>მისია</h1>
                        <br />
                        <p>
                            აკადემიკოს ილია ვეკუას სახელობის  ფიზიკა-მათემატიკის ქალაქ თბილისის N42 საჯარო  სკოლა სპეციალიზებულია. 
                            სკოლის სტრატეგიული მიზნები და მისია მისი პროფილიდან გამომომდინარეობს. ჩვენი ქვეყნის ეკონომიკის მდგრადი 
                            განვითარებისთვის მეტად მნიშვნელოვანია ზუსტი და საბუნებისმეტყველო დარგების განვითარების ხელშეწყობა. 
                            სკოლა ცდილობს გამოიყენოს და განავითაროს მცირერიცხოვანი მოსახლეობის ქვეყნის ძირითადი სიმდიდრე - 
                            ინტელექტუალური რესურსი. შესაბამისად, სკოლის ძირითადი დანიშნულებაა მოამზადოს  განათლებული ახალგაზრდა 
                            ლიდერები, რომელთაც შეეძლებათ, საბაზრო ეკონომიკის პირობებში, თავიანთი ინტელექტუალური პოტენციალის 
                            თვითრეალიზება და ქვეყნის ეკონომიკური განვითარების პროცესებში წარმატებულად მონაწილეობა. ეკონომიკური 
                            ზრდა უნდა იყოს საშუალება მათი შემოქმედებითი პოტენციალის რეალიზებისა და არა თვითმიზანი. სკოლას სურს, 
                            რომ მომავალი ინტელექტუალური ელიტის მთავარი საზრუნავი იყოს ადამიანი, მისი პოტენციალის ზრდა, ისეთი 
                            საზოგადოების აშენება, რომელშიც ნებისმიერ მოქალაქეს ექნება სრულფასოვანი, ხარისხიანი განათლების მიღების, 
                            ჯანმრთელობის დაცვისა  და არჩევანის გაკეთების მაქსიმალური თავისუფლება. სხვა სიტყვებით რომ ვთქვათ, 
                            სკოლა აქტიურად ზრუნავს, მოამზადოს ახალგარდა ლიდერები სამოქალაქო საზოგადოების მშენებლობაში წარმატებული 
                            მოღვაწეობისათვის. მხოლოდ სამოქალაქო საზოგადოების პირობებშია შესაძლებელი დემოკრატიული სახელმწიფოს 
                            ფორმირება. სკოლის საქმიანობა ასევე ემსახურება მომავალ თაობებში პატრიოტული გრძნობებისა და სამოქალაქო 
                            ცნობიერების განვითარებას, სათანადო უნარ-ჩვევების გამომუშავებას, პიროვნების პატივისცემასა და ა.შ. 
                            ყოველივე  ეს კი  განვითარებული ეკონომიკის გარეშე უტოპიური იქნება.  ამგვარად, ჩვენი სკოლის მისია და 
                            გრძელვადიანი მიზნები  უკავშირდება ახალგაზრდა ლიდერების მომზადებას, რომლებსაც შეეძლებათ წარმატებით 
                            მიიღონ აქტიური მონაწილეობა ქვეყნის ეკონომიკის განვითარებასა და სამოქალაქო საზოგადოების მშენებლობაში. 
                            ეს ამბიციური, მაგრამ რეალისტური ამოცანაა, თუ კი გავითვალისწინებთ ჩვენი სკოლის რესურსებს, მის ტრადიციებს, 
                            მოსწავლეებისა და მათი მშობლების სურვილებსა და მზაობას, სასკოლო სასწავლო გეგმის სპეციფიკურობასა და 
                            გამოცდილ პედაგოგიურ კადრებს. შესაბამისად, სკოლის სამოქმედო სტრატეგია მდგომარეობს შემდეგში: 
                            `შევინარჩუნოთ სკოლის საუკეთესო ტრადიციები და გავაძლიეროთ ის ახალი იდეებითა და ინოვაციური მეთოდებით. 
                            სკოლა ცდილობს, ზუსტი და საბუნებისმეტყველო საგნების გაძლიერებული სწავლისათვის მოტივირებულ და სათანადო 
                            მზაობის მქონე მოსწავლეებს შეუქმნას შესაბამისი სასწავლო გარემო და საბოლოო ჯამში, ამით უზრუნველყოს 
                            ადგილობრივ თუ საერთაშორისო დონეზე სამეცნიერო წრეების, შრომის ბაზრისა და ეკონომიკური განვითარების 
                            მოთხოვნის შესაფერისი ინტელექტუალური კადრების მომზადება.
                        </p>
                        <br />
                    </div>
                    <br />
                    <div className={classes.root}>
                        <div className="history">
                            <br />
                            <h1>ისტორია</h1>
                            <br />
                            <p>
                                აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის ქალაქ თბილისის N 42 საჯარო სკოლა 1950 წელს 
                                დაარსდა. სკოლა მდებარეობს თბილისის ძველ უბანში, სოლოლაკში, ჩაიკოვსკის ქუჩაზე. 1962 წელს სკოლაში 
                                ნიადაგი მომზადდა ფიზიკა-მათემატიკის პროფილის კლასების გასახსნელად. ეს იდეა მათემატიკოსებს დავით 
                                კვესელავას, ფილიმონ ხარშილაძეს და ნინო ვადაჭკორიას ეკუთვნოდათ. იმ პერიოდში სწორედ ეს შესანიშნავი
                                პედაგოგები ასწავლიდნენ N 42 სკოლაში. სკოლის დირექტორი კი გახლდათ ფიზიკოსი აპოლონ კალატოზიშვილი. 
                                განათლების სამინისტროს მხარდაჭერით 1963-1964 სასწავლო წელს N42 სკოლაში პირველი ფიზიკა-მათემატიკის 
                                პროფილის კლასი გაიხსნა. აღსანიშნავია ის ფაქტი, რომ პირველი გამოშვების ყველა მოსწავლემ სკოლა წარჩინებით 
                                დაამთავრა. უკვე სახელგანთქმული ქართული მათემატიკური სკოლა უსათუოდ ითხოვდა ისეთი ბაზის შექმნას, სადაც 
                                მომავალი მეცნიერები გაიზრდებოდნენ. ამ მხრივ ყველაზე დიდი ინიციატივა მათემატიკის გამოთვლითმა ცენტრმა 
                                გამოიჩინა. პირველად იქ გაჩნდა აზრი, რომ დაარსებულიყო სკოლა,რომელშიც მათემატიკური ნიჭით დაჯილდოებული 
                                მოზარდები ისწავლიდნენ. აქ ყველა პირობა უნდა შექმნილიყო იმისათვის, რომ მოსწავლეებს გაეღრმავებინათ 
                                მათემატიკისა და ფიზიკის ცოდნა, დაუფლებოდნენ უმაღლესი მათემატიკის ელემენტებს. ამ მოთხოვნათა შესაბამისად, 
                                მათემატიკისა და ფიზიკის საფუძვლიანად სწავლებისთვის,უნდა მოეწვიათ მაღალაკვალიფიციური სპეციალისტები
                                და მეცნიერები. ამ გარემოებას შესანიშნავად აუღო ალღო ბატონმა აპოლონ კალატოზიშვილმა. 1966 წელს სკოლას 
                                მიენიჭა დიდი მეცნიერის, აკადემიკოს ილია ვეკუას სახელი, ხოლო N42 სკოლის ბაზაზე შექმნილ ფიზიკა-მათემატიკის 
                                პროფილის კლასებს 1982 წელს- სპეციალიზებული სკოლის სტატუსი. ჩვენი სკოლა, ტრადიციულად, ორიენტირებულია 
                                მაპროფილებელი საგნების გაძლიერებულ სწავლებაზე. სკოლაში მოსწავლეთა მიღება მე-7 კლასიდან იწყება, 
                                მათ კი ირჩევენ შემაჯამებელი სარეკომენდაციო ტესტირების შედეგების მიხედვით. სკოლა დაკომპლექტებულია 
                                მაღალკვალიფიციური პედაგოგებით, რომელთა საქმიანობა მიმართულია მოსწავლეებისათვის არა მარტო ცოდნის 
                                გაღრმავებაზე, არამედ მათთვის კრიტიკული და შემოქმედებითი უნარების განვითარებაზე. ყოველივე ეს ხელს 
                                უწყობს მოსწავლეების ღირსეულ მოქალაქეებად ჩამოყალიბებასა და განათლებული ახალგაზრდა ლიდერების მომზადებას, 
                                რაც აისახება მათ მიღწევებზე როგორც ეროვნულ გამოცდებზე, ასევე ეროვნულ და საერთაშორისო ოლიმპიადებსა 
                                და ტურნირებზე.
                            </p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <Covid toggleDark={toggleDark}/>
        </div>
    )
}

export default History;
