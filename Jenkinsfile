pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'yarn'
        sh 'yarn build'
        sh 'docker build -t apache-front-end .'
      }
    }
    stage('deploy') {
      steps {
        sh 'docker run -p 8000:80 apache'
      }
    }
  }
}