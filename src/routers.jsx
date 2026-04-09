import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Home from "./components/page/Home"
import About from "./components/page/company/About"
import Blogs from "./components/page/company/Blogs"
import Career from "./components/page/company/Career"
import CaseStudy from "./components/page/company/CaseStudy"
import Ourtem from "./components/page/company/Ourtem"
import ECommerce from "./components/page/industries/ECommerce"
import Education from "./components/page/industries/Education"
import Finance from "./components/page/industries/Finance"
import Healthcare from "./components/page/industries/Healthcare"
import Manufacturing from "./components/page/industries/Manufacturing"
import RealEstate from "./components/page/industries/RealEstate"
import Hrm from "./components/page/products/Hrm"
import Business_Analytics from "./components/page/products/Business_Analytics"
import Website_bulder from "./components/page/products/Website_bulder"
import Aisolution from "./components/page/products/AiSolution"
import Crm from "./components/page/products/crm"
import Erp from "./components/page/products/Erp"
import Seo from "./components/page/services/digital_markrting/Seo"
import Smo from "./components/page/services/digital_markrting/Smo"
import Paid_media_marketing from "./components/page/services/digital_markrting/Paid_media_marketing"
import Ecommerce_seo from "./components/page/services/digital_markrting/Ecommerce_seo"
import Content_marketing from "./components/page/services/digital_markrting/Content_marketing"
import Affiliate_marketing from "./components/page/services/digital_markrting/Affiliate_marketing"
import Video_marketing from "./components/page/services/digital_markrting/Video_marketing"
import Frontend from "./components/page/services/web_development/Frontend"
import Java from "./components/page/services/web_development/Java"
import Mysql from "./components/page/services/web_development/Mysql"
import Nodejs from "./components/page/services/web_development/Nodejs"
import Php from "./components/page/services/web_development/Php"
import Python from "./components/page/services/web_development/Python"
import Uiux from "./components/page/services/web_development/Uiux"
import Android_app from "./components/page/services/mobile_app_development/Android_app"
import Flutter_app from "./components/page/services/mobile_app_development/Flutter_app"
import Hybrid_app from "./components/page/services/mobile_app_development/Hybrid_app"
import IOS_app from "./components/page/services/mobile_app_development/IOS_app"
import OTT_appd_evelopment from "./components/page/services/mobile_app_development/OTT_appd_evelopment"
import React_native from "./components/page/services/mobile_app_development/React_native"
import Bigcommerce from "./components/page/services/e_commerce_development/Bigcommerce"
import Custom_ecommerce from "./components/page/services/e_commerce_development/Custom_ecommerce"
import Prestashop from "./components/page/services/e_commerce_development/Prestashop"
import Shopify from "./components/page/services/e_commerce_development/Shopify"
import Woocommerce from "./components/page/services/e_commerce_development/Woocommerce"
import Wordpress from "./components/page/services/e_commerce_development/Wordpress"
import Product_development from "./components/page/services/salesforce_development/Product_development"
import Sales_cloud from "./components/page/services/salesforce_development/Sales_cloud"
import Service_cloud from "./components/page/services/salesforce_development/Service_cloud"
import AI_and_mL from "./components/page/services/digital_transformation/AI_and_mL"
import Big_data from "./components/page/services/digital_transformation/Big_data"
import Blockchain from "./components/page/services/digital_transformation/Blockchain"
import Cloud_engineering from "./components/page/services/digital_transformation/Cloud_engineering"
import Data_forecasting from "./components/page/services/digital_transformation/Data_forecasting"
import Iot from "./components/page/services/digital_transformation/Iot"
import Devops from "./components/page/services/digital_transformation/Devops"
import Magento from "./components/page/services/e_commerce_development/Magento"
import Consulting from "./components/page/services/salesforce_development/Consulting"


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
          <Route path="/casestudy" element={<CaseStudy />} />
          <Route path="/ourteam" element={<Ourtem />} />
           {/* ............Industries.......... */}
          <Route path="/ecommerce" element={<ECommerce />} />
          <Route path="/education" element={<Education/>} />
          <Route path="/finance" element={<Finance />} />
           <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/menufacturing" element={<Manufacturing />} />
          <Route path="/realstate" element={<RealEstate />} />
          {/* .............product............... */}
          <Route path="/crm" element={<Crm />} />
          <Route path="/erp" element={<Erp /> } />
          <Route path="/hrm" element={<Hrm />} />
          <Route path="/aisolutions" element={<Aisolution />} />
          <Route path="/businessanalytics" element={<Business_Analytics />} />
          <Route path="/websitebuilder" element={<Website_bulder />} />
          {/* ....................digital markrting............ */}
          <Route path="/seo" element={<Seo />} />
          <Route path="/smo" element={<Smo />} />
          <Route path="/paid-media-marketing" element={<Paid_media_marketing />} />
          <Route path="/ecommerce-seo" element={<Ecommerce_seo />} />
          <Route path="/content-marketing" element={<Content_marketing />} />
          <Route path="/affiliate-marketing" element={<Affiliate_marketing />} />
          <Route path="/video-marketing" element={<Video_marketing />} />
          {/* ..............Web Development............. */}
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/java" element={<Java />} />
          <Route path="/mysql" element={<Mysql />} />
          <Route path="/nodejs" element={<Nodejs />} />
          <Route path="/php" element={<Php />} />
          <Route path="/python" element={<Python />} />
          <Route path="/ui-ux" element={<Uiux />} />
          {/* ..................Mobile App Development............ */}
          <Route path="/android-app" element={<Android_app />} />
          <Route path="/flutter-app" element={<Flutter_app />} />
          <Route path="/hybrid-app" element={<Hybrid_app />} />
          <Route path="/ios-app" element={<IOS_app />} />
          <Route path="/ott-app-development" element={<OTT_appd_evelopment />} />
          <Route path="/react-native" element={<React_native />} />
          {/* ..................Ecommerce Development............... */}
          <Route path="/bigcommerce" element={<Bigcommerce />} />
          <Route path="/custom-ecommerce" element={<Custom_ecommerce />} />
          <Route path="/magento" element={<Magento />} />
          <Route path="/prestashop" element={<Prestashop />} />
          <Route path="/shopify" element={<Shopify />} />
          <Route path="/woocommerce" element={<Woocommerce />} />
          <Route path="/wordpress" element={<Wordpress />} />
          {/* .....................Salesforce Development............. */}
          <Route path="/salesforce-consulting" element={<Consulting />} />
          <Route path="/salesforce-product-development" element={<Product_development />} />
          <Route path="/sales-cloud" element={<Sales_cloud />} />
          <Route path="/service-cloud" element={<Service_cloud />} />
          {/* ...................Digital Transformation................ */}
          <Route path="/ai-ml" element={<AI_and_mL />} />
          <Route path="/big-data" element={<Big_data />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/cloud-engineering" element={<Cloud_engineering />} />
          <Route path="/data-forecasting" element={<Data_forecasting />} />
          <Route path="/iot" element={<Iot />} />
          <Route path="/devops" element={<Devops />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
