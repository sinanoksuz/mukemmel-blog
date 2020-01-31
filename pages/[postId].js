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
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import  Commentpage  from "./Comment";
import { TextField } from "@material-ui/core";
import Router from 'next/router';
const BlogPost = ({ post,comment }) => (
  <div className="container">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favori.ico" />
    </Head>
    <div className="hero">
    <img className="hero-img" src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"></img>
    <Link href=".."><h1 className="hero-title">Sinan ÖKSÜZ</h1></Link>  
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
        <Link href={post.slug}>
          <a className="blog-title-link">{post.title}</a>
        </Link>
      </h2>
       <div className="blog-text2">
        <ReactMarkdown source={post.details} /> 
      <span className="sharetext">Share:</span><Link href="#">
        <a className="social-share"> <MailIcon  style={{fontSize:[20]}}/>
        </a>
        </Link>
        <Link href="#">
        <a className="social-share"> <FacebookIcon  style={{fontSize:[20]}}/>
        </a>
        </Link>
        <Link href="#">
        <a className="social-share"> <TwitterIcon  style={{fontSize:[20]}}/>
        </a>
        </Link>
        <Link href="#">
        <a className="social-share"> <InstagramIcon  style={{fontSize:[20]}}/>
        </a>
        </Link>
        <div className="blog-date2"> Date:{post.date} &emsp; Subject:{post.subject}</div>
      </div>
     </div><h5>COMMENTS:</h5>
   { comment.map(comment=>(
    <div className="blog-comment">  
    <div className="blog-comname"><span>{comment.id}&emsp;<span>{comment.date}</span></span></div>
      <p className="blog-comparag">{comment.com}</p>
      </div>
   )) }
<div className="blog-textarea">
 Enter Comment:
 <br/>
<TextField className="cm-input" placeholder="your name"></TextField>
 <br/><br/>
 <textarea wrap="off" className="cm-textarea" placeholder="please enter comment"></textarea>
 <Linkb href={post.slug}></Linkb>
</div> 
   <style jsx global>
   {globalStyles}
   </style>
   </div>
);
function onClickHandler(slug,ctext,cname){
  return e=>{
    Router.push(slug)
  }
}
const Linkb=({children,href})=>(
  <button  className="cm-button" onClick={onClickHandler(href)}>
  Add Comment</button>
)
BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
//  http://sinan-blog06.herokuapp.com/
//http://localhost:3000
  const res = await fetch(`http://sinan-blog06.herokuapp.com/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post , comment:json.comment.comments};
};

export default BlogPost;