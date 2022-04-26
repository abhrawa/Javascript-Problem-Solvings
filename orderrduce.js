//@ts-check
const customer = [
  {
    id: 1,
    name: "Arun",
    city: "Morena",
    state: "MP",
  },
  {
    id: 2,
    name: "Anup",
    city: "Morena",
    state: "MP",
  },
  {
    id: 3,
    name: "Avian",
    city: "Morena",
    state: "MP",
  },
];

const orde = [
  {
    id: 1,
    productName: "iPhone 13 Pro Max",
    user: {
      id: 1,
    },
  },
  {
    id: 2,
    productName: "Lenovo Mobile",
  },
  {
    id: 3,
    productName: "Asus Laptop",
    user: {
      id: 1,
    },
  },
];
const orderdetails = customer.reduce(function (acc, current) {
  const userorder = {
    userId: current.id,
    userName: current.name,
    products: [],
  };
  const productlst = orde.filter(function (pdlst) {
    if (pdlst.user !== undefined && current.id === pdlst.user.id) {
      const productdetails = {
        pd: { productId: pdlst.id, productName: pdlst.productName },
      };
      userorder.products.push(productdetails.pd);
    }
  }, []);
  acc.push(userorder);

  return acc;
}, []);
console.log(orderdetails);
