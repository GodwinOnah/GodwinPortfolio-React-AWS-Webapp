pipeline {
    agent any

    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/GodwinOnah/GodwinPortfolio-React-AWS-Webapp.git'
            }
        }
        stage('NPM Install') {
            steps {
                sh "npm install"
                
            }
        }
        stage('Build') {
            steps {
                sh "npm run build"
                
            }
        }
        stage('Build Docker Image') {
            steps {
                sh "docker build -t godwin-portfolio:v1 ."
                
            }
        }
        stage('PUSH DOCKER IMAGE TO DOCKERHUB') {
            steps {
                sh "docker build -t godwin-portfolio:v1 ."
                
            }
        }
    }
}
