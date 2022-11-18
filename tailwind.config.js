module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ee6611',
          '50': '#fff5eb',
          '100': '#fde6c9',
          '200': '#fac585',
          '300': '#f8a854',
          '400': '#f68828',
          '500': '#ee6611',
          '600': '#d5440b',
          '700': '#af2b0d',
          '800': '#8d2111',
          '900': '#741c11',
        },      
      },
    }
  },
}
