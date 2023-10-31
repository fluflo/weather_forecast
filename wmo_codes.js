const WMO_CODES_TO_STRING = {
    // Clear sky
    0: {
      description: 'Clear sky',
      image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163662.png',
      image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163645.png'
    },
  
    // Mainly clear, partly cloudy, and overcast
    1: {
      description: 'Mainly clear sky',
      image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
      image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163645.png'
    },
    2: {
      description: 'Partly cloudy sky',
      image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
      image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163645.png'
    },
    3: {
      description: 'Overcast sky',
      image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
      image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163645.png'
    },
  
    // Fog and depositing rime fog
    45: {
      description: 'Fog',
      image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163640.png',
      image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163640.png'
      
    },
    48: {
      description: 'Depositing rime fog',
      image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163640.png',
      image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163640.png'
    },
  
    // Drizzle: Light, moderate, and dense intensity
    51: {
      description: 'Light drizzle',
      image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163657.png',
      image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163644.png'
    },
    53: {
      description: 'Moderate drizzle',
      image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163657.png',
      image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163644.png'
    },
    55: {
      description: 'Dense drizzle',
      image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
      image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163645.png'
    },
  
    // Freezing Drizzle: Light and dense intensity
    56: {
      description: 'Light freezing drizzle',
      image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
      image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163644.png'
    },
    57: {
      description: 'Dense freezing drizzle',
      image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
      image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163644.png'
    },
  
    // Rain: Slight, moderate and heavy intensity
    61: {
      description: 'Slight rain',
      image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163657.png',
      image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163644.png'
    },
    63: {
      description: 'Moderate rain',
      image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
      image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163645.png'
    },
    65: {
      description: 'Heavy rain',
      image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
      image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163645.png'
    },
    // Freezing Rain: Light and heavy intensity
    66: {
      description: 'Light freezing rain',
      image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
      image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163645.png'
    },
    67: {
      description: 'Heavy freezing rain',
      image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
      image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163645.png'
    },
    // Snow fall: Slight, moderate, and heavy intensity
  71: {
    description: 'Slight snow',
    image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
    image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163645.png'
  },
  73: {
    description: 'Moderate snow',
    image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
    image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163645.png'
  },
  75: {
    description: 'Heavy snow',
    image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
    image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163645.png'
  },

  // Snow grains
  77: {
    description: 'Snow grains',
    image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
    image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163645.png'
  },

  // Rain showers: Slight, moderate, and violent
  80: {
    description: 'Slight rain showers',
    image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
    image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163645.png'
  },
  81: {
    description: 'Moderate rain showers',
    image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
    image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163645.png'
  },
  82: {
    description: 'Violent rain showers',
    image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
    image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163645.png'
  },

  // Snow showers slight and heavy
  85: {
    description: 'Slight snow showers',
    image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
    image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163645.png'
  },
  86: {
    description: 'Heavy snow showers',
    image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
    image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163645.png'
  },

  // Thunderstorm: Slight or moderate
  95: {
    description: 'Slight or moderate thunderstorm',
    image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
    image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163645.png'
  },

  // Thunderstorm with slight and heavy hail
  96: {
    description: 'Thunderstorm with slight hail',
    image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
    image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163645.png'
  },
  99: {
    description: 'Thunderstorm with heavy hail',
    image_day: 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png',
    image_night: 'https://cdn-icons-png.flaticon.com/128/1163/1163645.png'
  },
};
