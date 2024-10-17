pipeline {
    agent any

    tools{
        nodejs "NodeJS"
    }

    parameters{
        booleanParam(name:'builtCompleted', defaultValue:false, description: '')   
    }

    environment{
        NEW_VERSION = '1.0.0'
        GitHub_Repo_app_name='godwin-portfolio-react-app'
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
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh "docker build -t godwin-porfolio-app:${NEW_VERSION} ."
                
            }
        }
        stage('PUSH DOCKER IMAGE TO DOCKERHUB') {
            steps {
                withCredentials([usernamePassword(credentialsId:'godwin-portfolio-Cred', passwordVariable:'PASSWORD', usernameVariable:'USERNAME',)]){
                sh"docker login -u $USERNAME -p $PASSWORD"
                sh "docker tag godwin-portfolio-app:${NEW_VERSION} $USERNAME/${GitHub_Repo_app_name}"
                sh "docker push $USERNAME/${GitHub_Repo_app_name}" 
                sh "docker logout" 
                
                }            
            }
        }
    }
        post {
            always {
               echo "Verion ${ NEW_VERSION} built"   
            }
            success{
                //  sh "docker system prune -a --volumes -f" 
                 echo "Built successful"  
            }
            failure{
                // sh "docker system prune -a --volumes -f" 
                echo "Built failed"  
            }
        }
    
}
