export default (
  <style jsx global>{`
.host {
  margin: 0 auto;
  padding: 40px 20px;
  max-width: 900px;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera San;
  text-rendering: geometricPrecision;
}

h1, h2, h3 {
  font-weight: 700;
  color: #000;
}
h1 {
  font-size: 16px;
}
h2 {
  font-size: 14px;
}
h1::before {
  content: '# ';
}
h2::before {
  content: '## ';
}
h3::before {
  content: '### ';
}
p, li {
  color: #424242;
  font-size: 13px;
  line-height: 22px;
}

em::before, em::after {
  content: '/';
}

strong::before, strong::after {
  content: '*';
}

li > p {
}

/* not sure if a good idea / used? */
u::before, u::after {
  content: '_';
}
/*
li {
  fontSize: 13px;
}
*/
  `}</style>
);
