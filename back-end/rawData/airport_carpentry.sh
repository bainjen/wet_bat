#!/bin/sh

wget https://ourairports.com/data/airports.csv 
awk -F, '$3 ~ /large_airport/' airports.csv > large_airports.csv
rm airports.csv