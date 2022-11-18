build:
	docker build -t cmd1 . 
run:
	docker run -it -d cmd1
ps:
	docker ps -a
img:
	docker images
rm:
	docker rm -f $$(docker ps -a)
rmi:
	docker rmi $$(docker images -q)
