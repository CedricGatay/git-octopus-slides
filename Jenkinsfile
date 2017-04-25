node{
        stage("Checkout"){
        checkout scm
        }
        def m2Repo = '-v \$(pwd)/app -v /var/jenkins_home/.m2:/home/jenkins/.m2 -w /app -e MAVEN_OPTS=-Dfile.encoding=UTF-8'
        stage("Maven build"){
                docker.build("asciidoctor").inside("${m2Repo}"){         
                        sh "mvn clean package -B"
                        step([$class: 'ArtifactArchiver', artifacts: 'target/generated-docs/**/*'])
                        publishHTML(target: [allowMissing: false, alwaysLinkToLastBuild: true, keepAll: false, 
                                reportDir: 'target/generated-docs/', reportFiles: 'index.html', reportName: 'Doc / Maven']) // 1
                        stash includes: 'target/generated-docs/**', name: 'htmlDocsMaven'
                }
        }
        stage("Gradle build"){
                docker.build("asciidoctor").inside("${m2Repo}"){
                        checkout scm
                        sh "./gradlew asciidoc"
                        step([$class: 'ArtifactArchiver', artifacts: 'build/asciidoc/**/*'])
                        publishHTML(target: [allowMissing: false, alwaysLinkToLastBuild: true, keepAll: false, 
                                reportDir: 'build/asciidoc/', reportFiles: 'index.html', reportName: 'Doc / Gradle']) // 1
                        stash includes: 'build/asciidoc/**', name: 'htmlDocsGradle'
                }
        }
}