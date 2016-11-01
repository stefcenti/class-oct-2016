1: In Git: copy SSH link

2: In Term: > git clone git@github:.... // where git@... is the link copied in step 1

3: Continue in Term:

  > git remote -v
  
  origin git@... (fetch)
  origin git@... (push)
  
  > touch index.html
  
4: - In Sublime, edit index.html, add starter html text by entering [html <tab>]
   - Add an unordered lists of work done over the weekend
   
5: In Term:

  > git add . // to add all the files to be ready for commit
  
  > git status
  On branch master
  
  Initial commit
  
  Changes to be committed:
   (use "git rm --cached

  ...
  
6: Create a index.php file with the following text in it:

  <?php include_once("index.html")?>
  
7: Create a composer.json file with the following text in it:

  {}
  
  NOTE: steps 6&7 are needed to tell heroku that the project is truly (???? a project that can be deployed ????)
