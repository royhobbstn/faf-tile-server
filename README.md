# faf-tile-server
Serve vector tiles of the US Freight Analysis Framework network dataset.

Built as a dependency of the [Network Mapping](https://github.com/royhobbstn/network-mapping) demo project.

### Heavily Borrowed Code
This tile server is based on the original works of Chris Helm and Tobin Bradley.
1. https://github.com/chelm/mbtiles-server
2. https://github.com/tobinbradley/mbtiles-server

## Instructions

```
npm install
npm run setup
npm run start
```

## Prerequisites

Requires `wget`, `unzip`, `ogr2ogr`, `tippecanoe` and `NodeJS 10+` to be installed.