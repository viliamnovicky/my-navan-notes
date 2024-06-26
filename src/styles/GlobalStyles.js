import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --black-900: #242424;
  --black-800: #000;
  --black-700: #222;

    --white: #fff;
    --white-50: #fdf3f3;
    --white-100: #fff9f9;
    --white-900: #fff;
    --white-1000: #fff;

    --transparent: transparent;

    --gray-50: #f1f1f4;
    --gray-100: #e2e2e9;
    --gray-200: #c6c6d2;
    --gray-300: #a9a9bc;
    --gray-400: #8d8da5;
    --gray-500: #70708f;
    --gray-600: #5a5a72;
    --gray-700: #434356;
    --gray-800: #2d2d39;
    --gray-900: #16161d;

    --blue-50: #e8e8fc;
    --blue-100: #d1d1fa;
    --blue-200: #a3a3f5;
    --blue-300: #7575f0;
    --blue-400: #4747eb;
    --blue-500: #2d2dd2;
    --blue-600: #1d1daf;
    --blue-700: #151584;
    --blue-800: #0f0f57;
    --blue-900: #07072c;

    --button-gradient-blue-100: linear-gradient(87.87deg,#0092fe 22.79%,#66bfff 50%,#0092fe 72.79%);
    --button-gradient-blue-200: linear-gradient(87.87deg,#003b66 24.48%,#004c83 34.895%,#005999 50%,#004c83 69.79%,#003b66);
    --button-gradient-blue-200-2: linear-gradient(90deg,#0076cc,#0092fe);
    --button-gradient-blue-300: linear-gradient(89.1deg,#58b9ff,#42c2d7 2484.45deg.77%,#1dd192 48.96%,#42c2d7 73.4%,#58b9ff 0);
    
    --purple-50: #f4e6ff;
    --purple-100: #e9ccff;
    --purple-200: #d399ff;
    --purple-300: #bd66ff;
    --purple-400: #a733ff;
    --purple-500: #9000ff;
    --purple-600: #7400cc;
    --purple-700: #570099;
    --purple-800: #3a0066;
    --purple-900: #1d0033;
    --purple-1000: #f2ebf9;

    --button-gradient-purple-100: linear-gradient(87.48deg,#8039c6 22.62%,#5a37e6 40.11%,#1a00bd 47.81%,#5a37e6 54.11%,#8039c6 72.62%);
    
    --red-50: #fce9e9;
    --red-100: #f9d2d2;
    --red-200: #f2a6a6;
    --red-300: #fc7869;
    --red-400: #fb4b37;
    --red-500: #e61b05;
    --red-600: #c81804;
    --red-700: #961203;
    --red-800: #640c02;
    --red-900: #320601;

    --button-gradient-red: linear-gradient(87.87deg,#f04923 22.79%,#f0354a 38.54%,#f0236d 50%,#f0354a 77.08%,#f04923);
    --bg-button-gradient-red: linear-gradient(87.87deg,#f04923 22.79%,#f0354a 38.54%,#f0236d 50%,#f0354a 77.08%,#f04923);
    
    --orange-50: #fff0e6;
    --orange-100: #ffe1cc;
    --orange-200: #ffc499;
    --orange-300: #ffa666;
    --orange-400: #f83;
    --orange-500: #ff6a00;
    --orange-600: #c50;
    --orange-700: #994000;
    --orange-800: #662b00;
    --orange-900: #331500;
    
    --yellow-50: #fff7e6;
    --yellow-100: #fec;
    --yellow-200: #fd9;
    --yellow-300: #fc6;
    --yellow-400: #fb3;
    --yellow-500: #fa0;
    --yellow-600: #c80;
    --yellow-700: #960;
    --yellow-800: #640;
    --yellow-900: #320;
    
    --green-50: #ecf9f5;
    --green-100: #d9f2ec;
    --green-200: #b3e6d9;
    --green-300: #8cd9c6;
    --green-400: #66ccb3;
    --green-500: #40bf9f;
    --green-600: #339980;
    --green-700: #267360;
    --green-800: #1a4d40;
    --green-900: #0d2620;
    
    --button-gradient-green: linear-gradient(87.48deg,#148f64,#19b57f 62.87%,#1dd192 97.34%);
    --purple-pink-gradient: linear-gradient(107deg,#8f00ff 11.97%,#a30fdf 35.02%,#b920bd 56.51%,#db3679 74.85%,#fb4b37 88.48%);
    --white-gray-gradient: linear-gradient(190.17deg,#fff 47.12%,#c6c6d2 100.02%);
    --blurple-gradient: linear-gradient(95.12deg,#4747eb 0.48%,#a533ff 99.68%);
    --soft-purple-gradient: linear-gradient(180deg,hsla(0,0%,100%,0),#d1d1fa);
    --hot-blue-purple-gradient: linear-gradient(113.66deg,#4747eb 1.06%,#390066);
    --green-blue-gradient: linear-gradient(97.76deg,#8cd9c6 5.76%,#73a3d3 23.24%,#5d75df 37.5%,#4747eb 55.54%);
    --hot-green-purple-gradient: linear-gradient(107.4deg,#40bf9f,#6566cc 57.29%,#8f00ff);
    --gradient-blue-100: linear-gradient(268.63deg,#2fc5f4 16.15%,#00b9f2 58.78%,#01aade 80.26%,#0094d1 99.87%);
    --gradient-announce: linear-gradient(90deg,#0076cc,#0092fe);
    --gradient-blue-200: linear-gradient(90deg,#0076cc,#0092fe);
    --gradient-blue-300: linear-gradient(90deg,#00b9f2,#0094d1 142.03%);
    --gradient-blue-400: linear-gradient(270deg,#00b9f2 1.98%,#0094d1 97.96%);
    --gradient-blue-500: linear-gradient(180deg,#00b9f2,#0472a9);
    --gradient-blue-600: linear-gradient(90deg,#28839e,#00b9f2);
    --gradient-blue-700: linear-gradient(90deg,#006191,#004c73);
    --gradient-blue-purple: linear-gradient(109.99deg,rgba(128,57,198,.4) 29.02%,rgba(153,97,209,.244) 63.34%), linear-gradient(311.02deg,rgba(34,245,171,.6) 4.94%,rgba(34,245,171,.114) 39.15%), linear-gradient(221.86deg,#003b66 11.95%,#0092fe 76.37%);
    --gradient-black-100: linear-gradient(84.45deg,#060000,#222 81.06%,#323030);
    --gradient-black-500: linear-gradient(90deg,#1e3749,#222);
    --gradient-gray-800: linear-gradient(90deg,#e6f0f7,#fff);
    --gradient-gray-900: linear-gradient(45.27deg,#f8f8f8 9.12%,#f6f6f6 72.27%,hsla(210,4%,89%,.5) 96.23%);
    --gradient-white-100: linear-gradient(180deg,#fff 56.25%,#e8e8e9);
    --gradient-lem-100: linear-gradient(90.01deg,#0095ff 0.69%,#00cfdc 99.99%);
    --gradient-half-vertical-gray-500: linear-gradient(var(--gray-500) 60%,#fff 60%);
    --gradient-half-vertical-blue-700: linear-gradient(var(--blue-700) 60%,#fff 60%);
    --gradient-half-vertical-blue-200: linear-gradient(var(--blue-200) 60%,#fff 60%);

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Roboto", sans-serif;
  color: var(--black-900);
  background: linear-gradient(242.45deg, var(--red-50), var(--white-900));
  width: 100vw;
  height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  overflow: hidden;
  position: relative;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
  pointer-events: none;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

*::-webkit-scrollbar {
  width: 1.6rem;
  background: transparent;
}
 
*::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 50rem;
  cursor: pointer;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: transparent;
}

*::selection {
  color: var(--purple-50);
  background: var(--purple-400);
}

/*
FOR DARK MODE

--color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
*/
`;

export default GlobalStyles;
