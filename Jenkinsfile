pipeline {
    agent any

    environment {
        IMAGE = "192.168.49.2:5000/react-lms:latest"
    }

    stages {

        stage('Build Image') {
            steps {
                sh '''
                podman build -t react-lms:latest .
                '''
            }
        }

        stage('Tag Image') {
            steps {
                sh '''
                podman tag react-lms:latest $IMAGE
                '''
            }
        }

        stage('Push Image') {
            steps {
                sh '''
                podman push --tls-verify=false $IMAGE
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                helm upgrade --install react-lms ./helm-chart -n react-app
                '''
            }
        }

        stage('Verify') {
            steps {
                sh '''
                kubectl get pods -n react-app
                '''
            }
        }
    }
}
