pipeline {
  agent { 
    node { label 'android' }                    
  }
  stages {
    stage('Lint & Unit Test') {
      parallel {                                 
        stage('checkStyle') {
          steps {
             //sh 'react-native run-android'
             echo 'checkStyle'
          }
        }
        stage('Unit Test') {
          steps {
             echo 'Unit Test'
          }
        }
      }
    }
    stage('UI Testing') {
      steps {
          echo 'Front'
      }
    }
    stage('Deploy') {
      steps {
          echo 'Deploy'
      }
    }
  } 
  post {
    always {

    }
  }
}