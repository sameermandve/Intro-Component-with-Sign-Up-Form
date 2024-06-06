# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Primary

- Red: hsl(0, 100%, 74%)
- Green: hsl(154, 59%, 51%)

### Accent

- Blue: hsl(248, 32%, 49%)

### Neutral

- Dark Blue: hsl(249, 10%, 26%)
- Grayish Blue: hsl(246, 25%, 77%)

## Typography

### Body Copy

- Font size: 16px

### Font

- Family: [Poppins](https://fonts.google.com/specimen/Poppins)
- Weights: 400, 500, 600, 700

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma.

.hidden {
display: none;
}

#form-box {
padding: 1.5rem 2rem;
background-color: var(--White);
border-radius: 10px;
box-shadow: 0 5px 1px var(--Dark-Blue-shadow);
}

.input-div {
margin-bottom: 1.25rem;
}

.block {
width: 100%;
display: flex;
justify-content: space-between;
border: 2px solid var(--Grayish-Blue);
padding: 0.6rem 0;
border-radius: 8px;
}

.input-div.error .block {
border: 2px solid var(--Red);
}

.block input {
width: 80%;
font-size: 1rem;
border: 0;
padding-left: 0.5rem;
}

.block input:focus {
outline: none;
}

.block input::-webkit-input-placeholder {
font-weight: 500;
}

.block img {
margin-right: 1rem;
}

.error-para {
font-size: 12px;
font-style: italic;
text-align: end;
color: var(--Red);
}

#pass-error {
margin-bottom: 0;
}

#bottom-part {
margin-bottom: 0.5rem;
}

#bottom-part button {
appearance: none;
border: none;
width: 100%;
padding: 0.9rem;
background-color: var(--Green);
color: var(--White);
font-weight: 500;
font-size: 1rem;
border-radius: 5px;
box-shadow: 0 5px 1px var(--Green-shadow);
margin-bottom: 0.8rem;
}

#bottom-part button:hover {
cursor: pointer;
background-color: var(--Green-hover);
}

#bottom-part p {
font-size: 11px;
font-weight: 400;
text-align: center;
color: var(--Grayish-Blue);
margin-bottom: 0.5rem;
}

#bottom-part p a {
text-decoration: none;
font-size: 12px;
font-weight: 600;
color: var(--Red);
}
