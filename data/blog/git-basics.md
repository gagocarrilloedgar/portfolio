---
title: Getting started with git, github & vscode
date: 2022-03-31
tags: [github, git, source, control, shell]
draft: false
summary: 'This is quite an easy and quick introducction to git, github and source control using
vscode and trunk-based alike flow.'
authors: [default]
---

# Getting started with git, github & vscode

## Before staring

This first two steps are for those who don't have a github account setup in their vscode and don't have the _code_ command installed.

If you know how to do that or you already have them configured, you can skip this step.

---

### Installing the **code** command

The _code_ command let's you open vscode windos from your terminal in an easy way, reuse windows, etc.

If you don't have the _code_ command installed, you can quickly do it by going to your **vscode** and type:

1. > cmd shift p | ⌘ + ⇧ + P

2. This will pop up a search bar (Command Palette) inside vscode.
3. Type _shell command_ to find _Shell Command: Install 'code' command in PATH command_
4. Install it and you're done. Now you can use the code command in your terminal.

### Setup your github account

Now that we have the _code_ command, let's setup a github account in order to be able to push and pull changes from our repositories.

The easiest way is to configure git with the same email as your github account and let vscode handle the rest.

1. Config your name and username

```shell
~ git config --global user.name "Your name here"
~ git config --global user.email "your_email@example.com"
```

2. Now, assuming you already have a [github](https://github.com) account, you are done!

3. Once you make a push vscode will make you login and will setup your peronsal token.

---

## Cloning the project and installing its dependencies

Let's say we want to make changes to this website:

> https://github.com/nuwe-io/blog

The first we need to do is clone it and install the dependencies so we can execute it.

If your don't know how to open your terminal using a command, on mac you can open one doing:

> cmd space

and then serach for terminal.

Once open, go to the repository you want to clone the project using _cd_ and simply type in your terminal:

```shell
git clone https://github.com/nuwe-io/blog
```

This command will create a new folder for you plus it will have the .git history inside.

After, go to your newly cloned project.

For that you have several ways, you can either use your terminal and open a new vscode window or
refresh the vscode window your are using at the moment.

Going back, open your new projec using:

```shell
~ cd blog
~ code -r .#Open the project in the same window
~ code . #Open new window
```

Once there you need to install your project dependencies:

```shell
# With npm or yarn (check the repo)
~ npm install
~ yarn install
```

## Project branches, updates and github config

So, the main commands you need to know navigate and make changes to your code are:

1. **git branch**: This will let you know the branch you are currently in (usually main or master if you've cloned a repo from github)
2. **git branch branch_name**: it will create a new **local** branch with the _branch_name_ you set.

> Local branches and github branches don't have to be the same ones. A local branch will not become a Github / Github / Bitbuket branch, until you push it.

3. **git add .**: this will add all your current changes to the branch your are currently in.
4. **git checkout branch_name** you'll switch to _branch_name_ and you'll take all your local changes with you to that new branch.
5. **git pull** pull(download) changes from the master branch or **git pull origin branch_name** pull changes from the specified branch.
6. **git push** push(upload) changes from the master branch or **git push origin branch_name** push changes from the specified branch.

With the previous six commands you can navigate and get started with the basics of source control with git and github.

### A quite common flow

There are a lot of git control flows, this one is based on _scaled trunk-based development_ (we will talk more about that in another blog).

1. Clone the project

```sh
~ git clone https://yourproject.com
```

2. Install the dependencies

```sh
~ npm/yarn install
```

3. Create a branch, swith to it and start making changes

```sh
~ git branch  my-branch-name
~ git checkout my-branch-name

# or with one command
~ git checkout -b my-branch-name
```

4. Make your changes to the code

5. Add all the changes. You can optionally add just some selected folders or files but for now let's add all.

```shell
~ git add .
```

6. Commit the changes and push to your branch

```shell
~ git commit -m "Your commit title. Use something that represents the changes you've done" -m "This is the description and it is optional"
~ git push origin my-branch-name
```

7. And, that is all. Now, you can create a pull request (more info in another blog) or let your team manage that.

8. Go back to your master branch, pull the changes and start again.

```shell
~ git checkout master/main
~ git pull origin main
```

That is all, now you can make changes to your code, save local changes and push and pull them to your github / gitlab repos.

### Bonus

I usually keep only two or three local branches in order to have my git branches clean.

You can remove local branches using:

```shell
~ git branch -d branch_name
# or
~git branch -D branch_name  #Force the delete event if there are local changes
```

And for delete github branches:

```shell
~ git push origin --delete branch_name
```
