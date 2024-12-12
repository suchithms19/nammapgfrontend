/** @type {import('tailwindcss').Config} */ 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluecus: '#023047',
        lightbluecus:'#4CBFFF',
        textgreycus:'#667085',
        blockblue:'#DFF4FF',
        inblockblue:'#C1DFEF',
        blockpurple:'#EAECFF',
        inblockpurple:'#D8DCF7',
        blockyellow:'#FFF4E2',
        inblockyellow:'#F7E6CB',
        whyblock:'#F3F6F8',
        inwhyblock:'#E9ECF1',

        
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 8s infinite',
      },
    },
  },
  plugins: [],
}
