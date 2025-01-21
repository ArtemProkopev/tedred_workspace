const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
	transpileDependencies: true,
	chainWebpack: config => {
		// Удаление стандартного правила для babel
		config.module.rules.delete('babel')
	},
})
