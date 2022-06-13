#!/bin/bash
#sh build_front.sh

mvn clean package -Dmaven.test.skip=true

cp stock-analysis-web/target/*.jar stock-analysis-web.jar

tar -zcvf stock-analysis-web.tar.gz stock-analysis-web.jar