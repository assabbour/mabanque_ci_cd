pipeline {
    // Spécifie que le pipeline peut s'exécuter sur n'importe quel agent
    agent any
    
    // Déclare les variables d'environnement utilisées dans le pipeline
    environment {
        GIT_REPO = 'https://github.com/assabbour/mabanque_ci_cd.git' // URL de votre dépôt GitHub
        NODE_VERSION = '16' // Version de Node.js requise pour Angular
    }
    
    stages {
        // Première étape : Cloner le dépôt GitHub
        stage('Cloner le dépôt') {
            steps {
                echo 'Clonage du dépôt GitHub...' // Affiche un message dans la console Jenkins
                git branch: 'main', url: "${GIT_REPO}" // Cloner la branche 'main' du dépôt spécifié
            }
        }
        
        // Deuxième étape : Installer Node.js
        stage('Installer Node.js') {
            steps {
                echo 'Installation de Node.js...'
                sh """
                # Ajouter le référentiel Node.js et installer la version spécifiée
                curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | sudo -E bash -
                sudo apt-get install -y nodejs
                # Vérifier les versions installées
                node -v
                npm -v
                """
            }
        }
        
        // Troisième étape : Installer les dépendances du projet
        stage('Installer les dépendances') {
            steps {
                echo 'Installation des dépendances Angular...' // Affiche un message dans la console Jenkins
                sh 'npm install' // Installe les dépendances nécessaires à partir du fichier package.json
            }
        }
        
        // Quatrième étape : Construire l'application Angular
        stage('Construire l’application') {
            steps {
                echo 'Construction de l’application Angular...' // Affiche un message dans la console Jenkins
                sh 'npm run build --prod' // Compile et construit l'application en mode production
            }
        }
        
        // Cinquième étape : Afficher les fichiers générés après la construction
        stage('Afficher les fichiers générés') {
            steps {
                echo 'Liste des fichiers dans le dossier dist/mabanque_ci_cd :' // Affiche un message
                sh 'ls -la dist/mabanque_ci_cd' // Liste les fichiers dans le répertoire de sortie
            }
        }
    }
    
    // Actions à effectuer une fois le pipeline terminé
    post {
        always {
            echo 'Pipeline terminé.' // Affiche un message indiquant la fin du pipeline
        }
    }
}
