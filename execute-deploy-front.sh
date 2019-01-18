#!/bin/bash
mkdir exe-success
echo -e "\n> execute-deploy-front 실행"
/home/ec2-user/app/front/deploy-front.sh > /dev/null 2> /dev/null < /dev/null &
