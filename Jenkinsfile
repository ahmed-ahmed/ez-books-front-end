pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('deploy') {
      steps {
        sh '''cd /var/www/html
sudo rm -rf **.** *
sudo cp -R /var/lib/jenkins/workspace/ez-books-front-end_master/dist/* .
sudo chown -R apache:apache'''
      }
    }

  }
}