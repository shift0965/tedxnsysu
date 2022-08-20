

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend:{  
      colors: {
      background: '#141414',
      backgroundBright: '#F3C2AF',
      whiteish:'#FFFAFA',
      primary: 'pink',
      red:'#F20C00',
      gray:'gray',
      semi_transparent:'rgba(255,255,255,0.6)'
      },

      spacing: {
        xl_crew_h: '700px',
        l_crew_h: '500px',
        
        minPageHeight : '900px',  
        maxPageHeihgt : '1024px',
      },
    },

    backgroundImage: {
      'crew0' : "url('../public/imgs/crew0_black.png')"
    }
  },
  plugins: [],
}
