pipeline {
  agent none
  stages {
    stage('Test') {
      agent {
        docker {
          image 'node:7-alpine'
        }

      }
      steps {
        sh 'node --version'
        sh 'ls'
        sh 'cat ./app.json'
      }
    }
    stage('') {
      steps {
        tool(name: 'Gradle', type: 'build')
      }
    }
  }
}