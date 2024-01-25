module.exports = {
  "type": "object",
  "properties": {
    "pages": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "static": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/IAppJSONStaticConfig"
      }
    },
    "mini-ios": {
      "additionalProperties": false,
      "type": "object",
      "properties": {
        "__warning__": {
          "type": "string"
        },
        "window": {
          "$ref": "#/definitions/IWindow"
        },
        "plugins": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/IPluginConfig"
          }
        },
        "entryPagePath": {
          "type": "string"
        },
        "permission": {
          "type": "object",
          "properties": {
            "scope.userLocation": {
              "type": "object",
              "properties": {
                "desc": {
                  "type": "string"
                }
              },
              "additionalProperties": false,
              "required": [
                "desc"
              ]
            },
            "scope.userFuzzyLocation": {
              "type": "object",
              "properties": {
                "desc": {
                  "type": "string"
                }
              },
              "additionalProperties": false,
              "required": [
                "desc"
              ]
            }
          },
          "additionalProperties": false
        },
        "workers": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "path": {
                  "type": "string"
                },
                "isSubpackage": {
                  "type": "boolean"
                }
              },
              "additionalProperties": false,
              "required": [
                "isSubpackage",
                "path"
              ]
            },
            {
              "type": "string"
            }
          ]
        },
        "subPackages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ISubPackageItem"
          }
        },
        "subpackages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ISubPackageItem"
          }
        },
        "preloadRule": {
          "type": "object",
          "additionalProperties": {
            "type": "object",
            "properties": {
              "network": {
                "enum": [
                  "all",
                  "wifi"
                ],
                "type": "string"
              },
              "packages": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            "additionalProperties": false,
            "required": [
              "packages"
            ]
          }
        },
        "usingComponents": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "componentPlaceholder": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "tabBar": {
          "$ref": "#/definitions/ITabBar"
        },
        "requiredBackgroundModes": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "mimeTypeDeclarations": {
          "type": "object",
          "additionalProperties": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "networkTimeout": {
          "type": "object",
          "properties": {
            "request": {
              "type": "number"
            },
            "connectSocket": {
              "type": "number"
            },
            "uploadFile": {
              "type": "number"
            },
            "downloadFile": {
              "type": "number"
            }
          },
          "additionalProperties": false
        },
        "debug": {
          "type": "boolean"
        },
        "resizable": {
          "type": "boolean"
        },
        "displayMode": {
          "enum": [
            "desktop",
            "mobile",
            "pad"
          ],
          "type": "string"
        },
        "frameset": {
          "type": "boolean"
        },
        "functionalPages": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "independent": {
                  "type": "boolean"
                }
              },
              "additionalProperties": false,
              "required": [
                "independent"
              ]
            },
            {
              "type": "boolean"
            }
          ]
        },
        "cloud": {
          "type": "boolean"
        },
        "cloudVersion": {
          "type": "string"
        },
        "cloudConfig": {
          "type": "object",
          "properties": {
            "gatewayDomain": {
              "type": "string"
            },
            "publicKey": {
              "type": "string"
            },
            "gatewayId": {
              "type": "string"
            }
          },
          "additionalProperties": false
        },
        "openDataContext": {
          "type": "string"
        },
        "openLocationPagePath": {
          "type": "string"
        },
        "sitemapLocation": {
          "type": "string"
        },
        "serviceProviderTicket": {
          "type": "string"
        },
        "style": {
          "const": "v2",
          "type": "string"
        },
        "useExtendedLib": {
          "type": "object",
          "additionalProperties": {
            "type": [
              "string",
              "boolean"
            ]
          }
        },
        "entranceDeclare": {
          "type": "object",
          "properties": {
            "locationMessage": {
              "type": "object",
              "properties": {
                "path": {
                  "type": "string"
                },
                "query": {
                  "type": "string"
                }
              },
              "additionalProperties": false
            }
          },
          "additionalProperties": false
        },
        "darkmode": {
          "type": "boolean"
        },
        "themeLocation": {
          "type": "string"
        },
        "theme": {
          "type": "string"
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
        "lazyCodeLoading": {
          "const": "requiredComponents",
          "type": "string"
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
        "supportedMaterials": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ISupportMaterial"
          }
        },
        "requireBackgroundModes": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "embeddedAppIdList": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "renderer": {
          "enum": [
            "skyline",
            "webview"
          ],
          "type": "string"
        },
        "resolveAlias": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "debugOptions": {
          "type": "object",
          "properties": {
            "enableFPSPanel": {
              "type": "boolean"
            }
          },
          "additionalProperties": false
        },
        "halfPage": {
          "type": "object",
          "properties": {
            "firstPageNavigationStyle": {
              "enum": [
                "custom",
                "default"
              ],
              "type": "string"
            }
          },
          "additionalProperties": false
        },
        "requiredPrivateInfos": {
          "type": "array",
          "items": {
            "enum": [
              "chooseAddress",
              "chooseLocation",
              "choosePoi",
              "getFuzzyLocation",
              "getLocation",
              "onLocationChange",
              "startLocationUpdate",
              "startLocationUpdateBackground"
            ],
            "type": "string"
          }
        },
        "rendererOptions": {
          "type": "object",
          "properties": {
            "defaultDisplayBlock": {
              "type": "boolean"
            },
            "skyline": {
              "type": "object",
              "properties": {
                "defaultDisplayBlock": {
                  "type": "boolean"
                },
                "disableABTest": {
                  "type": "boolean"
                },
                "sdkVersionBegin": {
                  "type": "string"
                },
                "sdkVersionEnd": {
                  "type": "string"
                },
                "iosVersionBegin": {
                  "type": "string"
                },
                "iosVersionEnd": {
                  "type": "string"
                },
                "androidVersionBegin": {
                  "type": "string"
                },
                "androidVersionEnd": {
                  "type": "string"
                }
              },
              "additionalProperties": false,
              "required": [
                "defaultDisplayBlock"
              ]
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
        "accountCardPackage": {
          "type": "object",
          "properties": {
            "root": {
              "type": "string"
            },
            "cardList": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "number"
                  },
                  "componentPath": {
                    "type": "string"
                  }
                },
                "additionalProperties": false,
                "required": [
                  "componentPath",
                  "type"
                ]
              }
            }
          },
          "additionalProperties": false,
          "required": [
            "cardList",
            "root"
          ]
        },
        "miniApp": {
          "type": "object",
          "properties": {
            "useAuthorizePage": {
              "type": "boolean"
            }
          },
          "additionalProperties": false
        },
        "__usePrivacyCheck__": {
          "type": "boolean"
        },
        "pages": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "mini-android": {
      "additionalProperties": false,
      "type": "object",
      "properties": {
        "__warning__": {
          "type": "string"
        },
        "window": {
          "$ref": "#/definitions/IWindow"
        },
        "plugins": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/IPluginConfig"
          }
        },
        "entryPagePath": {
          "type": "string"
        },
        "permission": {
          "type": "object",
          "properties": {
            "scope.userLocation": {
              "type": "object",
              "properties": {
                "desc": {
                  "type": "string"
                }
              },
              "additionalProperties": false,
              "required": [
                "desc"
              ]
            },
            "scope.userFuzzyLocation": {
              "type": "object",
              "properties": {
                "desc": {
                  "type": "string"
                }
              },
              "additionalProperties": false,
              "required": [
                "desc"
              ]
            }
          },
          "additionalProperties": false
        },
        "workers": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "path": {
                  "type": "string"
                },
                "isSubpackage": {
                  "type": "boolean"
                }
              },
              "additionalProperties": false,
              "required": [
                "isSubpackage",
                "path"
              ]
            },
            {
              "type": "string"
            }
          ]
        },
        "subPackages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ISubPackageItem"
          }
        },
        "subpackages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ISubPackageItem"
          }
        },
        "preloadRule": {
          "type": "object",
          "additionalProperties": {
            "type": "object",
            "properties": {
              "network": {
                "enum": [
                  "all",
                  "wifi"
                ],
                "type": "string"
              },
              "packages": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            "additionalProperties": false,
            "required": [
              "packages"
            ]
          }
        },
        "usingComponents": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "componentPlaceholder": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "tabBar": {
          "$ref": "#/definitions/ITabBar"
        },
        "requiredBackgroundModes": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "mimeTypeDeclarations": {
          "type": "object",
          "additionalProperties": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "networkTimeout": {
          "type": "object",
          "properties": {
            "request": {
              "type": "number"
            },
            "connectSocket": {
              "type": "number"
            },
            "uploadFile": {
              "type": "number"
            },
            "downloadFile": {
              "type": "number"
            }
          },
          "additionalProperties": false
        },
        "debug": {
          "type": "boolean"
        },
        "resizable": {
          "type": "boolean"
        },
        "displayMode": {
          "enum": [
            "desktop",
            "mobile",
            "pad"
          ],
          "type": "string"
        },
        "frameset": {
          "type": "boolean"
        },
        "functionalPages": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "independent": {
                  "type": "boolean"
                }
              },
              "additionalProperties": false,
              "required": [
                "independent"
              ]
            },
            {
              "type": "boolean"
            }
          ]
        },
        "cloud": {
          "type": "boolean"
        },
        "cloudVersion": {
          "type": "string"
        },
        "cloudConfig": {
          "type": "object",
          "properties": {
            "gatewayDomain": {
              "type": "string"
            },
            "publicKey": {
              "type": "string"
            },
            "gatewayId": {
              "type": "string"
            }
          },
          "additionalProperties": false
        },
        "openDataContext": {
          "type": "string"
        },
        "openLocationPagePath": {
          "type": "string"
        },
        "sitemapLocation": {
          "type": "string"
        },
        "serviceProviderTicket": {
          "type": "string"
        },
        "style": {
          "const": "v2",
          "type": "string"
        },
        "useExtendedLib": {
          "type": "object",
          "additionalProperties": {
            "type": [
              "string",
              "boolean"
            ]
          }
        },
        "entranceDeclare": {
          "type": "object",
          "properties": {
            "locationMessage": {
              "type": "object",
              "properties": {
                "path": {
                  "type": "string"
                },
                "query": {
                  "type": "string"
                }
              },
              "additionalProperties": false
            }
          },
          "additionalProperties": false
        },
        "darkmode": {
          "type": "boolean"
        },
        "themeLocation": {
          "type": "string"
        },
        "theme": {
          "type": "string"
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
        "lazyCodeLoading": {
          "const": "requiredComponents",
          "type": "string"
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
        "supportedMaterials": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ISupportMaterial"
          }
        },
        "requireBackgroundModes": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "embeddedAppIdList": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "renderer": {
          "enum": [
            "skyline",
            "webview"
          ],
          "type": "string"
        },
        "resolveAlias": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "debugOptions": {
          "type": "object",
          "properties": {
            "enableFPSPanel": {
              "type": "boolean"
            }
          },
          "additionalProperties": false
        },
        "halfPage": {
          "type": "object",
          "properties": {
            "firstPageNavigationStyle": {
              "enum": [
                "custom",
                "default"
              ],
              "type": "string"
            }
          },
          "additionalProperties": false
        },
        "requiredPrivateInfos": {
          "type": "array",
          "items": {
            "enum": [
              "chooseAddress",
              "chooseLocation",
              "choosePoi",
              "getFuzzyLocation",
              "getLocation",
              "onLocationChange",
              "startLocationUpdate",
              "startLocationUpdateBackground"
            ],
            "type": "string"
          }
        },
        "rendererOptions": {
          "type": "object",
          "properties": {
            "defaultDisplayBlock": {
              "type": "boolean"
            },
            "skyline": {
              "type": "object",
              "properties": {
                "defaultDisplayBlock": {
                  "type": "boolean"
                },
                "disableABTest": {
                  "type": "boolean"
                },
                "sdkVersionBegin": {
                  "type": "string"
                },
                "sdkVersionEnd": {
                  "type": "string"
                },
                "iosVersionBegin": {
                  "type": "string"
                },
                "iosVersionEnd": {
                  "type": "string"
                },
                "androidVersionBegin": {
                  "type": "string"
                },
                "androidVersionEnd": {
                  "type": "string"
                }
              },
              "additionalProperties": false,
              "required": [
                "defaultDisplayBlock"
              ]
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
        "accountCardPackage": {
          "type": "object",
          "properties": {
            "root": {
              "type": "string"
            },
            "cardList": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "number"
                  },
                  "componentPath": {
                    "type": "string"
                  }
                },
                "additionalProperties": false,
                "required": [
                  "componentPath",
                  "type"
                ]
              }
            }
          },
          "additionalProperties": false,
          "required": [
            "cardList",
            "root"
          ]
        },
        "miniApp": {
          "type": "object",
          "properties": {
            "useAuthorizePage": {
              "type": "boolean"
            }
          },
          "additionalProperties": false
        },
        "__usePrivacyCheck__": {
          "type": "boolean"
        },
        "pages": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "mini-weixin": {
      "additionalProperties": false,
      "type": "object",
      "properties": {
        "__warning__": {
          "type": "string"
        },
        "window": {
          "$ref": "#/definitions/IWindow"
        },
        "plugins": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/IPluginConfig"
          }
        },
        "entryPagePath": {
          "type": "string"
        },
        "permission": {
          "type": "object",
          "properties": {
            "scope.userLocation": {
              "type": "object",
              "properties": {
                "desc": {
                  "type": "string"
                }
              },
              "additionalProperties": false,
              "required": [
                "desc"
              ]
            },
            "scope.userFuzzyLocation": {
              "type": "object",
              "properties": {
                "desc": {
                  "type": "string"
                }
              },
              "additionalProperties": false,
              "required": [
                "desc"
              ]
            }
          },
          "additionalProperties": false
        },
        "workers": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "path": {
                  "type": "string"
                },
                "isSubpackage": {
                  "type": "boolean"
                }
              },
              "additionalProperties": false,
              "required": [
                "isSubpackage",
                "path"
              ]
            },
            {
              "type": "string"
            }
          ]
        },
        "subPackages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ISubPackageItem"
          }
        },
        "subpackages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ISubPackageItem"
          }
        },
        "preloadRule": {
          "type": "object",
          "additionalProperties": {
            "type": "object",
            "properties": {
              "network": {
                "enum": [
                  "all",
                  "wifi"
                ],
                "type": "string"
              },
              "packages": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            "additionalProperties": false,
            "required": [
              "packages"
            ]
          }
        },
        "usingComponents": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "componentPlaceholder": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "tabBar": {
          "$ref": "#/definitions/ITabBar"
        },
        "requiredBackgroundModes": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "mimeTypeDeclarations": {
          "type": "object",
          "additionalProperties": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "networkTimeout": {
          "type": "object",
          "properties": {
            "request": {
              "type": "number"
            },
            "connectSocket": {
              "type": "number"
            },
            "uploadFile": {
              "type": "number"
            },
            "downloadFile": {
              "type": "number"
            }
          },
          "additionalProperties": false
        },
        "debug": {
          "type": "boolean"
        },
        "resizable": {
          "type": "boolean"
        },
        "displayMode": {
          "enum": [
            "desktop",
            "mobile",
            "pad"
          ],
          "type": "string"
        },
        "frameset": {
          "type": "boolean"
        },
        "functionalPages": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "independent": {
                  "type": "boolean"
                }
              },
              "additionalProperties": false,
              "required": [
                "independent"
              ]
            },
            {
              "type": "boolean"
            }
          ]
        },
        "cloud": {
          "type": "boolean"
        },
        "cloudVersion": {
          "type": "string"
        },
        "cloudConfig": {
          "type": "object",
          "properties": {
            "gatewayDomain": {
              "type": "string"
            },
            "publicKey": {
              "type": "string"
            },
            "gatewayId": {
              "type": "string"
            }
          },
          "additionalProperties": false
        },
        "openDataContext": {
          "type": "string"
        },
        "openLocationPagePath": {
          "type": "string"
        },
        "sitemapLocation": {
          "type": "string"
        },
        "serviceProviderTicket": {
          "type": "string"
        },
        "style": {
          "const": "v2",
          "type": "string"
        },
        "useExtendedLib": {
          "type": "object",
          "additionalProperties": {
            "type": [
              "string",
              "boolean"
            ]
          }
        },
        "entranceDeclare": {
          "type": "object",
          "properties": {
            "locationMessage": {
              "type": "object",
              "properties": {
                "path": {
                  "type": "string"
                },
                "query": {
                  "type": "string"
                }
              },
              "additionalProperties": false
            }
          },
          "additionalProperties": false
        },
        "darkmode": {
          "type": "boolean"
        },
        "themeLocation": {
          "type": "string"
        },
        "theme": {
          "type": "string"
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
        "lazyCodeLoading": {
          "const": "requiredComponents",
          "type": "string"
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
        "supportedMaterials": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ISupportMaterial"
          }
        },
        "requireBackgroundModes": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "embeddedAppIdList": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "renderer": {
          "enum": [
            "skyline",
            "webview"
          ],
          "type": "string"
        },
        "resolveAlias": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "debugOptions": {
          "type": "object",
          "properties": {
            "enableFPSPanel": {
              "type": "boolean"
            }
          },
          "additionalProperties": false
        },
        "halfPage": {
          "type": "object",
          "properties": {
            "firstPageNavigationStyle": {
              "enum": [
                "custom",
                "default"
              ],
              "type": "string"
            }
          },
          "additionalProperties": false
        },
        "requiredPrivateInfos": {
          "type": "array",
          "items": {
            "enum": [
              "chooseAddress",
              "chooseLocation",
              "choosePoi",
              "getFuzzyLocation",
              "getLocation",
              "onLocationChange",
              "startLocationUpdate",
              "startLocationUpdateBackground"
            ],
            "type": "string"
          }
        },
        "rendererOptions": {
          "type": "object",
          "properties": {
            "defaultDisplayBlock": {
              "type": "boolean"
            },
            "skyline": {
              "type": "object",
              "properties": {
                "defaultDisplayBlock": {
                  "type": "boolean"
                },
                "disableABTest": {
                  "type": "boolean"
                },
                "sdkVersionBegin": {
                  "type": "string"
                },
                "sdkVersionEnd": {
                  "type": "string"
                },
                "iosVersionBegin": {
                  "type": "string"
                },
                "iosVersionEnd": {
                  "type": "string"
                },
                "androidVersionBegin": {
                  "type": "string"
                },
                "androidVersionEnd": {
                  "type": "string"
                }
              },
              "additionalProperties": false,
              "required": [
                "defaultDisplayBlock"
              ]
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
        "accountCardPackage": {
          "type": "object",
          "properties": {
            "root": {
              "type": "string"
            },
            "cardList": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "number"
                  },
                  "componentPath": {
                    "type": "string"
                  }
                },
                "additionalProperties": false,
                "required": [
                  "componentPath",
                  "type"
                ]
              }
            }
          },
          "additionalProperties": false,
          "required": [
            "cardList",
            "root"
          ]
        },
        "miniApp": {
          "type": "object",
          "properties": {
            "useAuthorizePage": {
              "type": "boolean"
            }
          },
          "additionalProperties": false
        },
        "__usePrivacyCheck__": {
          "type": "boolean"
        },
        "pages": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "__warning__": {
      "type": "string"
    },
    "window": {
      "$ref": "#/definitions/IWindow"
    },
    "plugins": {
      "type": "object",
      "additionalProperties": {
        "$ref": "#/definitions/IPluginConfig"
      }
    },
    "entryPagePath": {
      "type": "string"
    },
    "permission": {
      "type": "object",
      "properties": {
        "scope.userLocation": {
          "type": "object",
          "properties": {
            "desc": {
              "type": "string"
            }
          },
          "additionalProperties": false,
          "required": [
            "desc"
          ]
        },
        "scope.userFuzzyLocation": {
          "type": "object",
          "properties": {
            "desc": {
              "type": "string"
            }
          },
          "additionalProperties": false,
          "required": [
            "desc"
          ]
        }
      },
      "additionalProperties": false
    },
    "workers": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "path": {
              "type": "string"
            },
            "isSubpackage": {
              "type": "boolean"
            }
          },
          "additionalProperties": false,
          "required": [
            "isSubpackage",
            "path"
          ]
        },
        {
          "type": "string"
        }
      ]
    },
    "subPackages": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ISubPackageItem"
      }
    },
    "subpackages": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ISubPackageItem"
      }
    },
    "preloadRule": {
      "type": "object",
      "additionalProperties": {
        "type": "object",
        "properties": {
          "network": {
            "enum": [
              "all",
              "wifi"
            ],
            "type": "string"
          },
          "packages": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "additionalProperties": false,
        "required": [
          "packages"
        ]
      }
    },
    "usingComponents": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    },
    "componentPlaceholder": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    },
    "tabBar": {
      "$ref": "#/definitions/ITabBar"
    },
    "requiredBackgroundModes": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "mimeTypeDeclarations": {
      "type": "object",
      "additionalProperties": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "networkTimeout": {
      "type": "object",
      "properties": {
        "request": {
          "type": "number"
        },
        "connectSocket": {
          "type": "number"
        },
        "uploadFile": {
          "type": "number"
        },
        "downloadFile": {
          "type": "number"
        }
      },
      "additionalProperties": false
    },
    "debug": {
      "type": "boolean"
    },
    "resizable": {
      "type": "boolean"
    },
    "displayMode": {
      "enum": [
        "desktop",
        "mobile",
        "pad"
      ],
      "type": "string"
    },
    "frameset": {
      "type": "boolean"
    },
    "functionalPages": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "independent": {
              "type": "boolean"
            }
          },
          "additionalProperties": false,
          "required": [
            "independent"
          ]
        },
        {
          "type": "boolean"
        }
      ]
    },
    "cloud": {
      "type": "boolean"
    },
    "cloudVersion": {
      "type": "string"
    },
    "cloudConfig": {
      "type": "object",
      "properties": {
        "gatewayDomain": {
          "type": "string"
        },
        "publicKey": {
          "type": "string"
        },
        "gatewayId": {
          "type": "string"
        }
      },
      "additionalProperties": false
    },
    "openDataContext": {
      "type": "string"
    },
    "openLocationPagePath": {
      "type": "string"
    },
    "sitemapLocation": {
      "type": "string"
    },
    "serviceProviderTicket": {
      "type": "string"
    },
    "style": {
      "const": "v2",
      "type": "string"
    },
    "useExtendedLib": {
      "type": "object",
      "additionalProperties": {
        "type": [
          "string",
          "boolean"
        ]
      }
    },
    "entranceDeclare": {
      "type": "object",
      "properties": {
        "locationMessage": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string"
            },
            "query": {
              "type": "string"
            }
          },
          "additionalProperties": false
        }
      },
      "additionalProperties": false
    },
    "darkmode": {
      "type": "boolean"
    },
    "themeLocation": {
      "type": "string"
    },
    "theme": {
      "type": "string"
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
    "lazyCodeLoading": {
      "const": "requiredComponents",
      "type": "string"
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
    "supportedMaterials": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ISupportMaterial"
      }
    },
    "requireBackgroundModes": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "embeddedAppIdList": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "renderer": {
      "enum": [
        "skyline",
        "webview"
      ],
      "type": "string"
    },
    "resolveAlias": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    },
    "debugOptions": {
      "type": "object",
      "properties": {
        "enableFPSPanel": {
          "type": "boolean"
        }
      },
      "additionalProperties": false
    },
    "halfPage": {
      "type": "object",
      "properties": {
        "firstPageNavigationStyle": {
          "enum": [
            "custom",
            "default"
          ],
          "type": "string"
        }
      },
      "additionalProperties": false
    },
    "requiredPrivateInfos": {
      "type": "array",
      "items": {
        "enum": [
          "chooseAddress",
          "chooseLocation",
          "choosePoi",
          "getFuzzyLocation",
          "getLocation",
          "onLocationChange",
          "startLocationUpdate",
          "startLocationUpdateBackground"
        ],
        "type": "string"
      }
    },
    "rendererOptions": {
      "type": "object",
      "properties": {
        "defaultDisplayBlock": {
          "type": "boolean"
        },
        "skyline": {
          "type": "object",
          "properties": {
            "defaultDisplayBlock": {
              "type": "boolean"
            },
            "disableABTest": {
              "type": "boolean"
            },
            "sdkVersionBegin": {
              "type": "string"
            },
            "sdkVersionEnd": {
              "type": "string"
            },
            "iosVersionBegin": {
              "type": "string"
            },
            "iosVersionEnd": {
              "type": "string"
            },
            "androidVersionBegin": {
              "type": "string"
            },
            "androidVersionEnd": {
              "type": "string"
            }
          },
          "additionalProperties": false,
          "required": [
            "defaultDisplayBlock"
          ]
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
    "accountCardPackage": {
      "type": "object",
      "properties": {
        "root": {
          "type": "string"
        },
        "cardList": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "number"
              },
              "componentPath": {
                "type": "string"
              }
            },
            "additionalProperties": false,
            "required": [
              "componentPath",
              "type"
            ]
          }
        }
      },
      "additionalProperties": false,
      "required": [
        "cardList",
        "root"
      ]
    },
    "miniApp": {
      "type": "object",
      "properties": {
        "useAuthorizePage": {
          "type": "boolean"
        }
      },
      "additionalProperties": false
    },
    "__usePrivacyCheck__": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "required": [
    "pages"
  ],
  "definitions": {
    "IAppJSONStaticConfig": {
      "type": "object",
      "properties": {
        "pattern": {
          "type": "string"
        },
        "platforms": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/IPlatform"
          }
        }
      },
      "additionalProperties": false,
      "required": [
        "pattern",
        "platforms"
      ]
    },
    "IPlatform": {
      "enum": [
        "mini-android",
        "mini-ios",
        "mini-weixin"
      ],
      "type": "string"
    },
    "IWindow": {
      "type": "object",
      "properties": {
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
    },
    "IPluginConfig": {
      "type": "object",
      "properties": {
        "provider": {
          "type": "string"
        },
        "version": {
          "type": "string"
        },
        "path": {
          "type": "string"
        },
        "export": {
          "type": "string"
        },
        "genericsImplementation": {
          "type": "object",
          "additionalProperties": {
            "type": "object",
            "additionalProperties": {
              "type": "string"
            }
          }
        }
      },
      "additionalProperties": false,
      "required": [
        "provider",
        "version"
      ]
    },
    "ISubPackageItem": {
      "type": "object",
      "properties": {
        "independent": {
          "type": "boolean"
        },
        "name": {
          "type": "string"
        },
        "root": {
          "type": "string"
        },
        "pages": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "plugins": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/IPluginConfig"
          }
        },
        "useExtendedLib": {
          "type": "object",
          "additionalProperties": {
            "type": [
              "string",
              "boolean"
            ]
          }
        }
      },
      "additionalProperties": false,
      "required": [
        "pages",
        "root"
      ]
    },
    "ITabBar": {
      "type": "object",
      "properties": {
        "custom": {
          "type": "boolean"
        },
        "list": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "pagePath": {
                "type": "string"
              },
              "text": {
                "type": "string"
              },
              "iconPath": {
                "type": "string"
              },
              "selectedIconPath": {
                "type": "string"
              },
              "renderer": {
                "enum": [
                  "cover-view",
                  "skyline",
                  "webview"
                ],
                "type": "string"
              }
            },
            "additionalProperties": false,
            "required": [
              "pagePath"
            ]
          }
        },
        "borderStyle": {
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
        "position": {
          "enum": [
            "bottom",
            "top"
          ],
          "type": "string"
        },
        "color": {
          "type": "string"
        },
        "selectedColor": {
          "type": "string"
        },
        "backgroundColor": {
          "type": "string"
        }
      },
      "additionalProperties": false,
      "required": [
        "list"
      ]
    },
    "ISupportMaterial": {
      "type": "object",
      "properties": {
        "materialType": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "desc": {
          "type": "string"
        },
        "path": {
          "type": "string"
        }
      },
      "additionalProperties": false,
      "required": [
        "desc",
        "materialType",
        "name",
        "path"
      ]
    }
  },
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1699345121811
}