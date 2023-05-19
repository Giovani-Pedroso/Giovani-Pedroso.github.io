import { c as create_ssr_component } from "../../../../chunks/index.js";
const html = `<h1>Table of Contents</h1>
<ol>
<li><a href="#orgce433fa">Basic</a>
<ol>
<li><a href="#org2e8f040">Basic configurations for functionality</a></li>
<li><a href="#orgbb17d11">Packages config</a></li>
<li><a href="#org6e5f099">Custom variables</a></li>
</ol>
</li>
<li><a href="#org00bba97">Functional</a>
<ol>
<li><a href="#orga9e00c3">Evil</a></li>
<li><a href="#orgb1aed64">evil-nerd-commenter</a></li>
<li><a href="#orgbec9041">undo-fo and undo tree</a></li>
<li><a href="#org0f79990">Rainbow mode</a></li>
<li><a href="#org821c3b5">Which key</a></li>
<li><a href="#org00a6c0a">Auto-complete</a></li>
<li><a href="#org65ad473">NeoTree</a></li>
<li><a href="#orgd91eb27">Centaur tabs - OFF</a></li>
<li><a href="#orgcc602d9">Flycheck syntax checker</a></li>
<li><a href="#orgd9a7281">Helm - OFF</a></li>
<li><a href="#orgf08612a">Ivy - OFF</a>
<ol>
<li><a href="#org910dbc6">Ivy-rich - OFF</a></li>
</ol>
</li>
<li><a href="#org84aa7cb">Vertigo</a></li>
<li><a href="#org9b59ab2">Marginalia</a></li>
<li><a href="#org9239db8">Rainbow delimiter</a></li>
<li><a href="#org249aaa9">Projectile</a>
<ol>
<li><a href="#orgde5a991">Counsel</a></li>
</ol>
</li>
<li><a href="#orgcce5fd1">Magit</a></li>
<li><a href="#orgdb1811e">Helpful</a></li>
<li><a href="#orgbcecc6c">Dash Board</a></li>
<li><a href="#org94d8d62">Lorem ipsom</a></li>
</ol>
</li>
<li><a href="#org8b8dd50">Appearance</a>
<ol>
<li><a href="#orgcdd82c6">All the icons</a></li>
<li><a href="#orga27430c">Doom Themes</a></li>
<li><a href="#org7c1cfba">Doom modeline</a></li>
<li><a href="#org6881205">Page Breaking</a></li>
<li><a href="#org3c6e36c">Fonts</a></li>
</ol>
</li>
<li><a href="#org008fd6e">Programming</a>
<ol>
<li><a href="#org10be8ce">lsp-mode'</a>
<ol>
<li><a href="#org2596738">lsp-ui</a></li>
<li><a href="#org9b3af88">lsp-treeemacs</a></li>
</ol>
</li>
<li><a href="#orgabc364d">dap-mode ( Debug Adapter Protocol)</a></li>
<li><a href="#orgc621145">Company-mode</a></li>
<li><a href="#org7691a2d">Elisp</a>
<ol>
<li><a href="#org443cddb">ParaEdit</a></li>
</ol>
</li>
<li><a href="#orgd2b9f16">Org</a>
<ol>
<li><a href="#org9bcdccc">Basic Config</a></li>
<li><a href="#org155d30c">Centraliza o texto org mode</a></li>
<li><a href="#orgbd99de8">Add templets for the extencions .el, .py …</a></li>
<li><a href="#orgc3a7ec9">Babel to load</a></li>
<li><a href="#orgbff7358">Tangle automatic</a></li>
<li><a href="#orgc0e5c43">Org Agenda</a></li>
<li><a href="#org28b4191">Customization</a></li>
<li><a href="#orga72ce19">Org Roam</a></li>
<li><a href="#org24c1f5c">Change the sizes of the headers</a></li>
<li><a href="#org8c797c3">Add the markdown to the org export</a></li>
</ol>
</li>
<li><a href="#org9799ab5">Python</a>
<ol>
<li><a href="#org1cee9be">Python mode</a></li>
</ol>
</li>
<li><a href="#org4b35002">JS- Not useful since I have the web mode</a>
<ol>
<li><a href="#org26b0bdf">RJSX</a></li>
<li><a href="#org37d5802">Tide</a></li>
</ol>
</li>
<li><a href="#org418481e">Typescript</a></li>
<li><a href="#orgabd7045">web-mode</a>
<ol>
<li><a href="#orgbb3260a">Prettier</a></li>
</ol>
</li>
<li><a href="#org770fc9f">CSS/SCSS-mode</a></li>
<li><a href="#org9a50705">JSON-mode</a></li>
<li><a href="#org64a6c70">yalm-mode</a></li>
<li><a href="#orga62de5c">svelte-mode</a></li>
<li><a href="#org555593e">Dockerfile-mode</a></li>
<li><a href="#org0f7770e">Rust-mode</a></li>
<li><a href="#org5ffae15">format-all</a></li>
<li><a href="#org5c21fe5">YASnippet</a></li>
</ol>
</li>
<li><a href="#orgbeb3aad">Update packages</a></li>
<li><a href="#org637c96b">Key Binds</a>
<ol>
<li><a href="#orgccde49e">Evil colemakeDH</a></li>
<li><a href="#orgebb3018">org-babel-tange</a></li>
<li><a href="#org4629c2f">flyspell, ispell</a>
<ol>
<li><a href="#org8a26a5d">flyspelll-prog-mode key binding</a></li>
<li><a href="#org49294f2">flyspell-key-mode binding</a></li>
<li><a href="#org48254cf">Ispell comments and strings key binding</a></li>
<li><a href="#orgf96bc7d">Ispell key binding</a></li>
</ol>
</li>
</ol>
</li>
<li><a href="#orgf5a4fd1">Test area</a></li>
</ol>
<p>My main goal of this configuration is to turn the emacs into a IDE for working with React, nodeJs and embedded system like stm32 and esp-idf. I made this configuration using the tutorials of the channel <a href="https://www.youtube.com/c/SystemCrafters">SystemCrafters</a></p>
<p>C-M-\\ format the code block</p>
<p><a id="orgce433fa"></a></p>
<h1>Basic</h1>
<p>These settings do not  need any package installed, they just change basic behaviour of emacs</p>
<p><a id="org2e8f040"></a></p>
<h2>Basic configurations for functionality</h2>
<pre><code>;;remove o initial buffer
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

;;Self closing () {} [] &quot;&quot;
(electric-pair-mode 1)

;;Enable the highlight line
(global-hl-line-mode t)

(kill-buffer)                            

;;Set the lines on in the relative mode
(setq display-line-numbers-type 'relative) 
(global-display-line-numbers-mode)

;;Disable the suspend frame
(global-unset-key (kbd &quot;C-z&quot;))


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

(setq backup-directory-alist \`((&quot;.&quot; . &quot;~/.saves&quot;)))
</code></pre>
<p><a id="orgbb17d11"></a></p>
<h2>Packages config</h2>
<p>Configure the origins on the packages and installs the use-package, this package is a better way to install package that the vanilla emacs package manager</p>
<pre><code>;;Verify and initialize the package.el
(require 'package)
;;Define the repos
(setq package-archives '((&quot;melpa&quot; . &quot;https://melpa.org/packages/&quot;)
												 (&quot;org&quot;   . &quot;https://orgmode.org/elpa/&quot;)
												 (&quot;elpa&quot;  . &quot;https://elpa.gnu.org/packages/&quot;)))

;;Init the package system
(package-initialize)
(unless package-archive-contents
	(package-refresh-contents))

;;Installs the use-package
(unless (package-installed-p 'use-package)
	(package-install 'use-package))

(require 'use-package)
(setq use-package-always-ensure t)
</code></pre>
<p><a id="org6e5f099"></a></p>
<h2>Custom variables</h2>
<p>I just copy and paste this part</p>
<pre><code>(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(custom-safe-themes
	 '(&quot;1d5e33500bc9548f800f9e248b57d1b2a9ecde79cb40c0b1398dec51ee820daf&quot; &quot;8d7b028e7b7843ae00498f68fad28f3c6258eda0650fe7e17bfb017d51d0e2a2&quot; &quot;a82ab9f1308b4e10684815b08c9cac6b07d5ccb12491f44a942d845b406b0296&quot; &quot;266ecb1511fa3513ed7992e6cd461756a895dcc5fef2d378f165fed1c894a78c&quot; &quot;76ed126dd3c3b653601ec8447f28d8e71a59be07d010cd96c55794c3008df4d7&quot; &quot;d47f868fd34613bd1fc11721fe055f26fd163426a299d45ce69bef1f109e1e71&quot; &quot;7a7b1d475b42c1a0b61f3b1d1225dd249ffa1abb1b7f726aec59ac7ca3bf4dae&quot; &quot;835868dcd17131ba8b9619d14c67c127aa18b90a82438c8613586331129dda63&quot; default))
 '(package-selected-packages
	 '(visual-fill-column org-bullets counsel-projectile forge ivy-rich which-key rainbow-delimiters ivy ivyy flycheck helm undo-fu undo-tree evil centaur-tabs dashboard doom-themes doom-modeline all-the-icons neotree auto-complete auto-package-update use-package))
 '(warning-suppress-log-types '((comp) (comp) (comp)))
 '(warning-suppress-types '((comp) (comp))))
</code></pre>
<p><a id="org00bba97"></a></p>
<h1>Functional</h1>
<p>Here is the installation and configuration of packages (code created by community) that give the emacs more functionality</p>
<p><a id="orga9e00c3"></a></p>
<h2>Evil</h2>
<p>Vim emulator for emacs</p>
<pre><code>(use-package evil
	:ensure t
	:config
	(evil-mode)
	(evil-set-undo-system 'undo-redo)) 
</code></pre>
<p><a id="orgb1aed64"></a></p>
<h2>evil-nerd-commenter</h2>
<p>Allow to comment or uncomment lines using a simple keybind</p>
<pre><code>(use-package evil-nerd-commenter)
(global-set-key (kbd &quot;C-c ç&quot;) 'evilnc-comment-or-uncomment-lines)
</code></pre>
<p><a id="orgbec9041"></a></p>
<h2>undo-fo and undo tree</h2>
<p>Give Undo functions to evil</p>
<pre><code>(use-package undo-fu)
(use-package undo-tree
			:config
			(undo-tree-mode)
	)

;;Create a 
</code></pre>
<p><a id="org0f79990"></a></p>
<h2>Rainbow mode</h2>
<p>This package add the functionality to see colors in the buffer #0000ff</p>
<pre><code>(use-package rainbow-mode
	:ensure t
	:config
	(rainbow-mode)
	)

;;Will initialize the rainbow mode when
;;the web, scss or css are active
(add-hook 'web-mode-hook 'rainbow-mode)
(add-hook 'scss-mode-hook 'rainbow-mode)
(add-hook 'css-mode-hook 'rainbow-mode)
</code></pre>
<p><a id="org821c3b5"></a></p>
<h2>Which key</h2>
<p>autocomplete for the shortcut keys</p>
<pre><code>(use-package which-key
	:defer 0
	:diminish which-key-mode
	:config
	(which-key-mode)
	(setq which-key-idle-delay 1))
</code></pre>
<p><a id="org00a6c0a"></a></p>
<h2>Auto-complete</h2>
<pre><code>(use-package auto-complete
	:ensure t
	:init
	(progn
		(ac-config-default)
		(global-auto-complete-mode t)))
</code></pre>
<p><a id="org65ad473"></a></p>
<h2>NeoTree</h2>
<p>Open a &quot;file explorer&quot; C-\\</p>
<pre><code>(use-package neotree
	:ensure t
	:config
	(progn
		(setq neo-theme (if (display-graphic-p) 'icons 'arrow)))
	:bind ((&quot;C-\\\\&quot; . 'neotree-toggle)))
</code></pre>
<p><a id="orgd91eb27"></a></p>
<h2>Centaur tabs - OFF</h2>
<p>Add tabes for emacs I did not like the workflow</p>
<p>+begin<sub>src</sub> emacs-lisp
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
(setq centaur-tabs-style &quot;slant&quot;)
:bind
(&quot;C-<prior>&quot; . centaur-tabs-backward)
(&quot;C-<next>&quot; . centaur-tabs-forward))
#+end<sub>src</sub></p>
<p><a id="orgcc602d9"></a></p>
<h2>Flycheck syntax checker</h2>
<p>Add the capability to check code syntaxes</p>
<pre><code>(use-package flycheck
	:ensure t
	:init (global-flycheck-mode))
</code></pre>
<p><a id="orgd9a7281"></a></p>
<h2>Helm - OFF</h2>
<p>Auto complete for the mini-buffer</p>
<p>;#+begin<sub>src</sub> emacs-lisp
(use-package helm
:ensure t
:config (helm-mode 1))
#+end<sub>src</sub></p>
<p><a id="orgf08612a"></a></p>
<h2>Ivy - OFF</h2>
<p>Auto complete for the mini-buffer</p>
<p>;#+begin<sub>src</sub> emacs-lisp
(use-package ivy
:ensure t
:config (ivy-mode 1))
#+end<sub>src</sub></p>
<p><a id="org910dbc6"></a></p>
<h3>Ivy-rich - OFF</h3>
<pre><code>;Description for commands
;not working - Emacs for scratch 2 ~= 28:00 min
;(use-package ivy-rich
;  :after ivy
;  :init
;  (ivy-rich-mode 1))
</code></pre>
<p>#+end<sub>src</sub></p>
<p><a id="org84aa7cb"></a></p>
<h2>Vertigo</h2>
<p>Auto complete for the mini-buffer</p>
<pre><code>;; Enable vertico
(use-package vertico
	:init
	(vertico-mode)
	;; Different scroll margin
	;; (setq vertico-scroll-margin 0)
	;; Show more candidates
	;; (setq vertico-count 20)
	;; Grow and shrink the Vertico minibuffer
	;; (setq vertico-resize t)
	;; Optionally enable cycling for \`vertico-next' and \`vertico-previous'.
	;; (setq vertico-cycle t)
	)

;; Optionally use the \`orderless' completion style. See
;; \`+orderless-dispatch' in the Consult wiki for an advanced Orderless style
;; dispatcher. Additionally enable \`partial-completion' for file path
;; expansion. \`partial-completion' is important for wildcard support.
;; Multiple files can be opened at once with \`find-file' if you enter a
;; wildcard. You may also give the \`initials' completion style a try.
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
	;; Add prompt indicator to \`completing-read-multiple'.
	;; Alternatively try \`consult-completing-read-multiple'.
	(defun crm-indicator (args)
		(cons (concat &quot;[CRM] &quot; (car args)) (cdr args)))
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
</code></pre>
<p><a id="org9b59ab2"></a></p>
<h2>Marginalia</h2>
<p>Add information to the buffer as the file size and the permissions</p>
<pre><code>(use-package marginalia
	:ensure t
	:config
	(marginalia-mode))
</code></pre>
<p><a id="org9239db8"></a></p>
<h2>Rainbow delimiter</h2>
<p>[{( colorfull</p>
<pre><code>(use-package rainbow-delimiters
	:hook (prog-mode . rainbow-delimiters-mode))
</code></pre>
<p><a id="org249aaa9"></a></p>
<h2>Projectile</h2>
<pre><code>(use-package projectile
	:diminish projectile-mode
	:config (projectile-mode)
	:custom ((projectile-completion-system 'ivy))
	:bind-keymap
	(&quot;C-c p&quot; . projectile-command-map)
	:init
	;; NOTE: Set this to the folder where you keep your Git repos!
	(when (file-directory-p &quot;~/Projects/Code&quot;)
		(setq projectile-project-search-path '(&quot;~/Projects/Code&quot;)))
	(setq projectile-switch-project-action #'projectile-dired))
</code></pre>
<p><a id="orgde5a991"></a></p>
<h3>Counsel</h3>
<pre><code>(use-package counsel-projectile
	:after projectile
	:config (counsel-projectile-mode))
</code></pre>
<p><a id="orgcce5fd1"></a></p>
<h2>Magit</h2>
<p>A user interface to manager your git repositories</p>
<pre><code>(use-package magit
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
</code></pre>
<p><a id="orgdb1811e"></a></p>
<h2>Helpful</h2>
<p>A better way to see documentation that the emacs original option</p>
<pre><code>(use-package helpful
	:ensure t)

;;Change the default description for the helpful description
(global-set-key (kbd &quot;C-h f&quot;) #'helpful-callable)

(global-set-key (kbd &quot;C-h v&quot;) #'helpful-variable)
(global-set-key (kbd &quot;C-h k&quot;) #'helpful-key)


;; Lookup the current symbol at point. C-c C-d is a common keybinding
;; for this in lisp modes.
(global-set-key (kbd &quot;C-c C-d&quot;) #'helpful-at-point)

;; Look up *F*unctions (excludes macros).
;;
;; By default, C-h F is bound to \`Info-goto-emacs-command-node'. Helpful
;; already links to the manual, if a function is referenced there.
(global-set-key (kbd &quot;C-h F&quot;) #'helpful-function)

;; Look up *C*ommands.
;;
;; By default, C-h C is bound to describe \`describe-coding-system'. I
;; don't find this very useful, but it's frequently useful to only
;; look at interactive functions.
(global-set-key (kbd &quot;C-h C&quot;) #'helpful-command)
</code></pre>
<p><a id="orgbcecc6c"></a></p>
<h2>Dash Board</h2>
<p>Change the initial buffer of emacs for a dashboard that shows the folders that you bookmark, the recent files, etc…</p>
<pre><code>;;Get the a random image to show on the dashboard
(defun get-random-image()
	;;Set the  directory of the images
	(setq-local directory-images &quot;~/Pictures/Emacs-dash-board/to-show/&quot;)
	;;Put in a list all images in the directory
	(setq-local images (directory-files directory-images nil &quot;.png&quot;))

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
		(setq dashboard-banner-logo-title &quot;Quem desiste não cansa&quot;)
		(setq dashboard-set-init-info nil)
		(setq dashboard-startup-banner (get-random-image))
		(setq dashboard-set-heading-icons t)

		;; Content is not centered by default. To center, set
		;;This variable to t
		;;(setq dashboard-center-content t)
		(setq dashboard-set-file-icons t)
		;;(setq dashboard-footer-messages '(&quot;Better than VSCoiso&quot;))
		(setq dashboard-items '(
														;;(agenda . 4)
														;;(recents  . 6)
														(bookmarks . 6)
														(projects . 4)
														))
		)
	:config
	(dashboard-setup-startup-hook))
</code></pre>
<p><a id="org94d8d62"></a></p>
<h2>Lorem ipsom</h2>
<pre><code>(use-package lorem-ipsum
	:ensure t
	)
</code></pre>
<p><a id="org8b8dd50"></a></p>
<h1>Appearance</h1>
<p>Packages to change the appearance  of emacs</p>
<p><a id="orgcdd82c6"></a></p>
<h2>All the icons</h2>
<p>Add fonts with icons that will the use for other packages</p>
<pre><code>(use-package all-the-icons
	:ensure t)
</code></pre>
<p><a id="orga27430c"></a></p>
<h2>Doom Themes</h2>
<p>Add the themes used in the doom emacs</p>
<pre><code>(use-package doom-themes
	:ensure t
	:config
	(load-theme 'doom-tomorrow-night  t))
</code></pre>
<p><a id="org7c1cfba"></a></p>
<h2>Doom modeline</h2>
<p>Add the modeline used in the doom emacs</p>
<pre><code>(use-package doom-modeline
	:ensure t
	:init (doom-modeline-mode 1))
</code></pre>
<p><a id="org6881205"></a></p>
<h2>Page Breaking</h2>
<pre><code>(use-package page-break-lines)
(global-page-break-lines-mode)
</code></pre>
<p><a id="org3c6e36c"></a></p>
<h2>Fonts</h2>
<pre><code>	(set-frame-font &quot;Monofur 11&quot; nil t)
;;(set-default-font “Terminus-9”)
</code></pre>
<p><a id="org008fd6e"></a></p>
<h1>Programming</h1>
<p>This is packages are focues in giving the emacs full ide capabilities</p>
<p><a id="org10be8ce"></a></p>
<h2>lsp-mode'</h2>
<p>Give to emacs the capability to do syntax check in many programming languages</p>
<pre><code>;;  (defun efs/lsp-mode-setup ()
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
	(setq lsp-keymap-prefix &quot;C-c l&quot;)  ;; Or 'C-l', 's-l'
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
</code></pre>
<p><a id="org2596738"></a></p>
<h3>lsp-ui</h3>
<p>This is a package that give a little ui to the lsp</p>
<pre><code>(use-package lsp-ui
	:ensure t
	:config
	(setq lsp-ui-sideline-show-diagnostics t)
	(setq lsp-ui-sideline-show-hover t)
	(setq lsp-ui-sideline-show-code-actions t)
	:hook (lsp-mode . lsp-ui-mode))
</code></pre>
<p><a id="org9b3af88"></a></p>
<h3>lsp-treeemacs</h3>
<pre><code>(use-package lsp-treemacs
	:after lsp)
</code></pre>
<p><a id="orgabc364d"></a></p>
<h2>dap-mode ( Debug Adapter Protocol)</h2>
<p>This extension allow use to use external programs to debug your code like lsp</p>
<pre><code>(use-package dap-mode) 
</code></pre>
<p><a id="orgc621145"></a></p>
<h2>Company-mode</h2>
<p>Give completion functionalities to the lsp</p>
<pre><code>(use-package company
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
				(&quot;&lt;tab&gt;&quot; . company-complete-selection))
	(:map lsp-mode-map
				(&quot;&lt;tab&gt;&quot; . company-indent-or-complete-common))

	:config
	(global-company-mode t)
	(setq company-idle-delay 0.0
				company-minimum-prefix-lengh 1)
	)

(use-package company-box
	:hook (company-mode . company-box-mode))
</code></pre>
<p><a id="org7691a2d"></a></p>
<h2>Elisp</h2>
<p><a id="org443cddb"></a></p>
<h3>ParaEdit</h3>
<pre><code>(use-package paredit
	:ensure t)
(autoload 'enable-paredit-mode &quot;paredit&quot; &quot;Turn on pseudo-structural editing of Lisp code.&quot; t)
(add-hook 'emacs-lisp-mode-hook       #'enable-paredit-mode)
(add-hook 'eval-expression-minibuffer-setup-hook #'enable-paredit-mode)
(add-hook 'ielm-mode-hook             #'enable-paredit-mode)
(add-hook 'lisp-mode-hook             #'enable-paredit-mode)
(add-hook 'lisp-interaction-mode-hook #'enable-paredit-mode)
(add-hook 'scheme-mode-hook           #'enable-paredit-mode)
</code></pre>
<p><a id="orgd2b9f16"></a></p>
<h2>Org</h2>
<p><a id="org9bcdccc"></a></p>
<h3>Basic Config</h3>
<pre><code>(defun efs/org-mode-setup ()
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
	(setq org-ellipsis &quot; ▾&quot;))


;;allow the org files display images
;;(org-toggle-inline-images)
</code></pre>
<p><a id="org155d30c"></a></p>
<h3>Centraliza o texto org mode</h3>
<pre><code>(defun efs/org-mode-visual-fill ()
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
	(push '(&quot;conf-unix&quot; . conf-unix) org-src-lang-modes))
</code></pre>
<p><a id="orgbd99de8"></a></p>
<h3>Add templets for the extencions .el, .py …</h3>
<pre><code>(with-eval-after-load 'org
	;; This is needed as of Org 9.2
	(require 'org-tempo)
	(add-to-list 'org-structure-template-alist '(&quot;sh&quot; . &quot;src shell&quot;))
	(add-to-list 'org-structure-template-alist '(&quot;cpp&quot; . &quot;src cpp&quot;))
	(add-to-list 'org-structure-template-alist '(&quot;el&quot; . &quot;src emacs-lisp&quot;));
	(add-to-list 'org-structure-template-alist '(&quot;py&quot; . &quot;src python&quot;))
	(add-to-list 'org-structure-template-alist '(&quot;js&quot; . &quot;src js&quot;))
	;;C doenst work yet
	;;(add-to-list 'org-structure-template-alist '(&quot;c&quot; . &quot;src C&quot;))
	)
;;remove the massage ask you to exec the command
(setq org-confirm-babel-evaluate nil)
</code></pre>
<p><a id="orgc3a7ec9"></a></p>
<h3>Babel to load</h3>
<pre><code>(org-babel-do-load-languages
 'org-babel-load-languages
 '((emacs-lisp .t)
	 (python .t)
	 (C .t)
	 (css .t)
	 (js .t)
	 (lua .t)
	 ))
</code></pre>
<p><a id="orgbff7358"></a></p>
<h3>Tangle automatic</h3>
<pre><code>;; Automatically tangle our Emacs.org config file when we save it
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
</code></pre>
<p><a id="orgc0e5c43"></a></p>
<h3>Org Agenda</h3>
<pre><code>(setq org-agenda-files
			'(&quot;~/codes/Org/Agenda.org&quot;))
(setq org-agenda-start-with-log-mode t)
(setq org-log-done 'time)
(setq org-log-into-drawer t)
</code></pre>
<p><a id="org28b4191"></a></p>
<h3>Customization</h3>
<pre><code>(setq org-startup-folded t)
(setq org-startup-indented t)
(setq org-startup-with-inline-images t)
(use-package org-bullets
	:ensure t
	:hook (org-mode . org-bullets-mode)
	:custom
	(org-bullets-bullet-list '(&quot;◉&quot; &quot;○&quot; &quot;●&quot; &quot;○&quot; &quot;●&quot; &quot;○&quot; &quot;●&quot;))
	)

(use-package org-superstar
	:ensure t
	:config
	(add-hook 'org-mode-hook (lambda () (org-superstar-mode 1))))
</code></pre>
<p><a id="orga72ce19"></a></p>
<h3>Org Roam</h3>
<p>Not working</p>
<p>+begin<sub>src</sub> emacs-lisp
(use-package org-roam
:ensure t)
#+end<sub>src</sub></p>
<p><a id="org24c1f5c"></a></p>
<h3>Change the sizes of the headers</h3>
<pre><code>;;   Set faces for heading levels
(dolist (face '((org-level-1 . 1.4)
								(org-level-2 . 1.3)
								(org-level-3 . 1.2)
								(org-level-4 . 1.1)
								(org-level-5 . 1.1)
								(org-level-6 . 1.1)
								(org-level-7 . 1.1)
								(org-level-8 . 1.1)))
	(set-face-attribute (car face) nil :font &quot;Monospace&quot; :weight 'regular :height (cdr face)))

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
</code></pre>
<p><a id="org8c797c3"></a></p>
<h3>Add the markdown to the org export</h3>
<pre><code>(require 'ox-md)
</code></pre>
<p><a id="org9799ab5"></a></p>
<h2>Python</h2>
<p><a id="org1cee9be"></a></p>
<h3>Python mode</h3>
<pre><code>(use-package python-mode
	:ensure t
	:hook (python-mode . lsp-deferred)
	:custom
	;; NOTE: Set these if Python 3 is called &quot;python3&quot; on your system!
	;; (python-shell-interpreter &quot;python3&quot;)
	;; (dap-python-executable &quot;python3&quot;)
	(dap-python-debugger 'debugpy)
	:config
	(require 'dap-python))
</code></pre>
<p><a id="org4b35002"></a></p>
<h2>JS- Not useful since I have the web mode</h2>
<p><a id="org26b0bdf"></a></p>
<h3>RJSX</h3>
<pre><code>(use-package rjsx-mode
	:ensure t
	:mode &quot;\\\\.js\\\\'&quot;)
</code></pre>
<p><a id="org37d5802"></a></p>
<h3>Tide</h3>
<pre><code>(defun setup-tide-mode ()
	(interactive)
	(tide-setup)
	(flycheck-mode +1)
	(setq flycheck-check-syntax-automatically '(save mode-enabled))
	(eldoc-mode +1)
	(tide-hl-identifier-mode +1)
	;; company is an optional dependency. You have to
	;; install it separately via package-install
	;; \`M-x package-install [ret] company\`
	(company-mode +1))

;; aligns annotation to the right hand side
(setq company-tooltip-align-annotations t)

;; formats the buffer before saving
(add-hook 'before-save-hook 'tide-format-before-save)


																				;typescripte config
																				;
																				;(require 'web-mode)
(add-to-list 'auto-mode-alist '(&quot;\\\\.tsx\\\\'&quot; . web-mode))
(add-hook 'web-mode-hook
					(lambda ()
						(when (string-equal &quot;tsx&quot; (file-name-extension buffer-file-name))
							(setup-tide-mode))))

;; enable typescript - tslint checker
(flycheck-add-mode 'typescript-tslint 'web-mode)

(add-hook 'typescript-mode-hook #'setup-tide-mode)

(use-package tide
	:ensure t
	:after (rjsx-mode company flycheck)
	:hook (rjsx-mode . setup-tide-mode))
</code></pre>
<p><a id="org418481e"></a></p>
<h2>Typescript</h2>
<p>I am using the LSP theia-ide to install it in your machine run the command in your terminal:</p>
<pre><code>npm i -g typescript-language-server; npm i -g typescript


(use-package typescript-mode
	:mode &quot;\\\\.ts\\\\'&quot;
	:hook
	;;Start the lsp when the enter in the type script mode
	(typescript-mode . lsp-deferred)
	:config
	(setq typescript-indent-level 2)
	;;Installs the dap for node applications
	(require 'dap-node)
	(dap-node-setup))
</code></pre>
<p><a id="orgabd7045"></a></p>
<h2>web-mode</h2>
<pre><code>(setq-default tab-width 2)
(setq indent-tabs-mode nil)
(defun luke/webmode-hook ()
	&quot;Webmode configurations.&quot;
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
	:mode (;;(&quot;\\\\.js\\\\'&quot; . web-mode)
				 (&quot;\\\\.jsx\\\\'&quot; . web-mode)
				 (&quot;\\\\.js\\\\'&quot; . web-mode)
				 ;;(&quot;\\\\.ts\\\\'&quot; . web-mode)
				 (&quot;\\\\.tsx\\\\'&quot; . web-mode)
				 (&quot;\\\\.svelte\\\\'&quot; . web-mode)
				 ;;Was confiliting with lsp
				 ;;(&quot;\\\\.css\\\\'&quot; . web-mode)
				 (&quot;\\\\.html\\\\'&quot; . web-mode))
	:commands web-mode
	:hook (web-mode . luke/webmode-hook)
	)
</code></pre>
<p><a id="orgbb3260a"></a></p>
<h3>Prettier</h3>
<p>Package for formating the webmode</p>
<pre><code>(use-package prettier
	:ensure t
	:hook
	((mhtml-mode json-mode css-mode ts-mode scss-mode rjsx-mode js2-mode web-mode) . prettier-mode))
</code></pre>
<p><a id="org770fc9f"></a></p>
<h2>CSS/SCSS-mode</h2>
<pre><code>(use-package css-mode
	:mode &quot;\\\\.css\\\\'&quot;)

(use-package scss-mode
	:mode &quot;\\\\.scss\\\\'&quot;)
</code></pre>
<p><a id="org9a50705"></a></p>
<h2>JSON-mode</h2>
<pre><code>;; json-mode
(use-package json-mode
	:ensure t)
</code></pre>
<p><a id="org64a6c70"></a></p>
<h2>yalm-mode</h2>
<pre><code>(use-package yaml-mode
	:ensure t
	)
</code></pre>
<p><a id="orga62de5c"></a></p>
<h2>svelte-mode</h2>
<pre><code>(use-package svelte-mode
:ensure t
	)
</code></pre>
<p><a id="org555593e"></a></p>
<h2>Dockerfile-mode</h2>
<pre><code>(use-package dockerfile-mode)
</code></pre>
<p><a id="org0f7770e"></a></p>
<h2>Rust-mode</h2>
<pre><code>(use-package rust-mode
	:ensure t)
</code></pre>
<p><a id="org5ffae15"></a></p>
<h2>format-all</h2>
<p>This package allow us  to format almost all programming automatically</p>
<pre><code>(use-package format-all
	:ensure t
	:hook
	(c-mode . format-all-mode)
	)
(add-hook 'c-mode-hook 'format-all-mode)
</code></pre>
<p><a id="org5c21fe5"></a></p>
<h2>YASnippet</h2>
<p>This package add snippets to the emacs for more info access the <a href="https://github.com/joaotavora/yasnippet">github of the project</a>, if you have difficults to use the snippet toggle the menu bar to the the options using the command M-x toggle-menu-bar-mode-from-frame</p>
<p>#+begin<sub>src</sub> emacs-lisp
(use-package yasnippet
:ensure t
)
(use-package yasnippet-snippets
:ensure t
)
;;Activate the snippets
(yas-global-mode t)</p>
<p>;;Set a key to see all the snippets
(global-set-key (kbd &quot;C-h y&quot;) 'yas-describe-tables)
#+end<sub>src</sub>&gt;</p>
<p><a id="orgbeb3aad"></a></p>
<h1>Update packages</h1>
<pre><code>;; Instalação do auto-update

(use-package auto-package-update
	:custom
	(auto-package-update-interval 7)
	(auto-package-update-prompt-before-update t)
	(auto-package-update-hide-results t)
	:config
	(auto-package-update-maybe)
	(auto-package-update-at-time &quot;21:00&quot;))
</code></pre>
<p><a id="org637c96b"></a></p>
<h1>Key Binds</h1>
<p><a id="orgccde49e"></a></p>
<h2>Evil colemakeDH</h2>
<pre><code>;;Motion keys
(define-key evil-normal-state-map &quot;e&quot; 'evil-next-visual-line)
(define-key evil-normal-state-map &quot;i&quot; 'evil-previous-visual-line)
(define-key evil-normal-state-map &quot;o&quot; 'evil-forward-char)
(define-key evil-normal-state-map &quot;n&quot; 'evil-backward-char)

(define-key evil-visual-state-map &quot;e&quot; 'evil-next-line)
(define-key evil-visual-state-map &quot;i&quot; 'evil-previous-line)
(define-key evil-visual-state-map &quot;o&quot; 'evil-forward-char)
(define-key evil-visual-state-map &quot;n&quot; 'evil-backward-char)

(define-key evil-visual-state-map &quot;y&quot; 'evil-insert)
(define-key evil-visual-state-map &quot;l&quot; 'evil-yank)
(define-key evil-visual-state-map &quot;;&quot; 'evil-open-below )
(define-key evil-visual-state-map &quot;:&quot; 'evil-open-above )

;;Motion keys
;;Functions keys
(define-key evil-normal-state-map &quot;y&quot; 'evil-insert)
(define-key evil-normal-state-map &quot;l&quot; 'evil-yank)
(define-key evil-normal-state-map &quot;;&quot; 'evil-open-below )
(define-key evil-normal-state-map &quot;:&quot; 'evil-open-above )

(global-set-key (kbd &quot;C-c ;&quot;) 'evilnc-comment-or-uncomment-lines)
(global-set-key (kbd &quot;C-c &lt;tab&gt;&quot;) 'yas-expand)
</code></pre>
<p><a id="orgebb3018"></a></p>
<h2>org-babel-tange</h2>
<pre><code>;(global-set-key (kbd &quot;C-l&quot;) (message &quot;ola&quot;))
</code></pre>
<p><a id="org4629c2f"></a></p>
<h2>flyspell, ispell</h2>
<p><a id="org8a26a5d"></a></p>
<h3>flyspelll-prog-mode key binding</h3>
<pre><code>(global-set-key (kbd &quot;&lt;f6&gt;&quot;) 'flyspell-prog-mode)
</code></pre>
<p><a id="org49294f2"></a></p>
<h3>flyspell-key-mode binding</h3>
<pre><code>(global-set-key (kbd &quot;C-&lt;f6&gt;&quot;) 'flyspell-mode)
</code></pre>
<p><a id="org48254cf"></a></p>
<h3>Ispell comments and strings key binding</h3>
<pre><code>(global-set-key (kbd &quot;&lt;f7&gt;&quot;) 'ispell-comments-and-strings)
</code></pre>
<p><a id="orgf96bc7d"></a></p>
<h3>Ispell key binding</h3>
<pre><code>(global-set-key (kbd &quot;C-&lt;f7&gt;&quot;) 'ispell)
</code></pre>
<p><a id="orgf5a4fd1"></a></p>
<h1>Test area</h1>
<p>Area to test new packages without break the emacs</p>
<pre><code>;; Enable ccls for all c++ files, and platformio-mode only
;; when needed (platformio.ini present in project root).
(add-hook 'c++-mode-hook (lambda ()
													 (lsp-deferred)
													 (platformio-conditionally-enable)))

(use-package dotenv-mode
	:ensure t) ; unless installed from a package
(add-to-list 'auto-mode-alist '(&quot;\\\\.env\\\\..*\\\\'&quot; . dotenv-mode)) 
</code></pre>
`;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><article><!-- HTML_TAG_START -->${html}<!-- HTML_TAG_END --></article></main>`;
});
export {
  Page as default
};
