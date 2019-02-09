#!/usr/bin/env bash

#wget https://ops.fhwa.dot.gov/freight/freight_analysis/faf/faf3/netwkdbflow/network/esri/faf3_4_esri.zip
#unzip faf3_4_esri.zip
#mv ./FAF3_4_ESRI/FAF3.4_NETWORK.DBF ./FAF3_4_ESRI/FAF3.4_Network.dbf
#
#ogr2ogr -f GeoJSON -t_srs crs:84 ./faf.geojson ./FAF3_4_ESRI/FAF3.4_Network.shp

cp /home/daniel/WebstormProjects/network_api/build_network/simple_network.geojson .

tippecanoe -f -o ../mbtiles/faf.mbtiles -z8 -y ID -M 250000 -m8 -D9 --layer=network simple_network.geojson
