pipeline {
  agent any
  stages {
    stage('Buzz Build') {
      parallel {
        stage('Buzz Build') {
          steps {
            echo 'Buzz Buzz'
            sh 'echo "hello world"'
          }
        }

        stage('test parallel') {
          steps {
            sh 'echo %{HOME}'
          }
        }

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
        sh '''echo $HOME
echo $INVOCATION_ID
echo $JENKINS_HOME
echo $JOURNAL_STREAM'''
      }
    }

  }
}