// import { mocks, mockImages } from "./mock";
import camelize from "camelize";
import { host } from "../../utils/env";
// export const restaurantsRequest = (location) => {
//   return new Promise((resolve, reject) => {
//     const mock = mocks[location];
//     if (!mock) {
//       reject("not found");
//     }
//     resolve(mock);
//   });
// };
export const restaurantsRequest = async (location) => {
  const res = await fetch(
    `https://us-central1-mealstogo-aa8e1.cloudfunctions.net/placesNearby?location=${location}`
  );
  return await res.json();
};
// const restaurantsTransform = ({ results = [] }) => {
//   const newResult = camelize(result);
//   return newResult;
// };
// restaurantsRequest()
//   .then(restaurantsTransform)
//   .then((transformedResponse) => {
//     console.log(transformedResponse);
//   })
//   .catch((err) => {
//     console.log("error");
//   });
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    // restaurant.photos = restaurant.photos.map((p) => {
    //   return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    // });

    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
    };
  });

  return camelize(mappedResults);
};
