var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-area",
      "name": "Living Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5560397328630966,
        "pitch": 0.01999147364771403,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": 1.5922561747501938,
          "pitch": 0.2713158463038816,
          "rotation": 0,
          "target": "1-dining-area"
        },
        {
          "yaw": 2.3168817886819975,
          "pitch": 0.15377561452859823,
          "rotation": 12.566370614359176,
          "target": "2-kitchen-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining-area",
      "name": "Dining Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.4560524682168303,
        "pitch": 0,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": -1.6998116854284753,
          "pitch": 0.25506755508339296,
          "rotation": 0,
          "target": "0-living-area"
        },
        {
          "yaw": -2.836748443250732,
          "pitch": 0.21048268466472742,
          "rotation": 0,
          "target": "2-kitchen-area"
        },
        {
          "yaw": -2.4755199323730093,
          "pitch": 0.11393540550997194,
          "rotation": 0,
          "target": "3-bedroom-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen-area",
      "name": "Kitchen Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": 0.02442153881899145,
          "pitch": 0.2226764857411716,
          "rotation": 0,
          "target": "1-dining-area"
        },
        {
          "yaw": -0.6757339580926427,
          "pitch": 0.21162590442890306,
          "rotation": 0,
          "target": "0-living-area"
        },
        {
          "yaw": -1.8115751234410293,
          "pitch": 0.19414669304020649,
          "rotation": 0,
          "target": "3-bedroom-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bedroom-area",
      "name": "Bedroom Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -3.0970707279414107,
        "pitch": 0,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": 1.3769447958775274,
          "pitch": 0.33009600546877316,
          "rotation": 0,
          "target": "2-kitchen-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SVOYA 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
