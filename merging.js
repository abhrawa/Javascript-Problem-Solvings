/**
 * Step 1- Take userlist and orderlist data.
 * Step 2- Iterate a loop on User data.
 * Step 3- Iterate a nested loop on Order list.
 * Step 4- Maintain Empty Object, Result array and productlist array.
 * Step 5- In first loop first assign the userid, Name and Empty array in object.
 * Step 6- In second loop apply the condition to check user id and product's user id is matching or not.
 * Step 7- If matching then push the product in the product list array.
 * Step 8- Push whole object into an result array.
 * Step 9- Return the result array.
 */

const user = [
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

const order = [
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
let newarr = [];
function dataValidation(users, orders) {
  for (let i = 0; i < users.length; i++) {
    let newobj = {
      userId: users[i].id,
      name: users[i].name,
      products: [],
    };
    console.log(newobj);
    for (let j = 0; j < orders.length; j++) {
      if (users[i].id === orders[j].user.id) {
        let productobj = {
          Productid: orders[j].id,
          productName: orders[j].productName,
        };
        // console.log(productobj);
        newobj.products.push(productobj);
        // console.log("pl", productlist);
      }
    }
    newarr.push(newobj);
  }
  return newarr;
}
console.log(dataValidation(user, order));
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
