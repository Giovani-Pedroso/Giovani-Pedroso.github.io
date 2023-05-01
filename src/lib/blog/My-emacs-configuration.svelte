<div id="table-of-contents" role="doc-toc">
<h2>Table of Contents</h2>
<div id="text-table-of-contents" role="doc-toc">
<ul>
<li><a href="#org944a495">1. Basic</a>
<ul>
<li><a href="#orge3cc79c">1.1. Basic configurations for functionality</a></li>
<li><a href="#org19cd183">1.2. Packages config</a></li>
<li><a href="#orgd48679c">1.3. Custom variables</a></li>
</ul>
</li>
<li><a href="#org464c362">2. Functional</a>
<ul>
<li><a href="#orge27ac7f">2.1. Evil</a></li>
<li><a href="#orga58bc17">2.2. evil-nerd-commenter</a></li>
<li><a href="#org99dc1f2">2.3. undo-fo and undo tree</a></li>
<li><a href="#org81c140b">2.4. Rainbow mode</a></li>
<li><a href="#orgb372b8c">2.5. Which key</a></li>
<li><a href="#orge1b0d0d">2.6. Auto-complete</a></li>
<li><a href="#org55f6839">2.7. NeoTree</a></li>
<li><a href="#orged986f3">2.8. Centaur tabs - OFF</a></li>
<li><a href="#org405a933">2.9. Flycheck syntax checker</a></li>
<li><a href="#org7c311ee">2.10. Helm - OFF</a></li>
<li><a href="#org62457c8">2.11. Ivy - OFF</a>
<ul>
<li><a href="#orgfbce5ee">2.11.1. Ivy-rich - OFF</a></li>
</ul>
</li>
<li><a href="#org1849f3e">2.12. Vertigo</a></li>
<li><a href="#org1297379">2.13. Marginalia</a></li>
<li><a href="#orgddf7d4d">2.14. Rainbow delimiter</a></li>
<li><a href="#org2b85aa7">2.15. Projectile</a>
<ul>
<li><a href="#orgdf6bbc7">2.15.1. Counsel</a></li>
</ul>
</li>
<li><a href="#org86e11bc">2.16. Magit</a></li>
<li><a href="#orge9f92d4">2.17. Helpful</a></li>
<li><a href="#org968e4d3">2.18. Dash Board</a></li>
<li><a href="#org6f67c2a">2.19. Lorem ipsom</a></li>
</ul>
</li>
<li><a href="#org48f46a0">3. Appearance</a>
<ul>
<li><a href="#org41f97ac">3.1. All the icons</a></li>
<li><a href="#orgfa3e660">3.2. Doom Themes</a></li>
<li><a href="#orgb684299">3.3. Doom modeline</a></li>
<li><a href="#org223f57a">3.4. Page Breaking</a></li>
<li><a href="#org5816c6a">3.5. Fonts</a></li>
</ul>
</li>
<li><a href="#orge773d65">4. Programming</a>
<ul>
<li><a href="#org9b0fd4c">4.1. lsp-mode'</a>
<ul>
<li><a href="#org9fa77d9">4.1.1. lsp-ui</a></li>
<li><a href="#org7c030c2">4.1.2. lsp-treeemacs</a></li>
</ul>
</li>
<li><a href="#orgd5b240b">4.2. dap-mode ( Debug Adapter Protocol)</a></li>
<li><a href="#org454e14b">4.3. Company-mode</a></li>
<li><a href="#org41d06ce">4.4. Elisp</a>
<ul>
<li><a href="#orgb0c0f3c">4.4.1. ParaEdit</a></li>
</ul>
</li>
<li><a href="#org05944e4">4.5. Org</a>
<ul>
<li><a href="#org8b1a768">4.5.1. Basic Config</a></li>
<li><a href="#orgdcaefdc">4.5.2. Centraliza o texto org mode</a></li>
<li><a href="#org34c16d8">4.5.3. Add templets for the extencions .el, .py &#x2026;</a></li>
<li><a href="#orgb41a74b">4.5.4. Babel to load</a></li>
<li><a href="#org0b115b5">4.5.5. Tangle automatic</a></li>
<li><a href="#orgbc2c812">4.5.6. Org Agenda</a></li>
<li><a href="#orgbcd8b3c">4.5.7. Customization</a></li>
<li><a href="#org64aa837">4.5.8. Org Roam</a></li>
<li><a href="#org5c77e7a">4.5.9. Change the sizes of the headers</a></li>
</ul>
</li>
<li><a href="#org7ec2f15">4.6. Python</a>
<ul>
<li><a href="#org934d998">4.6.1. Python mode</a></li>
</ul>
</li>
<li><a href="#org041b05a">4.7. JS- Not useful since I have the web mode</a>
<ul>
<li><a href="#org520f070">4.7.1. RJSX</a></li>
<li><a href="#orgbf9902d">4.7.2. Tide</a></li>
</ul>
</li>
<li><a href="#orgea1ead9">4.8. Typescript</a></li>
<li><a href="#org4c051b8">4.9. web-mode</a>
<ul>
<li><a href="#orgcc061fb">4.9.1. Prettier</a></li>
</ul>
</li>
<li><a href="#orga4c1d24">4.10. CSS/SCSS-mode</a></li>
<li><a href="#orga7db7bd">4.11. JSON-mode</a></li>
<li><a href="#orgf9bcdbc">4.12. yalm-mode</a></li>
<li><a href="#org4c898b4">4.13. svelte-mode</a></li>
<li><a href="#org6212b63">4.14. Dockerfile-mode</a></li>
<li><a href="#orgd768f1f">4.15. Rust-mode</a></li>
<li><a href="#org146765b">4.16. format-all</a></li>
<li><a href="#org3245c7e">4.17. YASnippet</a></li>
</ul>
</li>
<li><a href="#org84e4d61">5. Update packages</a></li>
<li><a href="#org54caa96">6. Key Binds</a>
<ul>
<li><a href="#org9783a9f">6.1. Evil colemakeDH</a></li>
<li><a href="#org88c13a9">6.2. org-babel-tange</a></li>
<li><a href="#org3fff7e9">6.3. flyspell, ispell</a>
<ul>
<li><a href="#orgba65a6e">6.3.1. flyspelll-prog-mode key binding</a></li>
<li><a href="#org1bc5be4">6.3.2. flyspell-key-mode binding</a></li>
<li><a href="#org80579d4">6.3.3. Ispell comments and strings key binding</a></li>
<li><a href="#org1a76f10">6.3.4. Ispell key binding</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#org11204d4">7. Test area</a></li>
</ul>
</div>
</div>
<p>
My main goal of this configuration is to turn the emacs into a IDE for working with React, nodeJs and embedded system like stm32 and esp-idf. I made this configuration using the tutorials of the channel <a href="https://www.youtube.com/c/SystemCrafters">SystemCrafters</a>
</p>

<p>
C-M-\ format the code block
</p>

