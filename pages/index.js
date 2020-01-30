import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import globalStyles from "../src/styles/global.js"
import TwitterIcon from '@material-ui/icons/Twitter';
import { lightBlue,} from "@material-ui/core/colors";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
const Home = ({ posts }) => (

  <div className="container">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="hero">
    <img className="hero-img" src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"></img>
      <h1 className="hero-title">Sinan ÖKSÜZ</h1>
      <div className="hero-social-links">
     
        <TwitterIcon style={{color:lightBlue[500]}}/> 
          <Link href="#">
          <a className="social-link">Twitter</a>
        </Link>
        <LinkedInIcon style={{color:'#0e76a8'}}/>
        <Link href="https://www.linkedin.com/in/sinan-ö-79435714b">
          <a className="social-link">LinkedIn</a>
        </Link>
        <InstagramIcon style={{color:'#405DE6'}}/>
        <Link href="#">
          <a className="social-link">Instagram</a>
        </Link>
      </div>
    </div>

    {posts.map(post => (
      <div className="blog">
      <img className="img-cover"  src={post.img}/>
  
      <div className="blog-sub">
        <h2 className="blog-title">
          <Link href={post.slug}>
            <a className="blog-title-link">{post.title}</a>
    </Link>
        </h2>
        <div className="blog-text">
       
          <ReactMarkdown source={post.details} />
          </div>
         <Link href={post.slug}><button>Read More</button></Link>
         </div>
         <div className="blog-date">Date:{post.date} <span>&nbsp;Subject:{post.subject}</span>
         </div>
   
      </div>
      
    ))}

    <style jsx global>{globalStyles}</style>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  //http://sinan-blog06.herokuapp.com/
  const res = await fetch("http://sinan-blog06.herokuapp.com/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
