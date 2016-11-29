import css from 'next/css';

export default css({
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '900px',
  fontFamily: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera San',
  textRendering: 'geometricPrecision',
  '& h1, h2, h3': {
    fontWeight: 700,
    color: '#000',
  },
  '& h1': {
    fontSize: '16px',
  },
  '& h2': {
    fontSize: '14px',
  },
  '& h1::before': {
    content: '\"# \"',
  },
  '& h2::before': {
    content: '\"## \"',
  },
  '& h3::before': {
    content: '\"### \"',
  },
  '& p, li': {
    color: '#424242',
    fontSize: '13px',
    lineHeight: '22px',
  },
  // '& li': {
  //   fontSize: 13
  // },
});
