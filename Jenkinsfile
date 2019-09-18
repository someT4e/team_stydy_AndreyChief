node {
  checkout scm
  docker.image('node:latest').inside {
    stage('install') {
      sh 'npm i'
    }
    stage('test') {
      sh 'npm test'
    }
    stage('build') {
      sh 'npm run build'
    }
  }
}
