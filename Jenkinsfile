pipeline{
    agent any
    tools {nodejs "nodejs"}

    stages{
        stage('install dependencies'){  
            steps{
                bat 'npm i -g'
            } 
        }
        stage('build app'){
            steps{
            bat 'npm run build'               
            }           
        }
         stage('delete prev'){
            steps{
                bat 'ssh root@domain.com rm -r ../../var/www/html/domain.com/*'               
            }     
         } 
        stage('move build folder'){
            steps{
                bat 'rsync -pav ./build/* root@domain.com:../../var/www/html/domain.com'              
            }           
        } 
    }
}
