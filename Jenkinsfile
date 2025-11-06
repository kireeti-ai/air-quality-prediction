pipeline {
    // 1. Tell Jenkins where to run
    agent any

    // 2. Define the stages of our pipeline
    stages {
        // --- CHECKOUT STAGE ---
        stage('Checkout Code') {
            steps {
                // This pulls your code from GitHub
                git 'https://github.com/kireeti-ai/air-quality-prediction.git'
            }
        }

        // --- BUILD STAGE ---
        stage('Build Docker Images') {
            steps {
                echo 'Building the Backend image...'
                sh 'docker build -t aqi-backend Backend/'
                
                echo 'Building the Frontend image...'
                sh 'docker build -t aqi-frontend Frontend/'
            }
        }
        
        // --- (Future Step) PUSH STAGE ---
        // We will activate this *after* you set up a registry
        /*
        stage('Push to Registry') {
            steps {
                echo 'Pushing images to Docker Hub...'
                // You would need to add Docker Hub credentials to Jenkins
                // sh 'docker push your-username/aqi-backend:latest'
                // sh 'docker push your-username/aqi-frontend:latest'
            }
        }
        */

        // --- (Future Step) DEPLOY STAGE ---
        stage('Deploy to Kubernetes') {
            steps {
                echo 'Deploying to the cluster...'
                // This is where Jenkins would run 'kubectl apply ...'
            }
        }
    }
}