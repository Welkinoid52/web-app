pipeline {
    agent any

    environment {
        IMAGE_NAME = 'web-app-image'
        CONTAINER_NAME = 'web-app-container'
        PORT = '80'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/Welkinoid52/web-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $IMAGE_NAME .'
                }
            }
        }

        stage('Stop & Remove Old Container') {
            steps {
                script {
                    sh """
                        if docker ps -a --format '{{.Names}}' | grep -w $CONTAINER_NAME; then
                            docker stop $CONTAINER_NAME || true
                            docker rm $CONTAINER_NAME || true
                        fi
                    """
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh """
                        docker run -d \
                          --name $CONTAINER_NAME \
                          -p $PORT:80 \
                          $IMAGE_NAME
                    """
                }
            }
        }
    }

    post {
        success {
            echo "Web app deployed successfully on port $PORT!"
        }
        failure {
            echo "Deployment failed!"
        }
    }
}
