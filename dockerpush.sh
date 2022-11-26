echo "Star Build"
docker build -t vue-client:latest   --no-cache -f Dockerfile .
echo "Stop Build"
docker tag vue-client:latest harbor.buraksaglik.fun/chat/vue-client:latest
echo "Star Push"
docker push harbor.buraksaglik.fun/chat/vue-client:latest
echo "Stop Push"