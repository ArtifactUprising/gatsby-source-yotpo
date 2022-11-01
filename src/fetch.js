import {
  getCachedData
} from "./yotpo";

export default async ({ appKey, appSecret }) => {
  console.time(`Fetch Yotpo reviews`);
  console.log(`Starting to fetch cached reviews from Yotpo`);

  const data = await getCachedData();

  console.timeEnd(`Fetch Yotpo reviews`);

  return data;
};
