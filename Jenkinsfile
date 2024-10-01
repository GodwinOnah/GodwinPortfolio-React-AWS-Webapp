pipeline {
    agent any
    tools{
        nodejs "NodeJS"
    }

    stages {
        stage('Git Checkout') {
            steps {
                checkout scmGit(branches: [[name: 'main']], 
                        userRemoteConfigs: [[url: 'https://github.com/GodwinOnah/GodwinPortfolio-React-AWS-Webapp.git']])
            }
        }
        stage('Docker Prune') {
            steps {
                sh "docker system prune -a --volumes -f"
                sh "sudo service docker start"
                
            }
        }
        // stage('NPM Install') {
        //     steps {
        //         sh "npm install -g npm@latest"
                
        //     }
        // }
        // stage('Build') {
        //     steps {
        //         sh "npm run build"
                
        //     }
        // }
        stage('Build Docker Image') {
            steps {
                sh "docker compose up -d --no-color --wait --build"
                
            }
        }
        stage('PUSH DOCKER IMAGE TO DOCKERHUB') {
            steps {
                sh "docker tag godwin-portfolio:v1 daddkiki/godwin-portfolio-app1"
                sh ""               
            }
        }
    }
        post {
            always {
                sh "docker compose down -v --remove-orphans"
            }
        }
    
}
