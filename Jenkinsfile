pipeline {
  agent { 
    node { label 'android' }                    
  }
  stages {
    stage('Lint & Unit Test') {
      parallel {                                 
        stage('checkStyle') {
          steps {
          }
        }

        stage('Unit Test') {
          steps {

          }
        }
      }
    }
    stage('UI Testing') {
      steps {
      }
    }
    stage('Deploy') {
      steps {

    }
  } 
  post {
    always {

    }
  }
  }
}