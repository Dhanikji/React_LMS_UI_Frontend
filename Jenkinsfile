pipeline {
    agent any
    environment {
        IMAGE = "registry.local:5000/react-lms:latest"
    }
    stages {
        stage('Build') {
            steps {
                sh 'podman build -t react-lms:latest .'
            }
        }
        stage('Tag') {
            steps {
                sh 'podman tag react-lms:latest $IMAGE'
            }
        }
        stage('Push') {
            steps {
                sh 'podman push --tls-verify=false $IMAGE'
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
