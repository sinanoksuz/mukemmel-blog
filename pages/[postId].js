import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import globalStyles from '../src/styles/global.js';

import TwitterIcon from '@material-ui/icons/Twitter';
import { lightBlue,} from "@material-ui/core/colors";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { TextareaAutosize } from "@material-ui/core";
const BlogPost = ({ post,comment }) => (
 <body  >
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

    <div className="blog">
      <h2 className="blog-title">
        <Link href="/test">
          <a className="blog-title-link">{post.title}</a>
        </Link>
      </h2>
       <div className="blog-text2">
        <ReactMarkdown source={post.details} />
      </div>
      <div className="blog-date2">Date:{post.date} &emsp; Subject:{post.subject}</div>
       <h5>COMMENT:</h5>
      <div className="blog-comment">
  
      <br/><div>Name:{comment.comments.id}</div>
      <br/>
      
      <p className="comment">{comment.comments.comment}</p>
      </div>
      <div className="blog-textarea">

      <br/><div>Name:</div>
      <br/>
      
      <textarea className="textarea"></textarea>
      </div>
    </div>
   <style jsx global>
   {globalStyles}
   </style>
  </div></body>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
//  http://mukemmel-blogg.herokuapp.com/
//http://localhost:3000
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  
  return { post: json.post , comment:json.comment};
};

export default BlogPost;
