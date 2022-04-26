const users = [
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

const orders = [
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
    user: {
      id: 3,
    },
  },
  {
    id: 3,
    productName: "Asus Laptop",
    user: {
      id: 1,
    },
  },
];
const Results = [];
function matchUserOrder(user, order) {
  for (let i = 0; i < user.length; i++) {
    const userorder = {
      userId: user[i].id,
      userName: user[i].name,
      products: [],
    };
    for (let j = 0; j < order.length; j++) {
      if (user[i].id === order[j].user.id) {
        const productdetails = {
          productId: order[j].id,
          productName: order[j].productName,
        };
        userorder.products.push(productdetails);
        console.log(userorder);
      }
    }
    Results.push(userorder);
  }
  return Results;
}
console.log(matchUserOrder(users, orders));

// const results = [
//   {
//     userId: 1,
//     name: "Arun",
//     products: [
//       {
//         productId: 1,
//         productName: "iPhone 13 Pro Max",
//       },
//       {
//         productId: 3,
//         productName: "Asus Laptop",
//       },
//     ],
//   },
//   {
//     userId: 2,
//     name: "Anup",
//     products: [],
//   },

//   {
//     userId: 3,
//     name: "Avian",
//     products: [
//       {
//         productId: 2,
//         productName: "Lenovo Mobile",
//       },
//     ],
//   },
// ];
