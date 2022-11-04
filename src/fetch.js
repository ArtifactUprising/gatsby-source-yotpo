import {
  getCachedData
} from "./yotpo";

export default async (assetsUrl) => {
  console.time(`Fetch Yotpo reviews`);
  console.log(`Starting to fetch cached reviews from Yotpo`);

  const data = await getCachedData(assetsUrl);

  console.timeEnd(`Fetch Yotpo reviews`);

  return data;
};
