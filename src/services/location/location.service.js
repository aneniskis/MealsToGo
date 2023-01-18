import camelize from "camelize";

// import { locations } from "../../../functions/geocode/geocode.mock";

export const locationRequest = async (searchTerm) => {
  const res = await fetch(
    `http://64a1-78-57-124-214.ngrok.io/mealstogo-aa8e1/us-central1/geocode?city=${searchTerm}`
  );
  // console.log(res.json());
  return await res.json();
};

// export const locationRequest = (searchTerm) => {
//   return new Promise((resolve, reject) => {
//     const locationMock = locations[searchTerm];
//     if (!locationMock) {
//       reject("not found");
//     }
//     resolve(locationMock);
//   });
// };

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
