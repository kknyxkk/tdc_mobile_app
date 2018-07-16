pipeline {
  agent { 
    node { label 'android' }                    
  }
  stages {
    stage('Lint & Unit Test') {
      parallel {                                 
        stage('checkStyle') {
          steps {
             sh 'react-native run-android'
          }
        }
        stage('Unit Test') {
          null
        }
      }
    }
    stage('UI Testing') {
      null
    }
    stage('Deploy') {
      null
    }
  } 
  post {
    always {

    }
  }
}