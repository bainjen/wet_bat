#!/bin/sh

wget https://ourairports.com/data/airports.csv 
awk -F, '$3 ~ /large_airport/ && $12 ~ /yes/' airports.csv > large_airports.csv
rm airports.csv