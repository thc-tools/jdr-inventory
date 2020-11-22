SHELL := $(shell which bash)
GROUP_ID = $(shell id -g)
USER_ID = $(shell id -u)
GROUPNAME =  brain
USERNAME = brain
HOMEDIR = /home/$(USERNAME)
ENV = /usr/bin/env
DKC = docker-compose
DK = docker
DKC_CFG = -f docker-compose.yml

# default shell options
.SHELLFLAGS = -c

.SILENT: ;			   # no need for @
.ONESHELL: ;			 # recipes execute in same shell
.NOTPARALLEL: ;		  # wait for this target to finish
.EXPORT_ALL_VARIABLES: ; # send all vars to shell
default: help;   # default target

help: ## display commands help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
# @grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
.PHONY: help

_env:
	if [ ! -f .env  ]; then  cp .env.dist .env ; fi
.PHONY: _env

ascii-brain:
	cat ascii.txt
.PHONY: ascii-brain

ps: _env ## docker-compose process status
	$(MAKE) ascii-brain
	$(ENV) $(DKC) $(DKC_CFG) ps
.PHONY: ps

up: _env  ## docker-compose up in daemon mode + process status
	$(MAKE) _upd
	$(MAKE) ps
.PHONY: up

_upd:
	$(ENV) $(DKC) $(DKC_CFG) up -d
.PHONY: _upd

stop: _env ## stop containers only, can be restarted with `make up`
	$(ENV) $(DKC) $(DKC_CFG) stop
.PHONY: stop

restart: _env ## restart containers only
	$(ENV) $(DKC) $(DKC_CFG) restart ${svc}
.PHONY: restart

rm: _env ## stop and delete containers but leave network and volumes
	$(ENV) $(DKC) $(DKC_CFG) rm -f -v -s
.PHONY: rm

build: ## build imgaes
	$(ENV) $(DKC) $(DKC_CFG) build
.PHONY: build

vendor: ## install repositories and vendors
	$(ENV) $(DKC) $(DKC_CFG) run --rm api npm run pi
	$(ENV) $(DKC) $(DKC_CFG) run --rm app npm run pi
.PHONY: vendor

logs: ## make logs svc='engine consumer'
	$(ENV) $(DKC) $(DKC_CFG) logs -t -f ${svc}
.PHONY: logs

logs-app: ## make logs svc='engine consumer'
	$(ENV) $(DKC) $(DKC_CFG) logs -t -f api app
.PHONY: logs

exec: ## exec into a named container
	$(ENV) $(DKC) $(DKC_CFG) exec ${svc} sh
.PHONY: exec