//youtube id UCsXVk37bltHxD1rDPwtNM8Q
const url =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCsXVk37bltHxD1rDPwtNM8Q&part=snippet%2Cid&order=date&maxResults=50";

const content = null || document.getElementById("video-list");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5b5e11a75cmshdfc3aa7839165b2p14ef90jsn04fd3043e856",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(url);
    let view = `
    ${videos.items
      .map(
        (video) => `
        <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
          >
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full" />
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    </a>
    `
      )
      .join("")}
    `;
    console.log(videos);
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
