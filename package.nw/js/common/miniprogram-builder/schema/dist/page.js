module.exports = {
  "type": "object",
  "properties": {
    "pageJSONLight": {
      "$ref": "#/definitions/IOriginalPageJSON"
    },
    "pageJSONDark": {
      "$ref": "#/definitions/IOriginalPageJSON"
    },
    "enablePassiveEvent": {
      "anyOf": [
        {
          "type": "object",
          "additionalProperties": {
            "type": "boolean"
          }
        },
        {
          "type": "boolean"
        }
      ]
    },
    "style": {
      "const": "v2",
      "type": "string"
    },
    "componentPlaceholder": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    },
    "mini-ios": {
      "$ref": "#/definitions/IOriginalPageJSON"
    },
    "mini-android": {
      "$ref": "#/definitions/IOriginalPageJSON"
    },
    "mini-weixin": {
      "$ref": "#/definitions/IOriginalPageJSON"
    },
    "disableScroll": {
      "type": "boolean"
    },
    "disableSwipeBack": {
      "type": "boolean"
    },
    "usingComponents": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    },
    "renderer": {
      "enum": [
        "cover-view",
        "skyline",
        "webview",
        "xr-frame"
      ],
      "type": "string"
    },
    "component": {
      "type": "boolean"
    },
    "componentGenerics": {
      "type": "object",
      "additionalProperties": {
        "anyOf": [
          {
            "type": "object",
            "properties": {
              "default": {
                "type": "string"
              }
            },
            "additionalProperties": false,
            "required": [
              "default"
            ]
          },
          {
            "const": true,
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      }
    },
    "singlePage": {
      "type": "object",
      "properties": {
        "navigationBarFit": {
          "enum": [
            "float",
            "squeezed"
          ],
          "type": "string"
        }
      },
      "additionalProperties": false
    },
    "componentFramework": {
      "enum": [
        "exparser",
        "glass-easel"
      ],
      "type": "string"
    },
    "styleIsolation": {
      "enum": [
        "apply-shared",
        "isolated",
        "page-apply-shared",
        "page-isolated",
        "page-shared",
        "shared"
      ],
      "type": "string"
    },
    "backgroundColorTop": {
      "type": "string"
    },
    "backgroundColorBottom": {
      "type": "string"
    },
    "backgroundColorContent": {
      "type": "string"
    },
    "backgroundColor": {
      "type": "string"
    },
    "enablePullDownRefresh": {
      "type": "boolean"
    },
    "navigationBarTextStyle": {
      "anyOf": [
        {
          "enum": [
            "black",
            "white"
          ],
          "type": "string"
        },
        {
          "type": "string",
          "pattern": "^@.*$"
        }
      ]
    },
    "navigationBarTitleText": {
      "type": "string"
    },
    "navigationStyle": {
      "enum": [
        "custom",
        "default"
      ],
      "type": "string"
    },
    "backgroundTextStyle": {
      "anyOf": [
        {
          "enum": [
            "dark",
            "light"
          ],
          "type": "string"
        },
        {
          "type": "string",
          "pattern": "^@.*$"
        }
      ]
    },
    "onReachBottomDistance": {
      "type": "number"
    },
    "pageOrientation": {
      "enum": [
        "auto",
        "landscape",
        "portrait"
      ],
      "type": "string"
    },
    "navigationBarBackgroundColor": {
      "type": "string"
    },
    "renderingMode": {
      "enum": [
        "mixed",
        "seperated"
      ],
      "type": "string"
    },
    "restartStrategy": {
      "enum": [
        "homePage",
        "homePageAndLatestPage"
      ],
      "type": "string"
    },
    "visualEffectInBackground": {
      "enum": [
        "hidden",
        "none"
      ],
      "type": "string"
    },
    "initialRenderingCache": {
      "enum": [
        "dynamic",
        "static"
      ],
      "type": "string"
    },
    "handleWebviewPreload": {
      "enum": [
        "auto",
        "manual",
        "static"
      ],
      "type": "string"
    },
    "homeButton": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "definitions": {
    "IOriginalPageJSON": {
      "type": "object",
      "properties": {
        "disableScroll": {
          "type": "boolean"
        },
        "disableSwipeBack": {
          "type": "boolean"
        },
        "usingComponents": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "renderer": {
          "enum": [
            "cover-view",
            "skyline",
            "webview",
            "xr-frame"
          ],
          "type": "string"
        },
        "component": {
          "type": "boolean"
        },
        "componentGenerics": {
          "type": "object",
          "additionalProperties": {
            "anyOf": [
              {
                "type": "object",
                "properties": {
                  "default": {
                    "type": "string"
                  }
                },
                "additionalProperties": false,
                "required": [
                  "default"
                ]
              },
              {
                "const": true,
                "type": "boolean"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "singlePage": {
          "type": "object",
          "properties": {
            "navigationBarFit": {
              "enum": [
                "float",
                "squeezed"
              ],
              "type": "string"
            }
          },
          "additionalProperties": false
        },
        "componentFramework": {
          "enum": [
            "exparser",
            "glass-easel"
          ],
          "type": "string"
        },
        "styleIsolation": {
          "enum": [
            "apply-shared",
            "isolated",
            "page-apply-shared",
            "page-isolated",
            "page-shared",
            "shared"
          ],
          "type": "string"
        },
        "backgroundColorTop": {
          "type": "string"
        },
        "backgroundColorBottom": {
          "type": "string"
        },
        "backgroundColorContent": {
          "type": "string"
        },
        "backgroundColor": {
          "type": "string"
        },
        "enablePullDownRefresh": {
          "type": "boolean"
        },
        "navigationBarTextStyle": {
          "anyOf": [
            {
              "enum": [
                "black",
                "white"
              ],
              "type": "string"
            },
            {
              "type": "string",
              "pattern": "^@.*$"
            }
          ]
        },
        "navigationBarTitleText": {
          "type": "string"
        },
        "navigationStyle": {
          "enum": [
            "custom",
            "default"
          ],
          "type": "string"
        },
        "backgroundTextStyle": {
          "anyOf": [
            {
              "enum": [
                "dark",
                "light"
              ],
              "type": "string"
            },
            {
              "type": "string",
              "pattern": "^@.*$"
            }
          ]
        },
        "onReachBottomDistance": {
          "type": "number"
        },
        "pageOrientation": {
          "enum": [
            "auto",
            "landscape",
            "portrait"
          ],
          "type": "string"
        },
        "navigationBarBackgroundColor": {
          "type": "string"
        },
        "renderingMode": {
          "enum": [
            "mixed",
            "seperated"
          ],
          "type": "string"
        },
        "restartStrategy": {
          "enum": [
            "homePage",
            "homePageAndLatestPage"
          ],
          "type": "string"
        },
        "visualEffectInBackground": {
          "enum": [
            "hidden",
            "none"
          ],
          "type": "string"
        },
        "initialRenderingCache": {
          "enum": [
            "dynamic",
            "static"
          ],
          "type": "string"
        },
        "handleWebviewPreload": {
          "enum": [
            "auto",
            "manual",
            "static"
          ],
          "type": "string"
        },
        "homeButton": {
          "type": "boolean"
        }
      },
      "additionalProperties": false
    }
  },
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1699345121812
}