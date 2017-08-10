var docbaseConfig = {
  "method": "file",
  "generic": {
    "baseurl": "",
    "path": "src"
  },
  "file": {
    "path": "src"
  },
  "github": {
    "user": "",
    "repo": "",
    "path": "",
    "branch": "",
    "access_token": ""
  },
   "indexHtml": "./html/main.html",
  "flatdocHtml": "./bower_components/docbase/html/flatdoc.html",
  "html5mode": false,
  "default_version": "",
  "manual_override": true,
  "versions" : {
  "scalr": [
    {
      "label": "Concepts",
      "name": "concepts",
      "files": [
        {
          "label": "Intro",
          "name": "intro"
        },
        {
          "label": "Data Model",
          "name": "datamodel"
        },
        {
          "label": "Data Browser",
          "name": "databrowser"
        }
      ]
    },
    {
      "label": "Javascript",
      "name": "javascript",
      "files": [
        {
          "label": "JS Quick Start",
          "name": "javascript-intro"
        },
        {
          "label": "Node Quick Start",
          "name": "nodejs-intro"
        },
        {
          "label": "API Reference",
          "name": "api-reference"
        },
        {
          "label": "Webhooks Guide",
          "name": "javascript-webhooks"
        }
      ]
    },
    {
      "label": "REST",
      "name": "rest",
      "files": [
        {
          "label": "Quick Start",
          "name": "intro"
        },
        {
          "label": "API Endpoints",
          "name": "endpoints"
        }
      ]
    },
    {
      "label": "Go",
      "name": "golang",
      "files": [
        {
          "label": "API Reference",
          "name": "api-reference"
        }
      ]
    },
    {
      "label": "FAQs",
      "name": "FAQs",
      "files": [
        {
          "label": "JS API",
          "name": "jsapi"
        },
        {
          "label": "REST",
          "name": "rest"
        }
      ]
    }
  ]
},
  "publish": "local"
}
