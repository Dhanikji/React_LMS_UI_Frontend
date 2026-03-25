pipeline {
    agent any

    environment {
        IMAGE = "host.containers.internal:5000/react-lms:latest"
    }

    stages {

        stage('Clean') {
            steps {
                sh 'podman system prune -a -f || true'
            }
        }

        stage('Build Image') {
            steps {
                sh 'podman build -t react-lms:latest .'
            }
        }

        stage('Tag Image') {
            steps {
                sh '''
                podman tag react-lms:latest $IMAGE
                podman images
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
                sh 'helm upgrade --install react-lms ./helm-chart -n react-app'
            }
        }

        stage('Verify') {
            steps {
                sh 'kubectl get pods -n react-app'
            }
        }
    }
}
