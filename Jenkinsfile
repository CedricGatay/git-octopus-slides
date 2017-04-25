def m2Repo = '-v /var/jenkins_home/.m2:/home/jenkins/.m2 -e MAVEN_OPTS=-Dfile.encoding=UTF-8'
docker.image("codenvy/alpine_jdk8").inside("${m2Repo}"){
        checkout scm
        sh "mvn clean package -B"
        step([$class: 'ArtifactArchiver', artifacts: 'target/generated-docs/**/*.html'])
        publishHTML(target: [allowMissing: false, alwaysLinkToLastBuild: true, keepAll: false, 
                    reportDir: 'target/generated-docs/', reportFiles: 'index.html', reportName: 'Doc']) // 1
        stash includes: 'target/generated-docs/**', name: 'htmlDocs'
}