@Library('commonLib') _

pipeline {
    agent any

    environment {
        IMAGE_NAME = 'my-web-app'
    }

    stages {
        stage('Clone') {
            steps {
                gitCheckout(
                    url: 'https://github.com/Welkinoid52/web-app.git',
                    branch: 'main'
                    // credentialsId: 'optional-if-private'
                )
            }
        }

        stage('Build') {
            steps {
                buildApplication(
                    buildCmd: "docker build -t ${IMAGE_NAME} ."
                )
            }
        }
    }
}