<div id="outline-container-org944a495" class="outline-2">
<h2 id="org944a495"><span class="section-number-2">1.</span> Basic</h2>
<div class="outline-text-2" id="text-1">
<p>
These settings do not  need any package installed, they just change basic behaviour of emacs 
</p>
</div>
<div id="outline-container-orge3cc79c" class="outline-3">
<h3 id="orge3cc79c"><span class="section-number-3">1.1.</span> Basic configurations for functionality</h3>
<div class="outline-text-3" id="text-1-1">
<div class="org-src-container">
<pre class="src src-emacs-lisp">;;remove o initial buffer
(setq inhibit-tar.up-message t)

;;Hide the tool bar
(tool-bar-mode   -1)

;;Hide the menu bar
(menu-bar-mode   -1)                 

;;Oculta dicase
(tooltip-mode    -1)                 

;;Disable the scroll bar
(scroll-bar-mode -1)                

;;Show the column number in the modeline
(column-number-mode t)              

;;Self closing () {} [] ""
(electric-pair-mode 1)

;;Enable the highlight line
(global-hl-line-mode t)

(kill-buffer)                            

;;Set the lines on in the relative mode
(setq display-line-numbers-type 'relative) 
(global-display-line-numbers-mode)

;;Disable the suspend frame
(global-unset-key (kbd "C-z"))


(delete-selection-mode t) 

;;disable num lines for the modes:
(dolist (mode '(org-mode-hook
								vterm-mode-hook
								term-mode-hook
								shell-mode-hook
								treemacs-mode-hook
								eshell-mode-hook))
	(add-hook mode (lambda () (display-line-numbers-mode 0))))

;;Smoth scroll
(setq mouse-wheel-scroll-amount '(8 ((shift) . 1)) 
			mouse-wheel-progressive-speed nil            
			mouse-wheel-follow-mouse 't                  
			scroll-step 1)                               

;;Broke line
(global-visual-line-mode t)

;;Space in the boards
(set-fringe-mode 0)

