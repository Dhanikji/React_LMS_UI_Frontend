pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh '''
                eval $(minikube docker-env)
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
    }
}
