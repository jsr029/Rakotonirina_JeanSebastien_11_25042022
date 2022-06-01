# Rakotonirina_JeanSebastien_11_25042022
Développeur Javascript/React 

# P11 OpenClassRooms : Développez une application Web avec React et React Router
Compétences évaluées
- Créer des composants avec React
- Développer les routes d'une application web avec React Router
- Initialiser une application web avec un framework
# Demo
[Here](https://jsr029.github.io/Rakotonirina_JeanSebastien_11_25042022/)

After the link was clicked, you can navigate to Accueil and you will see the website created with React

# How to Deploy React App to Github
- just follow intructions [Here](https://www.c-sharpcorner.com/article/how-to-deploy-react-application-on-github-pages/)

# P11 pseudo Algorigram

<div style="text-align:center; width:800px"><img src="https://github.com/jsr029/Rakotonirina_JeanSebastien_11_25042022/blob/Fetch-one-time-in-app-and-useContext-plus-props/P11BrainConcept.jpeg" alt="P11 pseudo Algorigram" /></div>

# Sum up
1. You need to have a repository on Github
2. Install your react app in your local network
3. Modify your package.json by adding three lines :
   "homepage": "https://{username}.github.io/{yourfolderrepository}" /** Just before dependencies*/
   
   "predeploy": "npm run build", /** Insert those two lines inside scripts section, after "build" */
   
   "deploy": "gh-pages -d build"
   
4. Don't forget to put https://{username}.github.io/{yourfolderrepository} inside all links of your React App, like images links
5. Then you can type in the vscode terminal : npm run deploy
6. It will create Deploy and gh-pages branches on Github
7. In Github Settings >> Pages, choose gh-pages branch
8. Click on the link created to display the React App

Have fun !
