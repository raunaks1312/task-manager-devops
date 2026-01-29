# Use the official Prometheus image as the base
FROM prom/prometheus:latest

# Copy your custom prometheus.yml into the container
# This includes the 'nginx-app' and 'node' jobs you configured
COPY prometheus.yml /etc/prometheus/prometheus.yml
