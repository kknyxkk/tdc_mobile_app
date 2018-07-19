pipeline {
  agent any
  stages {
    stage('Integrated Test') {
      parallel {
        stage('Deploying API') {
          steps {
            sh 'docker run -d -p 3000:3000 --name tdc-api rsmartins78/tdc_mobile_api'
          }
        }
        stage('Service Test') {
          steps {
            //sh 'source /etc/profile.d/android_home'
            sh "sleep 2"
            sh 'docker run --rm -e BASE_URL=http://tdc-api:3000/api/v1 --link tdc-api rsmartins78/tdc_service_test'
          }
        }
      }
    }
    stage('UI Testing') {
      steps {
        script {                        
          if (currentBuild.result == null         
              || currentBuild.result == 'SUCCESS') {  
            sh 'echo UI Testing...'
          }
        }
      }
    }
    stage('Deploy') {
      steps {
        script {                                                        
          if (currentBuild.result == null         
              || currentBuild.result == 'SUCCESS') {  
             if(env.BRANCH_NAME ==~ /master/) {     
               sh 'fastlane app_deploy'
          }
        }
      }
    }
  }
    stage('Post') {
        steps {
            script {
                if (currentBuild.result == 'SUCCESS') {
                    sh 'echo Sucesso'
                    archiveArtifacts(allowEmptyArchive: true, artifacts: 'android/app/build/outputs/apk/*.apk')
                    sh 'docker rm -f tdc-api'
                } 
                if (currentBuild.result == 'FAILED') {
                    echo "Não sucesso, foi mal"
                    sh 'docker rm -f tdc-api'
                }
            }
        }
    }
  }
}
