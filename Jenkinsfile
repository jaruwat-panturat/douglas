pipeline {
  agent any
  stages {
    stage('Buzz Buzz') {
      steps {
        echo 'Buzz Buzz'
      }
    }

    stage('Bees Bees') {
      steps {
        echo 'Bees Bees!!!'
      }
    }

    stage('artifact') {
      steps {
        archiveArtifacts(fingerprint: true, artifacts: 'target/*.jar')
      }
    }

  }
}