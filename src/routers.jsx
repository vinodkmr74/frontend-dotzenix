import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Home from "./components/page/Home"
import About from "./components/page/company/About"
import Blogs from "./components/page/company/Blogs"
import Career from "./components/page/company/Career"
import ECommerce from "./components/page/industries/ECommerce"
import Education from "./components/page/industries/Education"
import Healthcare from "./components/page/industries/Healthcare"
import Manufacturing from "./components/page/industries/Manufacturing"
import RealEstate from "./components/page/industries/RealEstate"
import Hrm from "./components/page/products/Hrm"
import Business_Analytics from "./components/page/products/Business_Analytics"
import Website_bulder from "./components/page/products/Website_bulder"
import Erp from "./components/page/products/Erp"
import Seo from "./components/page/services/digital_markrting/Seo"
import Smo from "./components/page/services/digital_markrting/Smo"
import Content_marketing from "./components/page/services/digital_markrting/Content_marketing"
import Affiliate_marketing from "./components/page/services/digital_markrting/Affiliate_marketing"
import Frontend from "./components/page/services/web_development/Frontend"
import Uiux from "./components/page/services/web_development/Uiux"
import Android_app from "./components/page/services/mobile_app_development/Android_app"
import IOS_app from "./components/page/services/mobile_app_development/IOS_app"
import OTT_appd_evelopment from "./components/page/services/mobile_app_development/OTT_appd_evelopment"
import Custom_ecommerce from "./components/page/services/e_commerce_development/Custom_ecommerce"
import Shopify from "./components/page/services/e_commerce_development/Shopify"
import Wordpress from "./components/page/services/e_commerce_development/Wordpress"
import AI_and_mL from "./components/page/services/digital_transformation/AI_and_mL"
import Cloud_engineering from "./components/page/services/digital_transformation/Cloud_engineering"
import Devops from "./components/page/services/digital_transformation/Devops"
import Crms from "./components/page/products/Crms"
import Ai_Solution from "./components/page/products/Ai_Solution"
import Backend from "./components/page/services/web_development/Backend"
import Database from "./components/page/services/web_development/Database"
import Readmore from "./components/page/company/Readmore"


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          {/* .......aboute.......... */}
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/readmore" element={<Readmore />} />

           {/* ............Industries.......... */}
          <Route path="/ecommerce" element={<ECommerce />} />
          <Route path="/education" element={<Education/>} />
           <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/menufacturing" element={<Manufacturing />} />
          <Route path="/realstate" element={<RealEstate />} />
          {/* .............product............... */}
          <Route path="/crm" element={<Crms />} />
          <Route path="/erp" element={<Erp /> } />
          <Route path="/hrm" element={<Hrm />} />
          <Route path="/aisolutions" element={<Ai_Solution />} />
          <Route path="/businessanalytics" element={<Business_Analytics />} />
          <Route path="/websitebuilder" element={<Website_bulder />} />
          {/* ....................digital markrting............ */}
          <Route path="/seo" element={<Seo />} />
          <Route path="/smo" element={<Smo />} />
          <Route path="/content-marketing" element={<Content_marketing />} />
          <Route path="/affiliate-marketing" element={<Affiliate_marketing />} />
          {/* ..............Web Development............. */}
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend />}/>
          <Route path="/database" element={<Database />} />
          <Route path="/ui-ux" element={<Uiux />} />
          {/* ..................Mobile App Development............ */}
          <Route path="/android-app" element={<Android_app />} />
          <Route path="/ios-app" element={<IOS_app />} />
          <Route path="/ott-app-development" element={<OTT_appd_evelopment />} />
          {/* ..................Ecommerce Development............... */}
          <Route path="/custom-ecommerce" element={<Custom_ecommerce />} />
          <Route path="/shopify" element={<Shopify />} />
          <Route path="/wordpress" element={<Wordpress />} />        
          {/* ...................Digital Transformation................ */}
          <Route path="/ai-ml" element={<AI_and_mL />} />
          <Route path="/cloud-engineering" element={<Cloud_engineering />} />
          {/* <Route path="/iot" element={<Iot />} /> */}
          <Route path="/devops" element={<Devops />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
