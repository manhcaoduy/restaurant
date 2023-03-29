gen-proto:
	./scripts/gen-proto.sh

start-infra:
	docker-compose --env-file ./.env.infra -f docker-compose.infra.yml up -d

stop-infra:
	docker-compose --env-file ./.env.infra -f docker-compose.infra.yml down
