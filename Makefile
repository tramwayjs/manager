build:
	npm run build

pack: 
	npm pack

test: pack
	rm -rf ./test && \
	mkdir ./test && \
	mv ./tramwayjs-manager-$(shell git tag --sort=-v:refname | head -n 1 | sed 's/v//g').tgz ./test/tramwayjs-manager-$(shell git tag --sort=-v:refname | head -n 1 | sed 's/v//g').tgz && \
	cd ./test && \
	npm init -y && \
	npm i -D tramway tramwayjs-manager-$(shell git tag --sort=-v:refname | head -n 1 | sed 's/v//g').tgz && \
	./node_modules/.bin/tramway install && \
	cd ../

build-test:
	cd test && \
	./node_modules/.bin/tramway build && \
	cd ../

run-test:
	node test/dist/index

.PHONY: build pack test build-test run-test