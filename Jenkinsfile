pipeline {
  agent any
  stages {
    stage('Lint & Unit Test') {
      parallel {
        stage('Dploying API') {
          steps {
            sh 'docker run -it -d -p 3000:3000 --name tdc-api rsmartins78/tdc-mobile-api'
          }
        }
        stage('Service Test') {
          steps {
            //sh 'source /etc/profile.d/android_home'
            sh "sleep 2"
            sh "docker run -it --rm --link tdc-api rsmartins78/tdc_service_test bash -c 'cucumber BASE_URL=http://tdc-api:3000/api/v1'"
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
            }
        }
    }
  //post {
  //  always {
  //    archiveArtifacts(allowEmptyArchive: true, artifacts: 'app/build/outputs/apk/production/release/*.apk')
  //    // And kill the emulator?
  //    sh 'adb emu kill'
  //          }
  //      }
    }
}
