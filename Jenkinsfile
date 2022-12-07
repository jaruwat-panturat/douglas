pipeline {
  agent any
  stages {
    stage('Buzz Build') {
      steps {
        echo 'Buzz Buzz'
        sh 'echo "hello world"'
        archiveArtifacts(artifacts: 'target/*.jar', fingerprint: true)
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