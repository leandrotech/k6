docker-compose up -d influxdb grafana
echo "--------------------------------------------------------------------------------------"
echo "Grafana dashboard http://localhost:3000/d/k6/k6-load-testing-results"
echo "--------------------------------------------------------------------------------------"
docker-compose run --rm k6 run /scripts/newEchoPark.js
