#!/bin/bash

echo "######              BUILD START           ######"

cd stock-analysis-front

npm run build

cd ..

rm -rf stock-analysis-web/src/main/resources/static/*

if [[ -d 'stock-analysis-web/src/main/resources/static/' ]];
then
    echo "Static directory exists!"
else
    mkdir stock-analysis-web/src/main/resources/static/
fi

mv stock-analysis-front/dist/* stock-analysis-web/src/main/resources/static/

