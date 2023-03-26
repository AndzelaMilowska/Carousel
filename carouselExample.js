import {Carousel} from "./Carousel.js";

const carousel = new Carousel("testCarousel", [["#1b1112", "https://fastly.picsum.photos/id/551/720/350.jpg?hmac=zzTGmrJTKya-dIbUkROkDX-vPWYpTbSVAAiCqkwPbps", "This is my heading #1", "and this is my paragrapg #1", "https://www.google.com/", "#ffffff"], ["#008873", "https://fastly.picsum.photos/id/1021/720/350.jpg?hmac=vEBVM9wVZ8paNr51usDJT8i0_nZKdNYsyy3WOqtnAsg", "This is my heading #2", "and this is my paragrapg #2", "https://www.google.com/", "#ffffff"],["#6b6049", "https://fastly.picsum.photos/id/178/720/350.jpg?hmac=rwFvWFRYBIqt-70efLsKczi0Kkq_iEfDLmQ4tpsvJp4", "This is my heading #3", "and this is my paragrapg #3", "https://www.google.com/", "#ffffff"], ["#b05238", "https://fastly.picsum.photos/id/936/720/350.jpg?hmac=qgq2dcYHm8Nf-zjhGL0ejWlI5KKh93UOklDHky8CHNQ", "This is my heading #4", "and this is my paragrapg #4", "https://www.google.com/", "#ffffff"], ["#6c6c82", "https://fastly.picsum.photos/id/213/720/350.jpg?hmac=-W_LYrcUc7VNOT8Ychf7kbpezCXQForsXE0GFK5AaXQ", "This is my heading #5", "and this is my paragrapg #5", "https://www.google.com/", "#ffffff"], ["#978872", "https://fastly.picsum.photos/id/283/720/350.jpg?hmac=Tb6KjvgST9HRlfi9TL96rZTCTsfxuL9qTqtTaZSt9sI", "This is my heading #6", "and this is my paragrapg #6", "https://www.google.com/", "#ffffff"],["#0f2c60", "https://fastly.picsum.photos/id/74/720/350.jpg?hmac=2E11n-WQ_QcyJwihRV8VjhQzh3NAmFdN8r9ihCTntlU", "This is my heading #7", "and this is my paragrapg #7", "https://www.google.com/", "#ffffff"], ["#aea293", "https://fastly.picsum.photos/id/1000/720/350.jpg?hmac=qJGB3rMdScGwZTeNO5KXqh9UcMNpAoUP_3MOwyLHrkQ", "This is my heading #8", "and this is my paragrapg #8", "https://www.google.com/", "#ffffff"]], "https://assets.allegrostatic.com/metrum/icon/arrowhead-9148b8f39c.svg", "Gill Sans");

carousel.initialize();