import css from 'styled-jsx/css'

export default css.global`
/*index.js */
body{  
  background-image: linear-gradient(135deg,rgba(72,319,251,0.6),rgba(52,31,151,0.6));
    background-position: center;
    background-repeat: repeat-y;
    background-size: cover; 
    margin:0 auto;
    height:100%;
    
}

.container {
    max-width: 70%;
    width: 100%;
    background-color:rgba(236,240,241,0.4);
    margin: 0 auto;
    color:#273c75;
    padding:50px;
    
  }

  .hero {
    color:black;
    text-align: center;
  }
  .hero-img{
    width:40px;
    height:40px;
    margin-right:10px;
    border-radius:25px;

  }

  .social-link {
    margin-right: 8px;
    vertical-align:top;
  }

  .hero-title {
    font-size: 48px;
    vertical-align:center;
    display:inline-block;
  }

 

  a {
    color: #273c75;
    margin-left:10px;
    text-decoration: none;
  }
  .blog-text{
    color#273c75;
    width: 60%;
    margin:0 auto;
    margin-right:0;
    max-height:150px;
    padding:7px;
    overflow:hidden;
    text-overflow: ellipsis;
    text-align:justify;
    border-radius:10px;
    border: 1px solid #636e72;

} 

.blog-sub {
  text-align:right;
  margin:0 auto;

}
.blog-title{
  text-align:center;
}
button{
    background-color:#00b894;
    display:inline-block;
    margin-left:70px;
    margin-top:10px;
    padding:4px;
    font-size:14px;
    border:none;
    text-decoration:none;
    cursor:pointer;
    color:white;
    border-radius:5px;
}
button:hover
{
    background-color:#00cec9;
  }
  .img-cover{
    margin-top:5%;
    width:35%;  
    margin:0 auto;
    float:left;
    padding-bottom:10px;
    height:30%;
    margin-top:5%;
    max-height:200px;
  }
  .blog-date{
    clear:both;
    border-top:0.5px solid black;
    margin-top:5%;
    display:block;
    text-align:right;
    color:black;
    opacity:0.2;

  }
//postid.js
.blog-text2{
  color:#8f8f8f;
  margin:20px;
  padding:7px;
  text-align:justify;
  border-radius:10px;
  border: 1px solid #636e72;
}
.blog-date2{
  clear:both;
  border-bottom:0.5px solid black;
  margin-top:5%;
  display:block;
  text-align:right;
  color:black;
  opacity:0.2;
}

//minimal size phone or tablet

@media only screen and (max-width:700px){
.blog-sub button,.blog-text{
display:none;
}
.blog-title a{
  display:block;
  position:relative;
  margin 0 auto;
  text-align:center;
  padding:5px;
  border-top:1px solid rgba(0,0,0,0.2);
  
  
}
.img-cover{
  
  width:100%;
}
.blog-date{
  display:none;
}
}
//comment and text area

  
`