pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/kireeti-ai/air-quality-prediction.git'
            }
        }
        stage('Build Docker Images') {
            steps {
                echo 'Building the Backend image...'
                sh 'docker build -t aqi-backend Backend/'
                
                echo 'Building the Frontend image...'
                sh 'docker build -t aqi-frontend Frontend/'
            }
        }
        stage('Push to Registry') {
            steps {
                echo 'Pushing images to Docker Hub...'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                echo 'Deploying to the cluster...'
        
            }
        }
    }
}
