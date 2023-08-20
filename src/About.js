import { useNavigate } from "react-router-dom";
function About() {
    const navigate = useNavigate()
    // document.body.style.backgroundColor="pink";
    return (
        <div style={{fontSize:"30px"}}>
            <br/><h1>About Our Shop</h1><br/>
            <p >
                A virtual perfume and cosmetics store that enables the purchase of luxury perfumes at fair prices through an online purchase,<br /><br/>
                With an emphasis on an exceptional user experience, and at affordable prices because you deserve the best!!<br /><br/>
                Our website was built after a lot of thought and out of a desire to give our customers a comfortable and pleasant shopping experience.<br /><br/>
                Navigating the site is simple and accessible, each perfume is displayed,information about each item allows safe and relaxed shopping.<br /><br/>
                On the site you can find the best of the world's leading perfumes, rare perfumes with a unique launch, in a variety of well-known and beloved fragrances.<br /><br/>
                We guarantee our customers original products that will be imported directly from the brand house <br /><br/> And at cheaper prices than the existing market prices!!!<br /><br/>
            </p>
            

        </div>
    )



}
export default About

