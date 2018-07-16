pipeline {
  agent { 
    node { label 'android' }                    
  }
  stages {
    stage('Lint & Unit Test') {
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

    }
  }
}