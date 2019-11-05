pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t apache-front-end .'
      }
    }

  }
}