import { FaInstagram, FaHeadset, FaCreditCard } from "react-icons/fa";
import { AiOutlineDollarCircle } from "react-icons/ai";
import ServiceCard from "./serviceCard";

const services = [
  {
    id: 1,
    imgIcon: <FaInstagram  />,
    title: "Free Shipping",
    paragraph: "Free shipping for order above $150",
  },
  {
    id: 2,
    imgIcon: <AiOutlineDollarCircle  />,
    title: "Money Guarantee",
    paragraph: "Within 30 days for an exchange",
  },
  {
    id: 3,
    imgIcon: <FaHeadset  />,
    title: "Online Support",
    paragraph: "24 hours a day, 7 days a week",
  },
  {
    id: 4,
    imgIcon: <FaCreditCard  />,
    title: "Flexible Payment",
    paragraph: "Pay with multiple credit cards",
  },
];

const Services = () => {
  return (
    <div className="container sm:my-[100px] my-[60px] grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 ">
      {services.map((service, idx) => (
       <ServiceCard key={idx} service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default Services;
