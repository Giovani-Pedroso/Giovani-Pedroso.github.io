export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["articles/My-emacs-configuration.md","favicon.png","images/blog/emacs.png","images/me.png","images/sites/App.webp","images/sites/Frame 1.jpg","images/sites/cleidesantana.png","images/sites/cleidesantana.webp","images/sites/covid.png","images/sites/covid.webp","images/sites/space-titanic.jpg","images/sites/space-titanic.webp","images/sites/survely.png","images/sites/techday.png","images/sites/techday.webp","images/sites/titanic.jpg","images/sites/titanic.webp","me.png"]),
	mimeTypes: {".md":"text/markdown",".png":"image/png",".webp":"image/webp",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.2636c901.js","app":"_app/immutable/entry/app.274723cd.js","imports":["_app/immutable/entry/start.2636c901.js","_app/immutable/chunks/index.74d5b8c7.js","_app/immutable/chunks/singletons.4e1b6031.js","_app/immutable/entry/app.274723cd.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.74d5b8c7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/blog/my-emacs",
				pattern: /^\/blog\/my-emacs\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/blog/[articleTitle]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"articleTitle","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/projetos",
				pattern: /^\/projetos\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
