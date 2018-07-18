pipeline {
  agent any
  stages {
    stage('Lint & Unit Test') {
      parallel {
        stage('checkStyle') {
          steps {
            sh './android/gradlew checkStyle'
          }
        }

        stage('Unit Test') {
          steps {
            // Execute your Unit Test
            sh './android/gradlew testStagingDebug'
          }
        }
      }
    }
    stage('UI Testing') {
      steps {
        script {                        
          if (currentBuild.result == null         
              || currentBuild.result == 'SUCCESS') {  
          // Start your emulator, testing tools
          sh 'emulator @Nexus_Emulator_API_24'
          sh 'appium &'  
     
          // You're set to go, now execute your UI test
          sh 'rspec spec -fd'
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
               // Deploy when the committed branch is master (we use fastlane to complete this)     
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
                    archiveArtifacts(allowEmptyArchive: true, artifacts: 'app/build/outputs/apk/production/release/*.apk')
                    sh 'adb emu kill'

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
