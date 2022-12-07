pipeline {
  agent any
  stages {
    stage('Buzz Build') {
      steps {
        echo 'Buzz Buzz'
        sh './jenkins/build.sh'
      }
    }

    stage('Bees Bees') {
      steps {
        echo 'Bees Bees!!!'
      }
    }

    stage('test new branch') {
      steps {
        echo 'test new branch'
      }
    }

  }
}