import {
  getAccessToken,
  allReviews,
  allProductBottomlines,
  allSiteBottomlines,
} from "./yotpo";

export default async ({ appKey, appSecret }) => {
  console.time(`Fetch Yotpo reviews`);
  console.log(`Starting to fetch reviews from Yotpo`);

  const accessToken = await getAccessToken({
    appKey,
    appSecret,
  });

  if (!accessToken) {
    throw new Error('Access token not found!!!');
  }
  const reviews = await pagedGet(allReviews, {
    appKey,
    accessToken,
  });

  const productBottomlines = await pagedGet(allProductBottomlines, {
    appKey,
    accessToken,
  });

  const siteBottomlines = await allSiteBottomlines({
    appKey,
    accessToken,
    page: 1,
    pageSize: 1,
  });

  console.timeEnd(`Fetch Yotpo reviews`);

  return {
    reviews,
    productBottomlines,
    siteBottomlines,
  };
};

async function pagedGet(
  method,
  options,
  page = 1,
  pageSize = 75,
  aggregatedResponse = null
) {
  const reviews = await method({
    ...options,
    page,
    pageSize,
  });
  if (!aggregatedResponse) {
    aggregatedResponse = reviews;
  } else {
    aggregatedResponse = aggregatedResponse.concat(reviews);
  }

  if (reviews && reviews.length > 0) {
    return pagedGet(method, options, page + 1, pageSize, aggregatedResponse);
  }

  return aggregatedResponse;
}
