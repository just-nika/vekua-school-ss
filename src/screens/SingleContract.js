import React, {useRef} from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, Redirect } from "react-router-dom";
import { secondaryApp } from '../firebase/firebase.config';
import { useReactToPrint } from 'react-to-print';
import Button from '@material-ui/core/Button'


const SingleContract = () => {
    let { id } = useParams()
    let { subject } = useParams()
    const [posts, setPosts] = React.useState([]);
    React.useEffect(() => {
        getPosts();
    }, [])
    const getPosts = async () => {
        secondaryApp.firestore().collection(`${subject}`).doc(id).get().then(snapshot => setPosts(snapshot.data()));
    }
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
    function ComponentToPrint() {
        // const [teachers, setTeacher] = React.useState('')
        function Teacher() {
            if (posts.teacherTime == "SSMAN31330" || posts.teacherTime == "SSMAN41530" || posts.teacherTime == "SSMAN51130" || posts.teacherTime == "SSMAN60930") {
                return(
                    <u>&nbsp; ნემსაძე ალექსანდრე &nbsp;</u>
                )
            }
            if (posts.teacherTime == "SSMEL101230" || posts.teacherTime == "SSMEL11121230") {
                return(
                    <u>&nbsp; ლაგვილავა ედემ &nbsp;</u>
                )
            }
            if (posts.teacherTime == "SSMEO30900" || posts.teacherTime == "SSMEO41100" || posts.teacherTime == "SSMEO51300") {
                return(
                    <u>&nbsp; ონაშვილი ეკა &nbsp;</u>
                )
            }
            if (posts.teacherTime == "SSMGS61100" || posts.teacherTime == "SSMGS61400" || posts.teacherTime == "SSMGS70930" || posts.teacherTime == "SSMGS71230") {
                return(
                    <u>&nbsp; სიხარულიძე გურამ &nbsp;</u>
                )
            }
            if (posts.teacherTime == "SSMKK41115" || posts.teacherTime == "SSMKK51315" || posts.teacherTime == "SSMKK60915" || posts.teacherTime == "SSMKK61515") {
                return(
                    <u>&nbsp; კუპატაძე კოტე &nbsp;</u>
                )
            }
            if (posts.teacherTime == "SSMLM70930" || posts.teacherTime == "SSMLM709302" ) {
                return(
                    <u>&nbsp; მამულაშვილი ლელა &nbsp;</u>
                )
            }
            if (posts.teacherTime == "SSMMG61300" || posts.teacherTime == "SSMMG81100" || posts.teacherTime == "SSMMG81500" || posts.teacherTime == "SSMMG90900") {
                return(
                    <u>&nbsp; გურგენაძე მედეია &nbsp;</u>
                )
            }
            if (posts.teacherTime == "SSMMN51100" || posts.teacherTime == "SSMMN51500" || posts.teacherTime == "SSMMN60900" || posts.teacherTime == "SSMMN61300") {
                return(
                    <u>&nbsp; მეტრეველი ნანა &nbsp;</u>
                )
            }
            if (posts.teacherTime == "SSMMT31515" || posts.teacherTime == "SSMMT41315" || posts.teacherTime == "SSMMT51115" || posts.teacherTime == "SSMMT60915") {
                return(
                    <u>&nbsp; თევდორაშვილი მაია &nbsp;</u>
                )
            }
            if (posts.teacherTime == "SSMNM41530" || posts.teacherTime == "SSMNM51130" || posts.teacherTime == "SSMNM60930" || posts.teacherTime == "SSMNM61330") {
                return(
                    <u>&nbsp; მახათაძე ნუგზარ &nbsp;</u>
                )
            }
            if (posts.teacherTime == "SSMNQ51100" || posts.teacherTime == "SSMNQ51500" || posts.teacherTime == "SSMNQ60900" || posts.teacherTime == "SSMNQ61300") {
                return(
                    <u>&nbsp; ქუშაშვილი ნონა &nbsp;</u>
                )
            }
            if (posts.teacherTime == "SSPEKH81300") {
                return(
                    <u>&nbsp; ხიზანიშვილი ესმა &nbsp;</u>
                )
            }
            if (posts.teacherTime == "SSPGK11120930" || posts.teacherTime == "SSPGK71100" || posts.teacherTime == "SSPGK71230") {
                return(
                    <u>&nbsp; კაკაბაძე გიორგი &nbsp;</u>
                )
            }
            if (posts.teacherTime == "SSPNT91030") {
                return(
                    <u>&nbsp; თოდუა ნონა &nbsp;</u>
                )
            }
            if (posts.teacherTime == "SSPTG100930" || posts.teacherTime == "SSPTG71100" || posts.teacherTime == "SSPTG71230") {
                return(
                    <u>&nbsp; გაჩეჩილაძე თემური &nbsp;</u>
                )
            }
            else {
                return ""
            }
        }
        return <>
            <div ref={componentRef} className="contract" style={{fontSize: "11px"}}>
                <p style={{textAlign: "center"}}><b>ხ ე ლ შ ე კ რ უ ლ ე ბ ა #</b></p>
                <div clas="contract-head" style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                    <span>ქ. თბილისი</span>
                    <span>------  -----------------  2021  წელი</span>
                </div>
                <p style={{textAlign: "start"}}> 
                    ერთის მხრივ, აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის ქალაქ თბილისის #42 საჯარო სკოლაში მოქმედი საშაბათო სკოლის მსმენელის <u>&nbsp; {posts.firstName} {posts.lastName} &nbsp;</u> #42 საჯარო სკოლაში არარეგისტრირებულ მოსწავლის მშობლის/კანონიერი წარმომადგენლის <u>&nbsp; {posts.lawName} {posts.lawLastName} &nbsp;</u> შემდგომში `დამკვეთად` წოდებული, პირადი #<u>{posts.lawId}</u> მისამართი <u>&nbsp; {posts.address} &nbsp;</u>, საკონტაქტო ტელეფონის ნომერი <u>&nbsp; {posts.lawMobileNumber} &nbsp;</u> და მეორეს მხრივ, აკად. ი. ვეკუას სახ. ფიზიკა-მათემატიკის #42 საჯარო სკოლა, მისამართი: ჩაიკოვსკის ქ. #9, საიდენტიფიკაციო კოდი 203853856,  მისი დირექტორის ნუგზარ კედელაშვილის სახით, შემდგომში `შემსრულებლად~ წოდებული, საქართველოს კანონის ზოგადი განათლების შესახებ  მუხლი 51 პუნქტი 2-ის; საჯარო სკოლის წესდების მუხლი 18 პუნქტი 3-ის, ზოგადსაგანმანათლებლო სკოლებისათვის ეროვნული სასწავლო გეგმისა და სასკოლო სასწავლო გეგმის თანახმად,  ხელშეკრულებას დებენ მასზე, რომ დამკვეთს, ნებაყოფლობითობისა და არჩევანის თავისუფლების პრინციპების საფუძველზე, სურს მიიღოს შემსრულებლისაგან მუხლი 1-ში აღწერილი მომსახურება, ხოლო შემსრულებელი მზადაა გაუწიოს დამკვეთს ეს მომსახურება ხელშეკრულების პირობების დაცვით: 
                </p>
                <p style={{textAlign: "center"}}><strong>1. ხელშეკრულების საგანი</strong></p>
                <p style={{textAlign: "start"}}> 
                    1.1. ამ ხელშეკრულების საგანია 2021-2022 სასწავლო წლის განმავლობაში, # &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;ჯგუფის ფარგლებში,  დამკვეთის წარმომადგენლისთვის საშაბათო სკოლის პროგრამით  გათგათვალისწინებული სასწავლო კურსის წარმართვა <u>&nbsp; {posts.subject} &nbsp;</u> (საგანი) <u>&nbsp; {posts.class} &nbsp;</u> (კლასი) რომელიც მოიცავს 80 აკადემიურ საათს, ფასილიტატორ <Teacher /> (გვარი, სახელი)  შესრულებით.
                </p>
                <p style={{textAlign: "center"}}><strong>2.	მხარეთა უფლება-მოვალეობები</strong></p>
                <p style={{textAlign: "start"}}><strong>2.1. დამკვეთი:</strong></p>
                <p style={{textAlign: "start"}}>
                    2.1.1. უფლებამოსილია შემსრულებელს მოსთხოვოს მის მიერ ხელშეკრულებით ნაკისრი ვალდებულებების ჯეროვანი შესრულება; <br />
                    2.1.2. ვალდებულია <b>წინასწარ, ყოველი თვის დასაწყისში, არაუგვიანეს 10 რიცხვისა, გადაიხადოს მთლიანი თვის საფასური - 80 ლარი, მიუხედავად იმისა მსმენელი დაესწრება თუ არა მეცადინეობებს</b>.<br />
                    2.1.3. მსმენელი ვალდებულია: <br />
                    ა) დროულად გამოცხადდეს სასწავლო პროცესის დაწყებისთვის დათქმულ დროს; <br />
                    ბ) სასწავლო პროცესის მიმდინარეობის დროს აქტიურად ჩაერთოს სამუშაო პროცესში; <br />
                    გ) ხარისხიანად შეასრულოს საშინაო დავალებები; <br />
                    დ) დაიცვას სკოლის შინაგანაწესი და შეასრულოს პედაგოგის/ფასილიტატორის მითითებები; <br />
                    2.1.4. დამკვეთი (მშობელი/კანონიერი წარმომადგენელი) მორალურად და მატერიალურად პასუხს აგებს საკუთარი წარმომადგენლის (მსმენელის) მიერ განხორციელებულ ქმედებებზე. <br />
                    2.1.3. მსმენელი უფლებამოსილია: <br />
                    ა) <b>მიმდინარე სასწავლო წლის განმავლობაში,  სასწავლო კურსის  არანაკლებ 6 თვით სარგებლობის</b> (VI-X კლასების)<b>შემთხვევაში მონაწილეობა მიიღოს საშაბათო სკოლის შემაჯამებელ წერაში მხოლოდ იმ საგანში, რომლის მსმენელიც იყო</b> (წერის შედეგებიდან გამომდინარე წარმატებულ მსმენელს რეკომენდაცია ეძლევა სწავლა გააგრძელოს აკადემიკოს ი. ვეკუას სახელობის ფიზიკა-მათემატიკის ქ. თბილისის  N 42 საჯარო სკოლაში).<br />
                </p>
                <p style={{textAlign: "start"}}><b>2.2. შემსრულებელი:</b></p>
                <p style={{textAlign: "start"}}>
                    2.2.1. შემსრულებელი უფლებამოსილია: <br />
                    ა) მოითხოვოს დამკვეთის მიერ ხელშეკრულებით ნაკისრი ვალდებულებების ჯეროვანი შესრულება; <br />
                    <b>ბ) არ აანაზღაუროს დამკვეთის წარმომადგენლის (მსმენელის) მიერ გაცდენილი საათები, არც ფინანსურად და არც ფიზიკურად (აუდიტორიაში დამატებითი მუშაობის სახით);</b>  <br />
                    2.2.2. შემსრულებელი ვალდებულია: <br />
                    ა) სასწავლო კურსის ხარისხიანად და სრულფასოვნად წარმართვის მიზნით მოიზიდოს კვალიფიცირებული კადრი და უზრუნველყოს მისთვის სათანადო სამუშაო გარემოს შექმნა; <br />
                    ბ) უზრუნველყოს სასწავლო კურსის მონიტორინგი/შეფასება და მისი მუდმივი განვითარება; <br />
                    გ) კლასში მსმენელს შეუქმნას სასწავლო-სამუშაო გარემო. <br />
                </p>
                <p style={{textAlign: "center"}}><strong>3. სამუშაოთა შესრულება და ანგარიშსწორება</strong></p>
                <p style={{textAlign: "start"}}>
                    3.1. 2021-2022 სასწავლო წლისათვის წინამდებარე სასწავლო კურსი მოიცავს 80 აკადემიურ საათს. სასწავლო პროცესის პერიოდულობა შეადგენს კვირაში 2 აკადემიურ საათს, მეცადინეობები ჩატარდება თვეში ოთხჯერ,  ძირითადად შაბათობით წინასწარ განსაზღვრულ დროს. არდადაგების პერიოდში (იანვარი, ივნისი) შესაძლებელია მეცადინეობების ჩატარება შაბათისგან განსხვავებულ დღეებში, წინასწარ განსაზღვრულ დროს (საჭიროების შემთხვევაში დისტანციურად).VI-XI კლასებში ივნისში ჩატარდება 8 მეცადინეობა, ანუ 16 აკადემიური საათი. <br />
                    3.2. შემსრულებელი ვალდებულია: <br />
                    ა) წინამდებარე ხელშეკრულებით გათვალისწინებული სამუშაოები შეასრულოს დანიშნულ დროსა და ვადებში. <br />
                    ბ) დამკვეთს/მსმენელს წინასწარ გააცნოს სასწავლო კურსის განრიგი; <br />
                    <span className="contract-span-three">3.3. <b>დამკვეთი ვალდებულია აუნაზღაუროს შემსრულებელს გაწეული მომსახურების საფასური, რაც შეადგენს ყოველ კალენდარულ თვეში 80 ლარს</b>.</span><br />
                    3.4. გადახდა იწარმოებს მხოლოდ უნაღდო ანგარიშსწორებით: თიბისი ბანკი, კოდი: <b>TBCBGE22, a/a: 91TB7123736020100002</b>, საიდენტიფიკაციო კოდი: 203853856. დამკვეთი ვალდებულია საბანკო გადარიცხვის დროს გარკვევით მიუთითოს მსმენელის გვარი, სახელი, ჯგუფის ნომერი, ფასილიტატორის გვარი, სახელი და სასწავლო კურსის დასახელება.<br />
                </p>
                <p style={{textAlign: "center"}}><strong>4. ხელშეკრულების მოქმედების ვადა და შეწყვეტის პირობები</strong></p>
                <p style={{textAlign: "start"}}>
                    4.1. წინამდებარე ხელშეკრულება ძალაში შედის ხელმოწერისთანავე და/ან  სწავლების  პროცესში ჩართვისთანავე და მოქმედებს 2021_2022 სასწავლო წლის ბოლომდე, პროგრამის ამოწურვამდე. <br />
                    4.2. ხელშეკრულება შესაძლებელია ვადამდე შეწყდეს დამკვეთის მხრიდან ნებაყოფლობით თვის ბოლოს, და/ან თვის დასაწყისში, რომლის შესახებაც შემსრულებლის ინფორმირება უნდა მოხდეს წერილობითი ფორმით ათი დღით ადრე. <br />
                    4.3. ხელშეკრულების შეწყვეტის შესახებ შეტყობინების არარსებობის შემთხვევაში პროგრამის კოორდინატორის მიერ დამკვეთის მიმართ ერთი თვის განმავლობაში ორი გაფრთხილების შემდეგ ხელშეკრულება  ჩაითვლება შეწყვეტილად. <br />
                    4.4. დამკვეთის მიერ ორი კალენდარული თვის განმავლობაში თანხის გადაუხდელობის შემთხვევაში შეწყდება ცალმხრივად ხელშეკრულება. <br />
                    4.5. დამკვეთი უფლებამოსილია ათი დღით ადრე წერილობითი ან ზეპირი შეტყობინების საფუძველზე შეაჩეროს ხელშეკრულების მოქმედების ვადა მისთვის სასურველი დროით. <br />
                    4.6. ხელშეკრულების შეწყვეტა/შეჩერების შესახებ ზეპირი შეტყობინების შემთხვევაში დგება შესაბამისი ოქმი პროგრამის კოორდინატორის, ადმინისტრატორებისა და ფასილიტატორების მონაწილეობით.<br />
                    4.7. ხელშეკრულება შესაძლებელია ვადამდე შეწყდეს შემსრულებლის მხრიდან დაწესებულების რეორგანიზაციის (სტრუქტურული ცვლილებები და სხვა), ლიკვიდაციის და/ან ჯგუფში მსმენელთა რიცხვის მინიმალურზე მეტად შემცირების გამო და საქართველოს კანონმდებლობით გათვალისწინებულ სხვა შემთხვევებში, რომლის შესახებაც დამკვეთის ინფორმირება უნდა მოხდეს წერილობითი ფორმით ათი დღით ადრე. <br />
                    4.8 დამკვეთის ან შემსრულებლის მხრიდან ხელშეკრულების შეწყვეტის თარიღი ფიქსირდება ხელშეკრულებაში შესაბამისი მხარის ხელმოწერის დადასტურებით.<br />
                </p>
                <p style={{textAlign: "center"}}><strong>5. მხარეთა პასუხისმგებლობა და ფორსმაჟორი</strong></p>
                <p style={{textAlign: "start"}}>
                    5.1. მხარეები სრულად აგებენ პასუხს ვალდებულებების შეუსრულებლობის ან არაჯეროვანი შესრულებით მიყენებული ზიანისთვის.<br />
                    5.2. მხარეებს შორის წამოჭრილი ნებისმიერი საკითხი მოგვარდება ურთიერთშეთანხმების საფუძველზე, წინააღმდეგ შემთხვევაში დავა გადაწყდება საქართველოს კანონმდებლობით დადგენილი წესით.<br />
                    5.3. ფორსმაჟორული გარემოების არსებობისას გავრცელდება საქართველოს კანონმდებლობით დადგენილი რეგულაცია.<br />
                </p>
                <p style={{textAlign: "center"}}><strong>6. დამატებითი საკითხები</strong></p>
                <p style={{textAlign: "start"}}>
                    6.1. ყოველი მხარის უფლებები გამომდინარეობს მეორე მხარის ვალდებულებებიდან. შესაბამისად, მხარეს უფლება აქვს, მეორე მხარეს მოთხოვოს ვალდებულების ჯეროვანი შესრულება, ხოლო მეორე მხარის მიერ ვალდებულების შეუსრულებლობის  შემთხვევაში მიიღოს ამ ხელშეკრულებით და კანონმდებლობით გათვალისწინებული ზომები.<br />
                    6.2. ხელშეკრულებაში შეიძლება შეტანილ იქნეს ცვლილებები და/ან დამატებები მხარეთა წერილობითი შეთანხმების საფუძველზე.<br />
                    6.3. ხელშეკრულება შედგენილია ორ ეგზემპლარად, თითოეულ მხარესთან ინახება თითო ეგზემპლარი და მათ თანაბარი იურიდიული ძალა გააჩნია.<br />
                </p>
                <br />
                <div className="sigantureters" style={{display: "flex", justifyContent: "space-around"}}>
                    <span style={{width: "210px", textAlign: "center"}}>შემსრულებელი:</span>
                    <span style={{width: "210px", textAlign: "center"}}>დამკვეთი:</span>
                </div>
                <br />
                <div className="sigantures" style={{display: "flex", justifyContent: "space-around"}}>
                    <span style={{width: "210px", textAlign: "center"}}>ნუგზარ კედელაშვილი</span>
                    <span style={{width: "210px", textAlign: "center"}}>-------------------------------------------</span>
                </div>
            </div>
        </>
    }
    return (
      <div>
        <br />
        <ComponentToPrint />
        <Button variant="outlined" color="primary" type="submit" onClick={handlePrint}>ამობეჭვდა</Button>
      </div>
    );
}

export default SingleContract
