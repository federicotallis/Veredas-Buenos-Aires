var MAPBOX_TOKEN = 'pk.eyJ1IjoiZmVkZXJpY290YWxsaXN2aGIiLCJhIjoiY2s5anp0d3h5MXBwaTNtbndnZjJiMHQyeiJ9.EkcnAumdNONuvCxlASioDw'
var MAPBOX_STYLE = 'mapbox://styles/federicotallisvhb/ck9zyok013tjk1imte3akocfp'
var SIDEWALKS_TILESET = 'mapbox://federicotallisvhb.a3sixxsl'
var SIDEWALKS_LAYER = 'https://services1.arcgis.com/9lDFdeC4JIBgML6L/arcgis/rest/services/Boston_sidewalk_widths/FeatureServer/0?token=iSPdrclNVtikxgjyfc2cx77pjH9dZGXP6zuEv2Q5t6T7SJJOy5lB50_1zhd_aKGZb-grXSgSMGNEb5DzpuKbDSCuNdvoIj7Z3qeWX6j5m_vff3cdl8516uweoG9jMUPmnfFU2arcd41Pw9LDRL0DvgLlhoA0Q3vFiiQUz08RNfVGBp8V4txCUApmuW3MppKKLgzIHB34gyTqfaSz-8M_oEM5zQghq4SwGagPJPXPhMkYZov3ZSMll-qHrH5MlMAk'
var UNITS = 'ft' // change to 'm' for meters
var PRECISION = 0.1 // the number of decimal places
var GROUPS = [
  {
    "value": 0,
    "rating": "impossible",
    "color": "#FF0049"
  },
  {
    "value": 6,
    "rating": "very difficult",
    "color": "#FF461E"
  },
  {
    "value": 9,
    "rating": "difficult",
    "color": "#FF9300"
  },
  {
    "value": 12,
    "rating": "somewhat difficult",
    "color": "#DAD130"
  },
  {
    "value": 15,
    "rating": "somewhat easy",
    "color": "#00ff5a"
  },
  {
    "value": 18,
    "rating": "easy",
    "color": "#00FFC4"
  },
  {
    "value": 21,
    "rating": "very easy",
    "color": "#00D2FF"
  },
]
