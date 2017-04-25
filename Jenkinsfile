node("docker"){
    wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
        stage("Checkout"){
            deleteDir()
            checkout scm
        }
        def container = docker.build("asciidoctor")
        def m2Repo = '-e MAVEN_OPTS=-Dfile.encoding=UTF-8'
        stage("Gradle build"){
                container.inside("${m2Repo}"){
                        sh "./gradlew asciidoc"
                        step([$class: 'ArtifactArchiver', artifacts: 'build/asciidoc/**/*'])
                        publishHTML(target: [allowMissing: false, alwaysLinkToLastBuild: true, keepAll: false, 
                                reportDir: 'build/asciidoc/', reportFiles: 'index.html', reportName: 'Doc / Gradle']) // <1>
                        stash includes: 'build/asciidoc/**', name: 'htmlDocsGradle'
                }
        }
        stage("Maven build"){
                container.inside("${m2Repo}"){         
                        sh "mvn"
                        step([$class: 'ArtifactArchiver', artifacts: 'target/generated-docs/**/*'])
                        publishHTML(target: [allowMissing: false, alwaysLinkToLastBuild: true, keepAll: false, 
                                reportDir: 'target/generated-docs/', reportFiles: 'index.html', reportName: 'Doc / Maven']) // <2>
                        stash includes: 'target/generated-docs/**', name: 'htmlDocsMaven'
                }
        }
    }
}