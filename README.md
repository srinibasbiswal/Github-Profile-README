# GitHub Profile READMEs
![GitHub pull requests](https://img.shields.io/github/issues-pr/srinibasbiswal/GithubProfileReadMe?color=green) ![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/srinibasbiswal/GithubProfileReadMe) ![GitHub contributors](https://img.shields.io/github/contributors-anon/srinibasbiswal/GithubProfileReadMe)

Happy Hacktoberfest! Hacktoberfest is back :fire:
Github Profile Cards is a list of GitHub Profle README templates of Hacktoberfest 2020 participants.

Link to webpage: [https://github-profile-readmes.firebaseapp.com/](https://github-profile-readmes.firebaseapp.com/)

## Contributing

If this is your first pull request, please read this article: [How To Create a Pull Request on GitHub](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github)

Read more about GitHub Profile README: [GitHub Official Profile README Docs](https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme)

### Step 1

Fork the repo by pressing the "Fork" button on the top right side of the
repository and clone your forked repository.

### Step 2

In your forked repository, edit `users.js` [(src/dataSet/users.js)](src/dataSet/users.js) and add your name and github userName to the bottom of the file using this format with adding a comma after the end of the prevoius user's data. :

```
  {
    name : "Full Name",
    githubUserName : "github userName"
  }
```

### Step 3 

In your forked repository, go to `githubCards folder` [(src/dataSet/githubCards)](src/dataSet/githubCards) and add you Github Profile README template keeping the name of the file as your `github userName` with extension as `.md`.

```
Example : 
if GitHub userName is srinibasbiswal, then the fileName will be :

srinibasbiswal.md

```

### Step 4 

Commit your changes and submit a pull request! After your pull request gets accepted, you will be able to see your very own GitHub README card on the [Github Profile READMEs](https://github-profile-readmes.firebaseapp.com/)!

* Make sure you have updated code from the master branch before making the pull request.

### Step 5

Please star the repo if you like this fun little Hacktoberfest project :heart:


### How to run / debug in your local

After cloning the repo, run the following commands.
```
npm install
npm start
```

* Make sure you have Node installed in your local system.


## License

[MIT](LICENSE)
