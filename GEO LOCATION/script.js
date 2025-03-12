console.log("OK");

const geoResponse = {
  values: {
    address: null,
    city: null,
    region: null,
    region_code: null,
    country_name: null,
    continent: null,
    flag: {
      svg: null,
      png_16: null,
    },
  },
  result: null,
};

const body = {
  address: document.querySelector(".address"),
  city: document.querySelector(".city"),
  region: document.querySelector(".region"),
  region_code: document.querySelector(".region_code"),
  country_name: document.querySelector(".country_name"),
  flag: document.querySelector(".flag"),
  continent: document.querySelector(".continent"),
  map_container: document.querySelector(".map-container"),
};

async function requestResponse() {
  try {
    geoResponse.result = await fetch("https://api.hgbrasil.com/geoip?key=1ce5258a&address=remote&precision=false");
    geoResponse.values = {
      address,
      city,
      region,
      region_code,
      country_name,
      continent,
      flag: {
        svg,
        png_16,
      },
    };
  } catch (error) {
    console.log("Erro");
  }
}

console.log(geoResponse.values.address);
