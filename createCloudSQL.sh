#!/bin/bash

echo "This script automates the creation of a CloudSQL Instance & database on GCP"

read -p "Enter Chosen Name for the CloudSQL Instance: "  wp
read -p "Enter Chosen Database Name: "  wordpress
read -p "Enter root password for the CloudSQL Instance: "  wordpress


gcloud sql instances create $instanceName --activation-policy=ALWAYS --tier=db-n1-standard-1

gcloud sql databases create $databaseName --instance $instanceName

gcloud sql users set-password root --host=% --instance $instanceName --password=$passWord

exec "$@"
