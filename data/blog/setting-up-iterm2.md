---
title: Setting up your best mac terminal
date: 2022-03-31
tags: [themes, iterm, productivity, zsh, p10k]
draft: false
summary: Setting up your mac terminal to make it more productive and make it look exactly as you want or as your vscode theme.
authors: [default]
---

# Setting up your best mac terminal

In this blog you'll learn the steps to easilly configure your mac terminal so it looks, feels and works better than the default one.

[Step by step video](https://www.youtube.com/watch?v=SVh4osULjP4)

Iterm installation:

_With command_

```sh
brew install --cask iterm2
```

[Iterm2-night-owl](https://github.com/nickcernis/iterm2-night-owl)

```shell
# Install
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

And set ==ZSH_THEME="powerlevel10k/powerlevel10k"== inside ==~/.zshrc ==.

To do so simply open the terminal and type:

```shell
# Open it with your text editor (I use vscode)
code  ~/.zshrc
```

And copy paste ==ZSH_THEME="powerlevel10k/powerlevel10k"== inside. Save, quit your iterm, and done.

Now, you can run the p10k setup comman:

```shell
# Clone the ohmyzsh tool
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

```shell
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions

cd ~/.zsh/

git clone https://github.com/zsh-users/zsh-syntax-highlighting

git clone https://github.com/zsh-users/zsh-completions
```

Now go to the zshrc config file (p10k configuration) to add the plugins we just downloaded

```shell
code  ~/.zshrc
```

And copy paste the following config files bellow **ZSH_THEME="powerlevel10k/powerlevel10k"**

---

ZSH_THEME="powerlevel10k/powerlevel10k"

source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh
source ~/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source ~/.zsh/zsh-completions/zsh-completions.plugin.zsh

---
