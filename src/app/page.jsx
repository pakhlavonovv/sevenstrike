import Header from '../app/components/header'
import Carousel from '../app/components/carousel'
import Join from '../app/components/join'
import GetServer from '../app/components/get-server'
import Community from '../app/components/community'
import Footer from '../app/components/footer'
const Page = () => {
  return (
    <div>
      <Header/>
      <div className="mt-[50px]">
      <Carousel/>
      </div>
      <div className="mt-[50px]">
      <Join/>
      </div>
      <div className="mt-[50px]">
      <GetServer/>
      </div>
      <div className="lg:mt-[50px]">
      <Community/>
      </div>
      <div className="lg:mt-[50px]">
      <Footer/>
      </div>
    </div>
  )
}

export default Page