# Newsbot5000 by David Baker

docker build -f .\API\Dockerfile -t api .

docker run -dt -v ${PWD}:/app -p 58127:80 -p 44307:443 api:dev