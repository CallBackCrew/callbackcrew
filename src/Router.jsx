import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeOne from "./components/HomeOne/index.jsx";
import HomeOneBoxed from "./components/HomeOneBoxed/index.jsx";
import HomeTwo from "./components/HomeTwo/index.jsx";
import HomeTwoBoxed from "./components/HomeTwoBoxed/index.jsx";
import HomeThree from "./components/HomeThree/index.jsx";
import HomeThreeBoxed from "./components/HomeThreeBoxed/index.jsx";
import HomeFour from "./components/HomeFour/index.jsx";
import HomeFourBoxed from "./components/HomeFourBoxed/index.jsx";
import HomeFive from "./components/HomeFive/index.jsx";
import HomeFiveBoxed from "./components/HomeFiveBoxed/index.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import Services from "./components/ServicesPages/index.jsx";
import Projects from "./components/ProjectsPages/index.jsx";
import News from "./components/NewsPages/index.jsx";
import NewsDetails from "./components/NewsPages/NewsDetails.jsx";
import TeamDetails from "./components/TeamPages/TeamDetails.jsx";
import Contact from "./components/ContactPages/Contact.jsx";
import Testimonial from "./components/TestimonialPages/Testimonial.jsx";
import ProjectsDetails from "./components/ProjectsPages/ProjectsDetails.jsx";
import ServicesDetails from "./components/ServicesPages/ServicesDetails.jsx";
import Pricing from "./components/PricingPages/Pricing.jsx";
import PricingSwitcher from "./components/PricingPages/PricingSwitcher.jsx";
import Team from "./components/TeamPages/index.jsx";
import Layout from "./components/Helper/Layout.jsx";
import Faq from "./components/FaqPages/Faq.jsx";
import Error from "./components/ErrorPages/Error.jsx";
import Products from "./components/ShopPages/Products.jsx";
import ProductsSidebar from "./components/ShopPages/ProductsSidebar.jsx";
import ProductsDetails from "./components/ShopPages/ProductsDetails.jsx";
import Cart from "./components/ShopPages/Cart.jsx"
import Checkout from "./components/ShopPages/Checkout.jsx";
import NewsDetailTwo from "./components/NewsPages/NewsDetailsTwo.jsx";
import NewsDetailThree from "./components/NewsPages/NewsDetailsThree.jsx";
import ProjectsDetails1 from "./components/ProjectsPages/ProjectDetails1.jsx";
import ProjectsDetails2 from "./components/ProjectsPages/ProjectDetails2.jsx";
import ProjectsDetails3 from "./components/ProjectsPages/ProjectDetails3.jsx";
import ProjectsDetails4 from "./components/ProjectsPages/ProjectDetails4.jsx";
import ProjectsDetails5 from "./components/ProjectsPages/ProjectDetails5.jsx";
import ServicesDetails1 from "./components/ServicesPages/ServicesDetails1.jsx";
import ServicesDetails3 from "./components/ServicesPages/ServicesDetails3.jsx";
import ServicesDetails4 from "./components/ServicesPages/ServicesDetails4.jsx";
import ServicesDetails2 from "./components/ServicesPages/ServicesDetails2.jsx";
import ServicesDetails5 from "./components/ServicesPages/ServicesDetails5.jsx";


const router = createBrowserRouter([
  {
    path:'/',
    Component:Layout,
    children:[
      {
        // index:true,
        path: "/",
        element: <HomeOne />
      },
     
      {
        path: "/home-one-boxed",
        element: <HomeOneBoxed />
      },
     
      {
        path: "/home-two",
        element: <HomeTwo />
      },
      {
        path: "/home-two-boxed",
        element: <HomeTwoBoxed />
      },
      {
        index:true,
        // path: "/home-three",
        element: <HomeThree />
      },
      {
        index:true,
        path: "/home-three-boxed",
        element: <HomeThreeBoxed />
      },
      {
        path: "/home-four",
        element: <HomeFour />
      },
      {
        path: "/home-four-boxed",
        element: <HomeFourBoxed />
      },
      {
        path: "/home-five",
        element: <HomeFive />
      },
      {
        path: "/home-five-boxed",
        element: <HomeFiveBoxed />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: "/products-sidebar",
        element: <ProductsSidebar />
      },
      {
        path: "/products-details",
        element: <ProductsDetails />
      },
      {
        path: "/news",
        element: <News />
      },
      {
        path: "/news-detailsb1",
        element: <NewsDetails />
      },
      {
        path: "/news-detailsb2",
        element: <NewsDetailTwo />
      },
      {
        path: "/news-detailsb3",
        element: <NewsDetailThree />
      },
      {
        path: "/contact-pages",
        element: <Contact Pages />
      },
      {
        path: "/team",
        element: <Team />
      },
      {
        path: "/team-details",
        element: <TeamDetails />
      },
      {
        path: "/testimonial",
        element: <Testimonial />
      },
      {
        path: "/projects-details",
        element: <ProjectsDetails />
      },
      {
        path: "/projects-details1",
        element: <ProjectsDetails1 />
      },
      {
        path: "/projects-details2",
        element: <ProjectsDetails2 />
      },
      {
        path: "/projects-details3",
        element: <ProjectsDetails3 />
      },
      {
        path: "/projects-details4",
        element: <ProjectsDetails4 />
      },
      {
        path: "/projects-details5",
        element: <ProjectsDetails5 />
      },
      {
        path: "/Faq",
        element: <Faq />
      },
      {
        path: "/service-details",
        element: <Services  Details />
      },
      {
        path: "/service-details1",
        element: <ServicesDetails1 />
      },
      {
        path: "/service-details2",
        element: <ServicesDetails2 />
      },
      {
        path: "/service-details3",
        element: <ServicesDetails3 />
      },
      {
        path: "/service-details4",
        element: <ServicesDetails4 />
      },
      {
        path: "/service-details5",
        element: <ServicesDetails5 />
      },
      {
        path: "/pricing",
        element: <Pricing />
      },
      {
        path: "/pricing-switcher",
        element: <PricingSwitcher />
      },
     
      {
        path: "*",
        element: <Error />
      },
    ]
  }
]);

function Router() {
  return (
      <>
        <RouterProvider router={router} />
      </>
  );
}

export default Router;
