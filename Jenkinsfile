pipeline {
  agent none
  stages {
    /*stage('Lint & Unit Test') {
      parallel {                                 
        stage('checkStyle') {
        }
        stage('Unit Test') {
        }
      }
    }
    stage('UI Testing') {
    }
    stage('Deploy') {
    }
  } 
  post {
    always {

    }*/
      stage('Test') {
        agent { 
              docker { image 'node:7-alpine' }                    
            }
        steps {
              sh 'node --version'
            }
        }
    }
}
