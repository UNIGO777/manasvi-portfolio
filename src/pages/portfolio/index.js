import React from "react";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Heading from "../../components/Heading";
import Card from "../../components/card";
import OurServices from "../../components/our services";
import Footer from "../../components/footer.js";
import axios from "axios";
import { useState, useEffect } from "react";
import logo from "../../imgvid/logo.png";






const NavbarData = {
  firstHeader: {
    contectInfo: [
      {
        icon: (
          <svg
            className="w-3 md:w-4 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
          </svg>
        ),
        title: "Contact 1",
        text: "manasvitech01@gmail",
      },
      {
        icon: (
          <svg
            className="w-3 md:w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22 17.0022C21.999 19.8731 19.9816 22.2726 17.2872 22.8616L16.6492 20.9476C17.8532 20.7511 18.8765 20.0171 19.4649 19H17C15.8954 19 15 18.1046 15 17V13C15 11.8954 15.8954 11 17 11H19.9381C19.446 7.05369 16.0796 4 12 4C7.92038 4 4.55399 7.05369 4.06189 11H7C8.10457 11 9 11.8954 9 13V17C9 18.1046 8.10457 19 7 19H4C2.89543 19 2 18.1046 2 17V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V12.9987V13V17V17.0013V17.0022ZM20 17V13H17V17H20ZM4 13V17H7V13H4Z"></path>
          </svg>
        ),
        title: "Contact 2",
        text: "Support",
      },
    ],
    socialLinks: [
      {
        icon: (
          <svg
            className="w-3 md:w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
          </svg>
        ),
        title: "Facebook",
        link: "https://www.facebook.com/profile.php?id=61565966866646",
      },
      
      {
        icon: (
          <svg
            className="w-3 md:w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
          </svg>
        ),
        title: "instagram",
        link: "https://www.instagram.com/manasvi.technologies/?hl=en",
      },
      {
        icon: (
          <svg
            className="w-3 md:w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
          </svg>
        ),
        title: "LinkedIn",
        link: "https://www.linkedin.com/company/manasvi-technologies-opc-pvt-ltd",
      },
    ],
  },
  logo: logo,
  links: [
    { title: "Home", link: "https://manasviportfolio.online/" },
    { title: "Products", link: "https://manasviportfolio.online/" },
    { title: "Services+", link: "https://manasviportfolio.online/" },
    { title: "Clients", link: "https://manasviportfolio.online/" },
  ],
  button: {
    text: "Contect Us",
    link: "https://manasviportfolio.online/",
  },
};



const PortFolio = () => {
  const [products, setProducts] = useState([]);
  const [base, setBase] = useState('product base');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(' /api/projects');
        setProducts(response.data);
      } catch(error) {
        alert("Error fetching products:", error);
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (Array.isArray(products)) {
      const filteredProductss = products.filter(item => {
        if(base === 'product base') {
          return item.projectType === 'product';
        } else {
          return item.projectType === 'service';
           }
       });
       setFilteredProducts(filteredProductss);
     } else {
       console.error("Expected products to be an array, but got:", products);
     }
   }, [base, products]);

  return (
    <div>
      <Navbar NavbarData={NavbarData} />
      <Hero />
      <Heading
        title="Expect Nothing Less Than Perfect"
        subtitle="Apprize infotech Deliver Client’s Idea Into Excellent Result!"
      />
      <div className="flex justify-center w-full gap-20 mb-10">
        <div className=" flex justify-center items-center gap-2 border-2 border-gray-100 shadow-md rounded-3xl">
          <div className={`${base === 'product base' ? 'bg-blue-500 text-white rounded-l-3xl border-white' : 'text-gray-500'} p-2 px-4 uppercase rounded-md cursor-pointer`} onClick={() => setBase('product base')}>products base</div>
          <div className={`${base === 'service base' ? 'bg-blue-500 text-white rounded-r-3xl border-white' : 'text-gray-500'} p-2 px-4 uppercase rounded-md cursor-pointer`} onClick={() => setBase('service base')}>services base</div>

        </div>
      </div>
      {filteredProducts.length > 0 ? <div className="flex flex-col gap-20">
        {filteredProducts?.map((item, index) => {
          return <Card index={index} key={index} item={item} />;
        })}
      
      </div> : <div className="flex justify-center mb-20 items-center">
        <h1 className="text-2xl font-bold">No products found</h1>
      </div>}
      <OurServices/>

      <Footer logo={logo} />
    </div>
  );
};

export default PortFolio;
