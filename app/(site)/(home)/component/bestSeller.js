import ProductCard from "../../shop/productCard";

const bestSeller = [
  {
    id: 1,
    image: "/product1.png",
    title: "Roadstar",
    description: "Printed Cotton T-Shirt",
    price: 150,
    discount: "$10",
    categoryItem: "Men",
    color: "Red",
    sub_description:
      "Crafted from 100% premium cotton, this printed t-shirt offers unmatched breathability and comfort. Whether you're running errands or relaxing at home, its soft texture and vibrant print make it your everyday essential. The design is versatile, ensuring it pairs easily with jeans, shorts, or joggers. It's the perfect addition to your casual wardrobe for effortless style.",
  },
  {
    id: 2,
    image: "/product2.png",
    title: "Allen Solly",
    description: "Women Textured Handheld Bag",
    price: 150,
    discount: "$5",
    categoryItem: "Men",
    color: "Red",
    sub_description:
      "Engineered for performance, these running shoes feature cushioned soles and breathable mesh. Ideal for daily workouts, jogging, or a sporty lifestyle, they provide exceptional comfort with every step. The sleek design enhances mobility while ensuring your feet stay cool and supported during intense physical activities.",
  },
  {
    id: 3,
    image: "/product3.png",
    title: "Louis Philippe Sport",
    description: "Polo Collar T-Shirt",
    price: 130,
    discount: "$15",
    categoryItem: "Women",
    color: "Red",
    sub_description:
      "Made with breathable fabric and a smart polo design, this t-shirt delivers effortless style. It pairs well with jeans or chinos for a laid-back yet polished look. Whether you're at a sports game or having a casual day out, this polo t-shirt adds a smart touch to your appearance. It's a wardrobe staple that blends comfort with versatility.",
  },
  {
    id: 4,
    image: "/product4.png",
    title: "Adidas",
    description: "Men adi-dash Running Shoes",
    price: 100,
    discount: "$10",
    categoryItem: "Women",
    sub_description:
      "This chic handbag features elegant textures and fine craftsmanship. Spacious and durable, it's perfect for daily use or special events, adding a touch of sophistication to any outfit. With its comfortable handle and secure zippers, it's both practical and stylish. Whether you're going to work or a party, this bag enhances your look while holding your essentials with ease.",
  },
  {
    id: 5,
    image: "/product5.png",
    title: "Trendyol",
    description: "Floral Embroidered Maxi Dress",
    price: 180,
    discount: "$8",
    categoryItem: "Women",
    sub_description:
      "This chic handbag features elegant textures and fine craftsmanship. Spacious and durable, it's perfect for daily use or special events, adding a touch of sophistication to any outfit. With its comfortable handle and secure zippers, it's both practical and stylish. Whether you're going to work or a party, this bag enhances your look while holding your essentials with ease.",
  },
  {
    id: 6,
    image: "/product6.png",
    title: "YK Disney",
    description: "Girls Pink Moana Printed Dress",
    price: 100,
    discount: "$5",
    categoryItem: "Men",
    color: "Red",
    size: "L",
    sub_description:
      "This chic handbag features elegant textures and fine craftsmanship. Spacious and durable, it's perfect for daily use or special events, adding a touch of sophistication to any outfit. With its comfortable handle and secure zippers, it's both practical and stylish. Whether you're going to work or a party, this bag enhances your look while holding your essentials with ease.",
  },
  {
    id: 7,
    image: "/product7.png",
    title: "US Polo",
    description: "Tailored Cotton Casual Shirt",
    price: 20,
    discount: "$12",
    categoryItem: "Men",
    size: "L",
    sub_description:
      "This chic handbag features elegant textures and fine craftsmanship. Spacious and durable, it's perfect for daily use or special events, adding a touch of sophistication to any outfit. With its comfortable handle and secure zippers, it's both practical and stylish. Whether you're going to work or a party, this bag enhances your look while holding your essentials with ease.",
  },
  {
    id: 8,
    image: "/product8.png",
    title: "Zyla",
    description: "Women Sandals",
    price: 150,
    discount: "$7",
    categoryItem: "Men",
    color: "Red",
    size: "XL",
    sub_description:
      "This chic handbag features elegant textures and fine craftsmanship. Spacious and durable, it's perfect for daily use or special events, adding a touch of sophistication to any outfit. With its comfortable handle and secure zippers, it's both practical and stylish. Whether you're going to work or a party, this bag enhances your look while holding your essentials with ease.",
  },
  {
    id: 9,
    image: "/product6.png",
    title: "Nike",
    description: "Men Running Shoes",
    price: 250,
    discount: "$20",
    categoryItem: "Men",
    color: "Black",
    sub_description:
      "This chic handbag features elegant textures and fine craftsmanship. Spacious and durable, it's perfect for daily use or special events, adding a touch of sophistication to any outfit. With its comfortable handle and secure zippers, it's both practical and stylish. Whether you're going to work or a party, this bag enhances your look while holding your essentials with ease.",
  },
  {
    id: 10,
    image: "/product5.png",
    title: "Reebok",
    description: "Women Fitness Leggings",
    price: 85,
    discount: "$10",
    categoryItem: "Women",
    color: "Blue",
    sub_description:
      "This chic handbag features elegant textures and fine craftsmanship. Spacious and durable, it's perfect for daily use or special events, adding a touch of sophistication to any outfit. With its comfortable handle and secure zippers, it's both practical and stylish. Whether you're going to work or a party, this bag enhances your look while holding your essentials with ease.",
  },
  {
    id: 11,
    image: "/product5.png",
    title: "Reebok",
    description: "Women Fitness Leggings",
    price: 85,
    discount: "$10",
    categoryItem: "Women",
    color: "Blue",
    sub_description:
      "This chic handbag features elegant textures and fine craftsmanship. Spacious and durable, it's perfect for daily use or special events, adding a touch of sophistication to any outfit. With its comfortable handle and secure zippers, it's both practical and stylish. Whether you're going to work or a party, this bag enhances your look while holding your essentials with ease.",
  },
];

const BestSeller = () => {
  
  return (
    <div className="container lg:mt-[150px] md:mt-[120px] mt-[60px]">
      <h1 className="title text-center mb-3 sm:mb-5 md:mb-10 lg:mb-[50px]">
        Our Bestseller
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 rounded-md xl:gap-[30px] md:gap-5 gap-3">
        {bestSeller.slice(0, 8).map((bestSellers, idx) => <ProductCard key={idx} bestSellers={bestSellers}></ProductCard>)}
      </div>
    </div>
  );
};

export default BestSeller;
