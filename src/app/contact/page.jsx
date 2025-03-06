import Footer from "../components/footer"
import Header from "../components/header"
import ContactForm from '../components/contact-form'
const Page = () => {
  return (
    <div>
        <Header/>
        <div className="mt-[50px]">
            <ContactForm/>
        </div>
        <div className="mt-[50px]">
            <Footer/>
        </div>
    </div>
  )
}

export default Page