import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/blog">
      <a style={linkStyle}>Blog</a>
    </Link>
    <Link href="/data">
      <a style={linkStyle}>Data</a>
    </Link>
    <Link href="/style">
      <a style={linkStyle}>Style</a>
    </Link>
    <Link href="/quotes">
      <a style={linkStyle}>Quotes</a>
    </Link>
  </div>
);

export default Header;