;;Cursor type
(setq-default cursor-type 'box)

(setq backup-directory-alist `(("." . "~/.saves")))
</pre>
</div>
</div>
</div>

<div id="outline-container-org19cd183" class="outline-3">
<h3 id="org19cd183"><span class="section-number-3">1.2.</span> Packages config</h3>
<div class="outline-text-3" id="text-1-2">
<p>
Configure the origins on the packages and installs the use-package, this package is a better way to install package that the vanilla emacs package manager
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">;;Verify and initialize the package.el
(require 'package)
;;Define the repos
(setq package-archives '(("melpa" . "https://melpa.org/packages/")
												 ("org"   . "https://orgmode.org/elpa/")
												 ("elpa"  . "https://elpa.gnu.org/packages/")))

;;Init the package system
(package-initialize)
(unless package-archive-contents
	(package-refresh-contents))

;;Installs the use-package
(unless (package-installed-p 'use-package)
	(package-install 'use-package))

(require 'use-package)
(setq use-package-always-ensure t)
</pre>
</div>
</div>
</div>

<div id="outline-container-orgd48679c" class="outline-3">
<h3 id="orgd48679c"><span class="section-number-3">1.3.</span> Custom variables</h3>
<div class="outline-text-3" id="text-1-3">
<p>
I just copy and paste this part 
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">
(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(custom-safe-themes
	 '("1d5e33500bc9548f800f9e248b57d1b2a9ecde79cb40c0b1398dec51ee820daf" "8d7b028e7b7843ae00498f68fad28f3c6258eda0650fe7e17bfb017d51d0e2a2" "a82ab9f1308b4e10684815b08c9cac6b07d5ccb12491f44a942d845b406b0296" "266ecb1511fa3513ed7992e6cd461756a895dcc5fef2d378f165fed1c894a78c" "76ed126dd3c3b653601ec8447f28d8e71a59be07d010cd96c55794c3008df4d7" "d47f868fd34613bd1fc11721fe055f26fd163426a299d45ce69bef1f109e1e71" "7a7b1d475b42c1a0b61f3b1d1225dd249ffa1abb1b7f726aec59ac7ca3bf4dae" "835868dcd17131ba8b9619d14c67c127aa18b90a82438c8613586331129dda63" default))
 '(package-selected-packages
	 '(visual-fill-column org-bullets counsel-projectile forge ivy-rich which-key rainbow-delimiters ivy ivyy flycheck helm undo-fu undo-tree evil centaur-tabs dashboard doom-themes doom-modeline all-the-icons neotree auto-complete auto-package-update use-package))
 '(warning-suppress-log-types '((comp) (comp) (comp)))
 '(warning-suppress-types '((comp) (comp))))
</pre>
</div>
</div>
</div>
</div>

<div id="outline-container-org464c362" class="outline-2">
<h2 id="org464c362"><span class="section-number-2">2.</span> Functional</h2>
<div class="outline-text-2" id="text-2">
<p>
Here is the installation and configuration of packages (code created by community) that give the emacs more functionality
</p>
</div>

<div id="outline-container-orge27ac7f" class="outline-3">
<h3 id="orge27ac7f"><span class="section-number-3">2.1.</span> Evil</h3>
<div class="outline-text-3" id="text-2-1">
<p>
Vim emulator for emacs
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package evil
	:ensure t
	:config
	(evil-mode)
	(evil-set-undo-system 'undo-redo)) 
</pre>
</div>
</div>
</div>

<div id="outline-container-orga58bc17" class="outline-3">
<h3 id="orga58bc17"><span class="section-number-3">2.2.</span> evil-nerd-commenter</h3>
<div class="outline-text-3" id="text-2-2">
<p>
Allow to comment or uncomment lines using a simple keybind
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package evil-nerd-commenter)
(global-set-key (kbd "C-c ç") 'evilnc-comment-or-uncomment-lines)
</pre>
</div>
</div>
</div>

<div id="outline-container-org99dc1f2" class="outline-3">
<h3 id="org99dc1f2"><span class="section-number-3">2.3.</span> undo-fo and undo tree</h3>
<div class="outline-text-3" id="text-2-3">
<p>
Give Undo functions to evil
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package undo-fu)
(use-package undo-tree
			:config
			(undo-tree-mode)
	)

;;Create a 
</pre>
</div>
</div>
</div>

<div id="outline-container-org81c140b" class="outline-3">
<h3 id="org81c140b"><span class="section-number-3">2.4.</span> Rainbow mode</h3>
<div class="outline-text-3" id="text-2-4">
<p>
This package add the functionality to see colors in the buffer #0000ff
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package rainbow-mode
	:ensure t
	:config
	(rainbow-mode)
	)

;;Will initialize the rainbow mode when
;;the web, scss or css are active
(add-hook 'web-mode-hook 'rainbow-mode)
(add-hook 'scss-mode-hook 'rainbow-mode)
(add-hook 'css-mode-hook 'rainbow-mode)
</pre>
</div>
</div>
</div>

<div id="outline-container-orgb372b8c" class="outline-3">
<h3 id="orgb372b8c"><span class="section-number-3">2.5.</span> Which key</h3>
<div class="outline-text-3" id="text-2-5">
<p>
autocomplete for the shortcut keys
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package which-key
	:defer 0
	:diminish which-key-mode
	:config
	(which-key-mode)
	(setq which-key-idle-delay 1))
</pre>
</div>
</div>
</div>

<div id="outline-container-orge1b0d0d" class="outline-3">
<h3 id="orge1b0d0d"><span class="section-number-3">2.6.</span> Auto-complete</h3>
<div class="outline-text-3" id="text-2-6">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package auto-complete
	:ensure t
	:init
	(progn
		(ac-config-default)
		(global-auto-complete-mode t)))
</pre>
</div>
</div>
</div>

<div id="outline-container-org55f6839" class="outline-3">
<h3 id="org55f6839"><span class="section-number-3">2.7.</span> NeoTree</h3>
<div class="outline-text-3" id="text-2-7">
<p>
Open a "file explorer" C-\
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">
(use-package neotree
	:ensure t
	:config
	(progn
		(setq neo-theme (if (display-graphic-p) 'icons 'arrow)))
	:bind (("C-\\" . 'neotree-toggle)))
</pre>
</div>
</div>
</div>

<div id="outline-container-orged986f3" class="outline-3">
<h3 id="orged986f3"><span class="section-number-3">2.8.</span> Centaur tabs - OFF</h3>
<div class="outline-text-3" id="text-2-8">
<p>
Add tabes for emacs I did not like the workflow 
</p>

<p>
+begin<sub>src</sub> emacs-lisp
(use-package centaur-tabs
:demand
:config
(setq centaur-tabs-set-bar 'over
centaur-tabs-set-icons t
centaur-tabs-gray-out-icons 'buffer
centaur-tabs-height 24
centaur-tabs-modified-marker t;
)
(centaur-tabs-mode t)
(setq centaur-tabs-style "slant")
:bind
("C-&lt;prior&gt;" . centaur-tabs-backward)
("C-&lt;next&gt;" . centaur-tabs-forward))
#+end<sub>src</sub>
</p>
</div>
</div>

<div id="outline-container-org405a933" class="outline-3">
<h3 id="org405a933"><span class="section-number-3">2.9.</span> Flycheck syntax checker</h3>
<div class="outline-text-3" id="text-2-9">
<p>
Add the capability to check code syntaxes 
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package flycheck
	:ensure t
	:init (global-flycheck-mode))
</pre>
</div>
</div>
</div>

<div id="outline-container-org7c311ee" class="outline-3">
<h3 id="org7c311ee"><span class="section-number-3">2.10.</span> Helm - OFF</h3>
<div class="outline-text-3" id="text-2-10">
<p>
Auto complete for the mini-buffer
</p>

<p>
;#+begin<sub>src</sub> emacs-lisp
(use-package helm
:ensure t
:config (helm-mode 1))
#+end<sub>src</sub>
</p>
</div>
</div>

<div id="outline-container-org62457c8" class="outline-3">
<h3 id="org62457c8"><span class="section-number-3">2.11.</span> Ivy - OFF</h3>
<div class="outline-text-3" id="text-2-11">
<p>
Auto complete for the mini-buffer
</p>

<p>
;#+begin<sub>src</sub> emacs-lisp
(use-package ivy
:ensure t
:config (ivy-mode 1))
#+end<sub>src</sub>
</p>
</div>

<div id="outline-container-orgfbce5ee" class="outline-4">
<h4 id="orgfbce5ee"><span class="section-number-4">2.11.1.</span> Ivy-rich - OFF</h4>
<div class="outline-text-4" id="text-2-11-1">
<div class="org-src-container">
<pre class="src src-emacs-lisp">;Description for commands
;not working - Emacs for scratch 2 ~= 28:00 min
;(use-package ivy-rich
;  :after ivy
;  :init
;  (ivy-rich-mode 1))
</pre>
</div>

<p>
#+end<sub>src</sub>
</p>
</div>
</div>
</div>
<div id="outline-container-org1849f3e" class="outline-3">
<h3 id="org1849f3e"><span class="section-number-3">2.12.</span> Vertigo</h3>
<div class="outline-text-3" id="text-2-12">
<p>
Auto complete for the mini-buffer
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">;; Enable vertico
(use-package vertico
	:init
	(vertico-mode)
	;; Different scroll margin
	;; (setq vertico-scroll-margin 0)
	;; Show more candidates
	;; (setq vertico-count 20)
	;; Grow and shrink the Vertico minibuffer
	;; (setq vertico-resize t)
	;; Optionally enable cycling for `vertico-next' and `vertico-previous'.
	;; (setq vertico-cycle t)
	)

;; Optionally use the `orderless' completion style. See
;; `+orderless-dispatch' in the Consult wiki for an advanced Orderless style
;; dispatcher. Additionally enable `partial-completion' for file path
;; expansion. `partial-completion' is important for wildcard support.
;; Multiple files can be opened at once with `find-file' if you enter a
;; wildcard. You may also give the `initials' completion style a try.
(use-package orderless
	:init
	;; Configure a custom style dispatcher (see the Consult wiki)
	;; (setq orderless-style-dispatchers '(+orderless-dispatch)
	;;       orderless-component-separator #'orderless-escapable-split-on-space)
	(setq completion-styles '(orderless)
				read-buffer-completion-ignore-case t
				completion-category-defaults nil
				completion-category-overrides '((file (styles partial-completion)))))

;; Persist history over Emacs restarts. Vertico sorts by history position.
(use-package savehist
	:init
	(savehist-mode))
;; A few more useful configurations...
(use-package emacs
	:init
	;; Add prompt indicator to `completing-read-multiple'.
	;; Alternatively try `consult-completing-read-multiple'.
	(defun crm-indicator (args)
		(cons (concat "[CRM] " (car args)) (cdr args)))
	(advice-add #'completing-read-multiple :filter-args #'crm-indicator)

	;; Do not allow the cursor in the minibuffer prompt
	(setq minibuffer-prompt-properties
				'(read-only t cursor-intangible t face minibuffer-prompt))
	(add-hook 'minibuffer-setup-hook #'cursor-intangible-mode)

	;; Emacs 28: Hide commands in M-x which do not work in the current mode.
	;; Vertico commands are hidden in normal buffers.
	;; (setq read-extended-command-predicate
	;;       #'command-completion-default-include-p)

	;; Enable recursive minibuffers
	(setq enable-recursive-minibuffers t))
</pre>
</div>
</div>
</div>

<div id="outline-container-org1297379" class="outline-3">
<h3 id="org1297379"><span class="section-number-3">2.13.</span> Marginalia</h3>
<div class="outline-text-3" id="text-2-13">
<p>
Add information to the buffer as the file size and the permissions
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package marginalia
	:ensure t
	:config
	(marginalia-mode))
</pre>
</div>
</div>
</div>

<div id="outline-container-orgddf7d4d" class="outline-3">
<h3 id="orgddf7d4d"><span class="section-number-3">2.14.</span> Rainbow delimiter</h3>
<div class="outline-text-3" id="text-2-14">
<p>
[{( colorfull
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package rainbow-delimiters
	:hook (prog-mode . rainbow-delimiters-mode))
</pre>
</div>
</div>
</div>

<div id="outline-container-org2b85aa7" class="outline-3">
<h3 id="org2b85aa7"><span class="section-number-3">2.15.</span> Projectile</h3>
<div class="outline-text-3" id="text-2-15">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package projectile
	:diminish projectile-mode
	:config (projectile-mode)
	:custom ((projectile-completion-system 'ivy))
	:bind-keymap
	("C-c p" . projectile-command-map)
	:init
	;; NOTE: Set this to the folder where you keep your Git repos!
	(when (file-directory-p "~/Projects/Code")
		(setq projectile-project-search-path '("~/Projects/Code")))
	(setq projectile-switch-project-action #'projectile-dired))


</pre>
</div>
</div>

<div id="outline-container-orgdf6bbc7" class="outline-4">
<h4 id="orgdf6bbc7"><span class="section-number-4">2.15.1.</span> Counsel</h4>
<div class="outline-text-4" id="text-2-15-1">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package counsel-projectile
	:after projectile
	:config (counsel-projectile-mode))
</pre>
</div>
</div>
</div>
</div>

<div id="outline-container-org86e11bc" class="outline-3">
<h3 id="org86e11bc"><span class="section-number-3">2.16.</span> Magit</h3>
<div class="outline-text-3" id="text-2-16">
<p>
A user interface to manager your git repositories
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package magit
	:commands magit-status
	:custom
	(magit-display-buffer-function #'magit-display-buffer-same-window-except-diff-v1))

;; NOTE: Make sure to configure a GitHub token before using this package!
;; - https://magit.vc/manual/forge/Token-Creation.html#Token-Creation
;; - https://magit.vc/manual/ghub/Getting-Started.html#Getting-Started
(use-package forge
	:after magit)

;;Add evil keys to magit
;;for some reaseon this not work
;;(use-package evil-collection
;;:ensure t
;;:after evil
;;:init
;;(evil-collection-init))
</pre>
</div>
</div>
</div>

<div id="outline-container-orge9f92d4" class="outline-3">
<h3 id="orge9f92d4"><span class="section-number-3">2.17.</span> Helpful</h3>
<div class="outline-text-3" id="text-2-17">
<p>
A better way to see documentation that the emacs original option 
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package helpful
	:ensure t)

;;Change the default description for the helpful description
(global-set-key (kbd "C-h f") #'helpful-callable)

(global-set-key (kbd "C-h v") #'helpful-variable)
(global-set-key (kbd "C-h k") #'helpful-key)


;; Lookup the current symbol at point. C-c C-d is a common keybinding
;; for this in lisp modes.
(global-set-key (kbd "C-c C-d") #'helpful-at-point)

;; Look up *F*unctions (excludes macros).
;;
;; By default, C-h F is bound to `Info-goto-emacs-command-node'. Helpful
;; already links to the manual, if a function is referenced there.
(global-set-key (kbd "C-h F") #'helpful-function)

;; Look up *C*ommands.
;;
;; By default, C-h C is bound to describe `describe-coding-system'. I
;; don't find this very useful, but it's frequently useful to only
;; look at interactive functions.
(global-set-key (kbd "C-h C") #'helpful-command)
</pre>
</div>
</div>
</div>

<div id="outline-container-org968e4d3" class="outline-3">
<h3 id="org968e4d3"><span class="section-number-3">2.18.</span> Dash Board</h3>
<div class="outline-text-3" id="text-2-18">
<p>
Change the initial buffer of emacs for a dashboard that shows the folders that you bookmark, the recent files, etc&#x2026;
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">;;Get the a random image to show on the dashboard
(defun get-random-image()
	;;Set the  directory of the images
	(setq-local directory-images "~/Pictures/Emacs-dash-board/to-show/")
	;;Put in a list all images in the directory
	(setq-local images (directory-files directory-images nil ".png"))

	;;Join the folder's path with the image path
	;;and return the full path
	(concat directory-images
					;;get a random image
					(nth (- (random (length images)) 1) images)
					))

(use-package dashboard
	:ensure t
	:init
	(progn;;This execult commands in the initialization process
		(setq dashboard-banner-logo-title "Quem desiste não cansa")
		(setq dashboard-set-init-info nil)
		(setq dashboard-startup-banner (get-random-image))
		(setq dashboard-set-heading-icons t)

		;; Content is not centered by default. To center, set
		;;This variable to t
		;;(setq dashboard-center-content t)
		(setq dashboard-set-file-icons t)
		;;(setq dashboard-footer-messages '("Better than VSCoiso"))
		(setq dashboard-items '(
														;;(agenda . 4)
														;;(recents  . 6)
														(bookmarks . 6)
														(projects . 4)
														))
		)
	:config
	(dashboard-setup-startup-hook))
</pre>
</div>
</div>
</div>

<div id="outline-container-org6f67c2a" class="outline-3">
<h3 id="org6f67c2a"><span class="section-number-3">2.19.</span> Lorem ipsom</h3>
<div class="outline-text-3" id="text-2-19">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package lorem-ipsum
	:ensure t
	)
</pre>
</div>
</div>
</div>
</div>

<div id="outline-container-org48f46a0" class="outline-2">
<h2 id="org48f46a0"><span class="section-number-2">3.</span> Appearance</h2>
<div class="outline-text-2" id="text-3">
<p>
Packages to change the appearance  of emacs
</p>
</div>

<div id="outline-container-org41f97ac" class="outline-3">
<h3 id="org41f97ac"><span class="section-number-3">3.1.</span> All the icons</h3>
<div class="outline-text-3" id="text-3-1">
<p>
Add fonts with icons that will the use for other packages
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package all-the-icons
	:ensure t)
</pre>
</div>
</div>
</div>

<div id="outline-container-orgfa3e660" class="outline-3">
<h3 id="orgfa3e660"><span class="section-number-3">3.2.</span> Doom Themes</h3>
<div class="outline-text-3" id="text-3-2">
<p>
Add the themes used in the doom emacs
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package doom-themes
	:ensure t
	:config
	(load-theme 'doom-tomorrow-night  t))
</pre>
</div>
</div>
</div>

<div id="outline-container-orgb684299" class="outline-3">
<h3 id="orgb684299"><span class="section-number-3">3.3.</span> Doom modeline</h3>
<div class="outline-text-3" id="text-3-3">
<p>
Add the modeline used in the doom emacs
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package doom-modeline
	:ensure t
	:init (doom-modeline-mode 1))
</pre>
</div>
</div>
</div>

<div id="outline-container-org223f57a" class="outline-3">
<h3 id="org223f57a"><span class="section-number-3">3.4.</span> Page Breaking</h3>
<div class="outline-text-3" id="text-3-4">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package page-break-lines)
(global-page-break-lines-mode)
</pre>
</div>
</div>
</div>

<div id="outline-container-org5816c6a" class="outline-3">
<h3 id="org5816c6a"><span class="section-number-3">3.5.</span> Fonts</h3>
<div class="outline-text-3" id="text-3-5">
<div class="org-src-container">
<pre class="src src-emacs-lisp">	(set-frame-font "Monofur 11" nil t)
;;(set-default-font “Terminus-9”)
</pre>
</div>
</div>
</div>
</div>

<div id="outline-container-orge773d65" class="outline-2">
<h2 id="orge773d65"><span class="section-number-2">4.</span> Programming</h2>
<div class="outline-text-2" id="text-4">
<p>
This is packages are focues in giving the emacs full ide capabilities 
</p>
</div>

<div id="outline-container-org9b0fd4c" class="outline-3">
<h3 id="org9b0fd4c"><span class="section-number-3">4.1.</span> lsp-mode'</h3>
<div class="outline-text-3" id="text-4-1">
<p>
Give to emacs the capability to do syntax check in many programming languages
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">;;  (defun efs/lsp-mode-setup ()
;;    (setq lsp-headerline-breadcrumb-segments '(path-up-to-project file symbols))
;;    (lsp-headerline-breadcrumb-mode))

(use-package lsp-mode
	:ensure t
	:commands
	;;Activate the package when this functions are called
	(lsp lsp-deferred)
	:hook
	(lsp-mode . efs/lsp-mode-setup)
	;;Init lsp for the modes:
	(c-mode . lsp-deferred)
	(c++-mode . lsp-deferred)
	(python-mode . lsp-deferred)
	(rust-mode . lsp-deferred)
	;;(web-mode . lsp-deferred)
	;;(typescript-mode . lsp-deferred)
	(css-mode . lsp-deferred)
	(scss-mode . lsp-deferred)
	(svelte-mode . lsp-deferred)
	(dockerfile-mode . lsp-deferred)
	(yaml-mode . lsp-deferred)
	:init
	(setq lsp-keymap-prefix "C-c l")  ;; Or 'C-l', 's-l'
	:config
	(setq lsp-log-io nil);;don't log everthing = speed
	;;Sometimes the lsp stop for no reason
	;;this will restart it
	(setq lsp-restart 'auto-restart)
	;;Give the presscription of
	;;the keys pressed using the
	;;which-key packge
	(lsp-enable-which-key-integration t))

;;Avoid the lsp breaks the emacs
(setq gc-cons-threshold 10000000)
(setq read-process-output-max (* 1024 1024))

</pre>
</div>
</div>

<div id="outline-container-org9fa77d9" class="outline-4">
<h4 id="org9fa77d9"><span class="section-number-4">4.1.1.</span> lsp-ui</h4>
<div class="outline-text-4" id="text-4-1-1">
<p>
This is a package that give a little ui to the lsp
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package lsp-ui
	:ensure t
	:config
	(setq lsp-ui-sideline-show-diagnostics t)
	(setq lsp-ui-sideline-show-hover t)
	(setq lsp-ui-sideline-show-code-actions t)
	:hook (lsp-mode . lsp-ui-mode))
</pre>
</div>
</div>
</div>

<div id="outline-container-org7c030c2" class="outline-4">
<h4 id="org7c030c2"><span class="section-number-4">4.1.2.</span> lsp-treeemacs</h4>
<div class="outline-text-4" id="text-4-1-2">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package lsp-treemacs
	:after lsp)
</pre>
</div>
</div>
</div>
</div>

<div id="outline-container-orgd5b240b" class="outline-3">
<h3 id="orgd5b240b"><span class="section-number-3">4.2.</span> dap-mode ( Debug Adapter Protocol)</h3>
<div class="outline-text-3" id="text-4-2">
<p>
This extension allow use to use external programs to debug your code like lsp
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package dap-mode) 
</pre>
</div>
</div>
</div>

<div id="outline-container-org454e14b" class="outline-3">
<h3 id="org454e14b"><span class="section-number-3">4.3.</span> Company-mode</h3>
<div class="outline-text-3" id="text-4-3">
<p>
Give completion functionalities to the lsp
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package company
	:after
	;;Will run afther the lsp-mode
	lsp-mode
	:ensure t
	:hook
	(lsp-mode . company-mode)
	:init
	(add-hook 'after-init-hook 'global-company-mode)

	:bind
	(:map company-active-map
				("&lt;tab&gt;" . company-complete-selection))
	(:map lsp-mode-map
				("&lt;tab&gt;" . company-indent-or-complete-common))

	:config
	(global-company-mode t)
	(setq company-idle-delay 0.0
				company-minimum-prefix-lengh 1)
	)

(use-package company-box
	:hook (company-mode . company-box-mode))
</pre>
</div>
</div>
</div>

<div id="outline-container-org41d06ce" class="outline-3">
<h3 id="org41d06ce"><span class="section-number-3">4.4.</span> Elisp</h3>
<div class="outline-text-3" id="text-4-4">
</div>
<div id="outline-container-orgb0c0f3c" class="outline-4">
<h4 id="orgb0c0f3c"><span class="section-number-4">4.4.1.</span> ParaEdit</h4>
<div class="outline-text-4" id="text-4-4-1">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package paredit
	:ensure t)
(autoload 'enable-paredit-mode "paredit" "Turn on pseudo-structural editing of Lisp code." t)
(add-hook 'emacs-lisp-mode-hook       #'enable-paredit-mode)
(add-hook 'eval-expression-minibuffer-setup-hook #'enable-paredit-mode)
(add-hook 'ielm-mode-hook             #'enable-paredit-mode)
(add-hook 'lisp-mode-hook             #'enable-paredit-mode)
(add-hook 'lisp-interaction-mode-hook #'enable-paredit-mode)
(add-hook 'scheme-mode-hook           #'enable-paredit-mode)
</pre>
</div>
</div>
</div>
</div>
<div id="outline-container-org05944e4" class="outline-3">
<h3 id="org05944e4"><span class="section-number-3">4.5.</span> Org</h3>
<div class="outline-text-3" id="text-4-5">
</div>
<div id="outline-container-org8b1a768" class="outline-4">
<h4 id="org8b1a768"><span class="section-number-4">4.5.1.</span> Basic Config</h4>
<div class="outline-text-4" id="text-4-5-1">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(defun efs/org-mode-setup ()
	(org-indent-mode)
	(variable-pitch-mode 1)
	(visual-line-mode 1))
;;Automatic display images in the orgmode
(setq org-startup-with-inline-images t)
(use-package org
	:pin org
	:commands (org-capture org-agenda)
	:hook (org-mode . efs/org-mode-setup)
	:config
	(setq org-ellipsis " ▾"))


;;allow the org files display images
;;(org-toggle-inline-images)
</pre>
</div>
</div>
</div>

<div id="outline-container-orgdcaefdc" class="outline-4">
<h4 id="orgdcaefdc"><span class="section-number-4">4.5.2.</span> Centraliza o texto org mode</h4>
<div class="outline-text-4" id="text-4-5-2">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(defun efs/org-mode-visual-fill ()
	(setq visual-fill-column-width 100
				visual-fill-column-center-text t)
	(visual-fill-column-mode 1))

(use-package visual-fill-column
	:hook (org-mode . efs/org-mode-visual-fill))

(with-eval-after-load 'org
	(org-babel-do-load-languages
	 'org-babel-load-languages
	 '((emacs-lisp . t)
		 (python . t)))
	(push '("conf-unix" . conf-unix) org-src-lang-modes))
</pre>
</div>
</div>
</div>

<div id="outline-container-org34c16d8" class="outline-4">
<h4 id="org34c16d8"><span class="section-number-4">4.5.3.</span> Add templets for the extencions .el, .py &#x2026;</h4>
<div class="outline-text-4" id="text-4-5-3">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(with-eval-after-load 'org
	;; This is needed as of Org 9.2
	(require 'org-tempo)
	(add-to-list 'org-structure-template-alist '("sh" . "src shell"))
	(add-to-list 'org-structure-template-alist '("cpp" . "src cpp"))
	(add-to-list 'org-structure-template-alist '("el" . "src emacs-lisp"));
	(add-to-list 'org-structure-template-alist '("py" . "src python"))
	(add-to-list 'org-structure-template-alist '("js" . "src js"))
	;;C doenst work yet
	;;(add-to-list 'org-structure-template-alist '("c" . "src C"))
	)
;;remove the massage ask you to exec the command
(setq org-confirm-babel-evaluate nil)
</pre>
</div>
</div>
</div>

<div id="outline-container-orgb41a74b" class="outline-4">
<h4 id="orgb41a74b"><span class="section-number-4">4.5.4.</span> Babel to load</h4>
<div class="outline-text-4" id="text-4-5-4">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(org-babel-do-load-languages
 'org-babel-load-languages
 '((emacs-lisp .t)
	 (python .t)
	 (C .t)
	 (css .t)
	 (js .t)
	 (lua .t)
	 ))
</pre>
</div>
</div>
</div>

<div id="outline-container-org0b115b5" class="outline-4">
<h4 id="org0b115b5"><span class="section-number-4">4.5.5.</span> Tangle automatic</h4>
<div class="outline-text-4" id="text-4-5-5">
<div class="org-src-container">
<pre class="src src-emacs-lisp">
;; Automatically tangle our Emacs.org config file when we save it
(defun efs/org-babel-tangle-config ()
	(when (string-equal (file-name-directory (buffer-file-name))
											(expand-file-name user-emacs-directory))
		;; Dynamic scoping to the rescue
		(let ((org-confirm-babel-evaluate nil))
			(org-babel-tangle))))

(add-hook 'org-mode-hook (lambda () (add-hook 'after-save-hook #'efs/org-babel-tangle-config)))

(defun efs/lsp-mode-setup ()
	(setq lsp-headerline-breadcrumb-segments '(path-up-to-project file symbols));
	(lsp-headerline-breadcrumb-mode))


;;(defun efs/org-babel-tangle-config ()
;;  (when (string-equal (file-name-directory (buffer-file-name))
;;                      (expand-file-name user-emacs-directory))
;; Dynamic scoping to the rescue
;;    (let ((org-confirm-babel-evaluate nil))
;;      (org-babel-tangle))))
</pre>
</div>
</div>
</div>

<div id="outline-container-orgbc2c812" class="outline-4">
<h4 id="orgbc2c812"><span class="section-number-4">4.5.6.</span> Org Agenda</h4>
<div class="outline-text-4" id="text-4-5-6">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(setq org-agenda-files
			'("~/codes/Org/Agenda.org"))
(setq org-agenda-start-with-log-mode t)
(setq org-log-done 'time)
(setq org-log-into-drawer t)
</pre>
</div>
</div>
</div>

<div id="outline-container-orgbcd8b3c" class="outline-4">
<h4 id="orgbcd8b3c"><span class="section-number-4">4.5.7.</span> Customization</h4>
<div class="outline-text-4" id="text-4-5-7">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(setq org-startup-folded t)
(setq org-startup-indented t)
(setq org-startup-with-inline-images t)
(use-package org-bullets
	:ensure t
	:hook (org-mode . org-bullets-mode)
	:custom
	(org-bullets-bullet-list '("◉" "○" "●" "○" "●" "○" "●"))
	)

(use-package org-superstar
	:ensure t
	:config
	(add-hook 'org-mode-hook (lambda () (org-superstar-mode 1))))

</pre>
</div>
</div>
</div>

<div id="outline-container-org64aa837" class="outline-4">
<h4 id="org64aa837"><span class="section-number-4">4.5.8.</span> Org Roam</h4>
<div class="outline-text-4" id="text-4-5-8">
<p>
Not working 
</p>

<p>
+begin<sub>src</sub> emacs-lisp
(use-package org-roam
:ensure t)
#+end<sub>src</sub>
</p>
</div>
</div>

<div id="outline-container-org5c77e7a" class="outline-4">
<h4 id="org5c77e7a"><span class="section-number-4">4.5.9.</span> Change the sizes of the headers</h4>
<div class="outline-text-4" id="text-4-5-9">
<div class="org-src-container">
<pre class="src src-emacs-lisp">;;   Set faces for heading levels
(dolist (face '((org-level-1 . 1.4)
								(org-level-2 . 1.3)
								(org-level-3 . 1.2)
								(org-level-4 . 1.1)
								(org-level-5 . 1.1)
								(org-level-6 . 1.1)
								(org-level-7 . 1.1)
								(org-level-8 . 1.1)))
	(set-face-attribute (car face) nil :font "Monospace" :weight 'regular :height (cdr face)))

;; Ensure that anything that should be fixed-pitch in Org files appears that way
(set-face-attribute 'org-block nil    :foreground nil :inherit 'fixed-pitch)
(set-face-attribute 'org-table nil    :inherit 'fixed-pitch)
(set-face-attribute 'org-formula nil  :inherit 'fixed-pitch)
(set-face-attribute 'org-code nil     :inherit '(shadow fixed-pitch))
(set-face-attribute 'org-table nil    :inherit '(shadow fixed-pitch))
(set-face-attribute 'org-verbatim nil :inherit '(shadow fixed-pitch))
(set-face-attribute 'org-special-keyword nil :inherit '(font-lock-comment-face fixed-pitch))
(set-face-attribute 'org-meta-line nil :inherit '(font-lock-comment-face fixed-pitch))
(set-face-attribute 'org-checkbox nil  :inherit 'fixed-pitch)
(set-face-attribute 'line-number nil :inherit 'fixed-pitch)
(set-face-attribute 'line-number-current-line nil :inherit 'fixed-pitch)
</pre>
</div>
</div>
</div>
</div>

<div id="outline-container-org7ec2f15" class="outline-3">
<h3 id="org7ec2f15"><span class="section-number-3">4.6.</span> Python</h3>
<div class="outline-text-3" id="text-4-6">
</div>
<div id="outline-container-org934d998" class="outline-4">
<h4 id="org934d998"><span class="section-number-4">4.6.1.</span> Python mode</h4>
<div class="outline-text-4" id="text-4-6-1">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package python-mode
	:ensure t
	:hook (python-mode . lsp-deferred)
	:custom
	;; NOTE: Set these if Python 3 is called "python3" on your system!
	;; (python-shell-interpreter "python3")
	;; (dap-python-executable "python3")
	(dap-python-debugger 'debugpy)
	:config
	(require 'dap-python))
</pre>
</div>
</div>
</div>
</div>

<div id="outline-container-org041b05a" class="outline-3">
<h3 id="org041b05a"><span class="section-number-3">4.7.</span> JS- Not useful since I have the web mode</h3>
<div class="outline-text-3" id="text-4-7">
</div>
<div id="outline-container-org520f070" class="outline-4">
<h4 id="org520f070"><span class="section-number-4">4.7.1.</span> RJSX</h4>
<div class="outline-text-4" id="text-4-7-1">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package rjsx-mode
	:ensure t
	:mode "\\.js\\'")
</pre>
</div>
</div>
</div>

<div id="outline-container-orgbf9902d" class="outline-4">
<h4 id="orgbf9902d"><span class="section-number-4">4.7.2.</span> Tide</h4>
<div class="outline-text-4" id="text-4-7-2">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(defun setup-tide-mode ()
	(interactive)
	(tide-setup)
	(flycheck-mode +1)
	(setq flycheck-check-syntax-automatically '(save mode-enabled))
	(eldoc-mode +1)
	(tide-hl-identifier-mode +1)
	;; company is an optional dependency. You have to
	;; install it separately via package-install
	;; `M-x package-install [ret] company`
	(company-mode +1))

;; aligns annotation to the right hand side
(setq company-tooltip-align-annotations t)

;; formats the buffer before saving
(add-hook 'before-save-hook 'tide-format-before-save)


																				;typescripte config
																				;
																				;(require 'web-mode)
(add-to-list 'auto-mode-alist '("\\.tsx\\'" . web-mode))
(add-hook 'web-mode-hook
					(lambda ()
						(when (string-equal "tsx" (file-name-extension buffer-file-name))
							(setup-tide-mode))))

;; enable typescript - tslint checker
(flycheck-add-mode 'typescript-tslint 'web-mode)

(add-hook 'typescript-mode-hook #'setup-tide-mode)

(use-package tide
	:ensure t
	:after (rjsx-mode company flycheck)
	:hook (rjsx-mode . setup-tide-mode))
</pre>
</div>
</div>
</div>
</div>

<div id="outline-container-orgea1ead9" class="outline-3">
<h3 id="orgea1ead9"><span class="section-number-3">4.8.</span> Typescript</h3>
<div class="outline-text-3" id="text-4-8">
<p>
I am using the LSP theia-ide to install it in your machine run the command in your terminal:
</p>

<div class="org-src-container">
<pre class="src src-shell">npm i -g typescript-language-server; npm i -g typescript
</pre>
</div>

<div class="org-src-container">
<pre class="src src-emacs-lisp">
(use-package typescript-mode
	:mode "\\.ts\\'"
	:hook
	;;Start the lsp when the enter in the type script mode
	(typescript-mode . lsp-deferred)
	:config
	(setq typescript-indent-level 2)
	;;Installs the dap for node applications
	(require 'dap-node)
	(dap-node-setup))
</pre>
</div>
</div>
</div>

<div id="outline-container-org4c051b8" class="outline-3">
<h3 id="org4c051b8"><span class="section-number-3">4.9.</span> web-mode</h3>
<div class="outline-text-3" id="text-4-9">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(setq-default tab-width 2)
(setq indent-tabs-mode nil)
(defun luke/webmode-hook ()
	"Webmode configurations."
	(setq web-mode-enable-comment-annotation t)
	(setq web-mode-markup-indent-offset 2)
	(setq web-mode-code-indent-offset 2)
	(setq web-mode-css-indent-offset 2)
	(setq web-mode-attr-indent-offset 0)
	(setq web-mode-enable-auto-indentation t)
	(setq web-mode-enable-auto-closing t)
	(setq web-mode-enable-auto-pairing t)
	(setq web-mode-enable-css-colorization t)
	)
(use-package web-mode
	:ensure t
	:mode (;;("\\.js\\'" . web-mode)
				 ("\\.jsx\\'" . web-mode)
				 ("\\.js\\'" . web-mode)
				 ;;("\\.ts\\'" . web-mode)
				 ("\\.tsx\\'" . web-mode)
				 ("\\.svelte\\'" . web-mode)
				 ;;Was confiliting with lsp
				 ;;("\\.css\\'" . web-mode)
				 ("\\.html\\'" . web-mode))
	:commands web-mode
	:hook (web-mode . luke/webmode-hook)
	)
</pre>
</div>
</div>

<div id="outline-container-orgcc061fb" class="outline-4">
<h4 id="orgcc061fb"><span class="section-number-4">4.9.1.</span> Prettier</h4>
<div class="outline-text-4" id="text-4-9-1">
<p>
Package for formating the webmode
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package prettier
	:ensure t
	:hook
	((mhtml-mode json-mode css-mode ts-mode scss-mode rjsx-mode js2-mode web-mode) . prettier-mode))
</pre>
</div>
</div>
</div>
</div>

<div id="outline-container-orga4c1d24" class="outline-3">
<h3 id="orga4c1d24"><span class="section-number-3">4.10.</span> CSS/SCSS-mode</h3>
<div class="outline-text-3" id="text-4-10">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package css-mode
	:mode "\\.css\\'")

(use-package scss-mode
	:mode "\\.scss\\'")
</pre>
</div>
</div>
</div>

<div id="outline-container-orga7db7bd" class="outline-3">
<h3 id="orga7db7bd"><span class="section-number-3">4.11.</span> JSON-mode</h3>
<div class="outline-text-3" id="text-4-11">
<div class="org-src-container">
<pre class="src src-emacs-lisp">;; json-mode
(use-package json-mode
	:ensure t)
</pre>
</div>
</div>
</div>

<div id="outline-container-orgf9bcdbc" class="outline-3">
<h3 id="orgf9bcdbc"><span class="section-number-3">4.12.</span> yalm-mode</h3>
<div class="outline-text-3" id="text-4-12">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package yaml-mode
	:ensure t
	)
</pre>
</div>
</div>
</div>

<div id="outline-container-org4c898b4" class="outline-3">
<h3 id="org4c898b4"><span class="section-number-3">4.13.</span> svelte-mode</h3>
<div class="outline-text-3" id="text-4-13">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package svelte-mode
:ensure t
	)
</pre>
</div>
</div>
</div>

<div id="outline-container-org6212b63" class="outline-3">
<h3 id="org6212b63"><span class="section-number-3">4.14.</span> Dockerfile-mode</h3>
<div class="outline-text-3" id="text-4-14">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package dockerfile-mode)
</pre>
</div>
</div>
</div>

<div id="outline-container-orgd768f1f" class="outline-3">
<h3 id="orgd768f1f"><span class="section-number-3">4.15.</span> Rust-mode</h3>
<div class="outline-text-3" id="text-4-15">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package rust-mode
	:ensure t)
</pre>
</div>
</div>
</div>

<div id="outline-container-org146765b" class="outline-3">
<h3 id="org146765b"><span class="section-number-3">4.16.</span> format-all</h3>
<div class="outline-text-3" id="text-4-16">
<p>
This package allow us  to format almost all programming automatically
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package format-all
	:ensure t
	:hook
	(c-mode . format-all-mode)
	)
(add-hook 'c-mode-hook 'format-all-mode)
</pre>
</div>
</div>
</div>

<div id="outline-container-org3245c7e" class="outline-3">
<h3 id="org3245c7e"><span class="section-number-3">4.17.</span> YASnippet</h3>
<div class="outline-text-3" id="text-4-17">
<p>
This package add snippets to the emacs for more info access the <a href="https://github.com/joaotavora/yasnippet">github of the project</a>, if you have difficults to use the snippet toggle the menu bar to the the options using the command M-x toggle-menu-bar-mode-from-frame
</p>

<p>
#+begin<sub>src</sub> emacs-lisp
(use-package yasnippet
:ensure t
)
(use-package yasnippet-snippets
:ensure t
)
;;Activate the snippets
(yas-global-mode t)
</p>

<p>
;;Set a key to see all the snippets
(global-set-key (kbd "C-h y") 'yas-describe-tables)
#+end<sub>src</sub>&gt;
</p>
</div>
</div>
</div>

<div id="outline-container-org84e4d61" class="outline-2">
<h2 id="org84e4d61"><span class="section-number-2">5.</span> Update packages</h2>
<div class="outline-text-2" id="text-5">
<div class="org-src-container">
<pre class="src src-emacs-lisp">
;; Instalação do auto-update

(use-package auto-package-update
	:custom
	(auto-package-update-interval 7)
	(auto-package-update-prompt-before-update t)
	(auto-package-update-hide-results t)
	:config
	(auto-package-update-maybe)
	(auto-package-update-at-time "21:00"))

</pre>
</div>
</div>
</div>

<div id="outline-container-org54caa96" class="outline-2">
<h2 id="org54caa96"><span class="section-number-2">6.</span> Key Binds</h2>
<div class="outline-text-2" id="text-6">
</div>
<div id="outline-container-org9783a9f" class="outline-3">
<h3 id="org9783a9f"><span class="section-number-3">6.1.</span> Evil colemakeDH</h3>
<div class="outline-text-3" id="text-6-1">
<div class="org-src-container">
<pre class="src src-emacs-lisp">;;Motion keys
(define-key evil-normal-state-map "e" 'evil-next-visual-line)
(define-key evil-normal-state-map "i" 'evil-previous-visual-line)
(define-key evil-normal-state-map "o" 'evil-forward-char)
(define-key evil-normal-state-map "n" 'evil-backward-char)

(define-key evil-visual-state-map "e" 'evil-next-line)
(define-key evil-visual-state-map "i" 'evil-previous-line)
(define-key evil-visual-state-map "o" 'evil-forward-char)
(define-key evil-visual-state-map "n" 'evil-backward-char)

(define-key evil-visual-state-map "y" 'evil-insert)
(define-key evil-visual-state-map "l" 'evil-yank)
(define-key evil-visual-state-map ";" 'evil-open-below )
(define-key evil-visual-state-map ":" 'evil-open-above )

;;Motion keys
;;Functions keys
(define-key evil-normal-state-map "y" 'evil-insert)
(define-key evil-normal-state-map "l" 'evil-yank)
(define-key evil-normal-state-map ";" 'evil-open-below )
(define-key evil-normal-state-map ":" 'evil-open-above )

(global-set-key (kbd "C-c ;") 'evilnc-comment-or-uncomment-lines)
(global-set-key (kbd "C-c &lt;tab&gt;") 'yas-expand)
</pre>
</div>
</div>
</div>

<div id="outline-container-org88c13a9" class="outline-3">
<h3 id="org88c13a9"><span class="section-number-3">6.2.</span> org-babel-tange</h3>
<div class="outline-text-3" id="text-6-2">
<div class="org-src-container">
<pre class="src src-emacs-lisp">;(global-set-key (kbd "C-l") (message "ola"))

</pre>
</div>
</div>
</div>

<div id="outline-container-org3fff7e9" class="outline-3">
<h3 id="org3fff7e9"><span class="section-number-3">6.3.</span> flyspell, ispell</h3>
<div class="outline-text-3" id="text-6-3">
</div>
<div id="outline-container-orgba65a6e" class="outline-4">
<h4 id="orgba65a6e"><span class="section-number-4">6.3.1.</span> flyspelll-prog-mode key binding</h4>
<div class="outline-text-4" id="text-6-3-1">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(global-set-key (kbd "&lt;f6&gt;") 'flyspell-prog-mode)
</pre>
</div>
</div>
</div>

<div id="outline-container-org1bc5be4" class="outline-4">
<h4 id="org1bc5be4"><span class="section-number-4">6.3.2.</span> flyspell-key-mode binding</h4>
<div class="outline-text-4" id="text-6-3-2">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(global-set-key (kbd "C-&lt;f6&gt;") 'flyspell-mode)
</pre>
</div>
</div>
</div>

<div id="outline-container-org80579d4" class="outline-4">
<h4 id="org80579d4"><span class="section-number-4">6.3.3.</span> Ispell comments and strings key binding</h4>
<div class="outline-text-4" id="text-6-3-3">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(global-set-key (kbd "&lt;f7&gt;") 'ispell-comments-and-strings)
</pre>
</div>
</div>
</div>

<div id="outline-container-org1a76f10" class="outline-4">
<h4 id="org1a76f10"><span class="section-number-4">6.3.4.</span> Ispell key binding</h4>
<div class="outline-text-4" id="text-6-3-4">
<div class="org-src-container">
<pre class="src src-emacs-lisp">(global-set-key (kbd "C-&lt;f7&gt;") 'ispell)
</pre>
</div>
</div>
</div>
</div>
</div>

<div id="outline-container-org11204d4" class="outline-2">
<h2 id="org11204d4"><span class="section-number-2">7.</span> Test area</h2>
<div class="outline-text-2" id="text-7">
<p>
Area to test new packages without break the emacs
</p>

<div class="org-src-container">
<pre class="src src-emacs-lisp">;; Enable ccls for all c++ files, and platformio-mode only
;; when needed (platformio.ini present in project root).
(add-hook 'c++-mode-hook (lambda ()
													 (lsp-deferred)
													 (platformio-conditionally-enable)))
</pre>
</div>

<div class="org-src-container">
<pre class="src src-emacs-lisp">(use-package dotenv-mode
	:ensure t) ; unless installed from a package
(add-to-list 'auto-mode-alist '("\\.env\\..*\\'" . dotenv-mode)) 
</pre>
</div>
</div>
</div>
