pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t react-lms:latest .
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                helm upgrade --install react-lms ./helm-chart -n react-app
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                kubectl get pods -n react-app
                '''
            }
        }
    }
}
