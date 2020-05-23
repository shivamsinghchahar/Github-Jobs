const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    require("autoprefixer"),
    process.env.NODE_ENV === 'production' && require("@fullhuman/postcss-purgecss")({
			content: [
				'./src/components/**/*.js',
				'./src/pages/**/*.js',
				'./src/layouts/**/*.js',
				'./src/App.js',
				'./public/index.html',
			],
			defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
		}),
  ],
};
