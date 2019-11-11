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
        sh 'docker rm -f frontend || true'
        sh 'docker run -d -p 80:80 --name frontend apache-front-end'
      }
    }

  }
}