pipeline{
    agent any
    tools {nodejs "nodejs"}

    stages{
        stage('install dependencies'){  
            steps{
                sh 'npm i -g'
            } 
        }
        stage('build app'){
            steps{
            sh 'npm run build'               
            }           
        }
         stage('delete prev'){
            steps{
                sh 'ssh root@student.examli.com rm -r ../../var/www/html/student.examli.com/*'               
            }     
         } 
        stage('move build folder'){
            steps{
                sh 'rsync -pav ./build/* root@student.examli.com:../../var/www/html/student.examli.com'              
            }           
        } 
    }
}
