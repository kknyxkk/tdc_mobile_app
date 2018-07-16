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
          echo 'Unit'
        }
      }
    }
    stage('UI Testing') {
      echo 'UI'
    }
    stage('Deploy') {
      echo 'Deploy'
    }
  } 
  post {
    always {

    }
  }
}