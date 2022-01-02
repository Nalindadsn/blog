import bcrypt from 'bcryptjs'
const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      role: "admin",
    },
    {
      name: 'User',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      role: "user",
    },
  ],
  playlist: [
    {
      user: '613f3c0b217785ee9b399d9c',
      name: 'playlist1',
      slug: 'playlist-1',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 70,
      type: 'video',
      description: 'A popular shirt',
    },
    {
      user: '613f3c0b217785ee9b399d9c',
      name: 'playlist2',
      slug: 'playlist-2',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 80,
      type: 'video',
      description: 'A popular shirt',
    },
    {
      user: '613f3c0b217785ee9b399d9c',
      name: 'playlist2',
      slug: 'playlist-3',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 80,
      type: 'video',
      description: 'A popular shirt',
    },
    {
      user: '613f3c0b217785ee9b399d9c',
      name: 'playlist2',
      slug: 'playlist-4',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 80,
      type: 'video',
      description: 'A popular shirt',
    },
    {
      user: '613f3c0b217785ee9b399d9c',
      name: 'playlist2',
      slug: 'playlist-5',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 80,
      type: 'video',
      description: 'A popular shirt',
    },
    {
      user: '613f3c0b217785ee9b399d9c',
      name: 'playlist2',
      slug: 'playlist-6',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 80,
      type: 'video',
      description: 'A popular shirt',
    },
    {
      user: '613f3c0b217785ee9b399d9c',
      name: 'playlist2',
      slug: 'playlist-7',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 80,
      type: 'video',
      description: 'A popular shirt',
    },
    {
      user: '613f3c0b217785ee9b399d9c',
      name: 'playlist2',
      slug: 'playlist-8',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 80,
      type: 'video',
      description: 'A popular shirt',
    },
    {
      user: '613f3c0b217785ee9b399d9c',
      name: 'playlist2',
      slug: 'playlist-9',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 80,
      type: 'video',
      description: 'A popular shirt',
    },
    {
      user: '613f3c0b217785ee9b399d9c',
      name: 'playlist2',
      slug: 'playlist-10',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 80,
      type: 'video',
      description: 'A popular shirt',
    },
    {
      user: '613f3c0b217785ee9b399d9c',
      name: 'playlist2',
      slug: 'playlist-11',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 80,
      type: 'video',
      description: 'A popular shirt',
    },
    {
      user: '613f3c0b217785ee9b399d9c',
      name: 'playlist2',
      slug: 'playlist-12',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 80,
      type: 'video',
      description: 'A popular shirt',
    },
    {
      user: '613f3c0b217785ee9b399d9c',
      name: 'playlist2',
      slug: 'playlist-13',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 80,
      type: 'video',
      description: 'A popular shirt',
    },
    {
      user: '613f3c0b217785ee9b399d9c',
      name: 'playlist2',
      slug: 'playlist-14',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 80,
      type: 'video',
      description: 'A popular shirt',
    },
    {
      user: '613f3c0b217785ee9b399d9c',
      name: 'playlist2',
      slug: 'playlist-15',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 80,
      type: 'video',
      description: 'A popular shirt',
    },
  ],
  products: [
      {
        
      user: '613f3c0b217785ee9b399d9c',
        name: 'How to check user availability using PHP and MYSQL(PDO)',
        slug: 'check-user-availability',
        category: '61d08124cc87d287539961ff',
        image: 'https://res.cloudinary.com/masterdevs/image/upload/v1640874093/codeaddon/Check_Email_Availaility-tutorial_php-codeaddon.com_p9otkg.jpg',
        price: 0,
        brand: 'codeaddon',
        rating: 0.0,
        numReviews: 0,
        countInStock: 1,
        description: `
        <p>In this tutorial, we will examine whether e-mail addresses are included in the database without refreshing the page. This can be used for username, email, ID etc.</p>
        <h3 class="text-2xl pt-4">01 Step- Create database </h3> 
      <div class="treeStruc">
<ul>
  <li class="root">
    Root 
  </li>
  <li>
   <i class='fa fa-folder'></i>  includes
    <ul>
      <li><i class='fa fa-sticky-note'></i> config.php</li>
      <li><i class='fa fa-sticky-note'></i> ajax.php</li>
    </ul>  
  </li>
  <li>
   <i class='fa fa-folder'></i>  css
    <ul>
      <li><i class='fa fa-sticky-note'></i> style.css</li>
    </ul>  
  </li>
  <li>
   <i class='fa fa-folder'></i>  js
    <ul>
      <li><i class='fa fa-sticky-note'></i> script.js</li>
    </ul>  
  </li>
  <li><i class='fa fa-sticky-note'></i> index.php</li>

</ul> 
        
    </div> 
<p>First you need to create a table in the database. This table is named users.</p>
<pre class="line-numbers language-markup">
    <code>
--
-- Database: &#96;codeaddon&#96;
--
CREATE TABLE &#96;users&#96; &#40;
  &#96;id&#96; int&#40;11&#41; NOT NULL,
  &#96;email&#96; varchar&#40;100&#41; NOT NULL
&#41; ENGINE&#61;InnoDB DEFAULT CHARSET&#61;utf8&#59;

INSERT INTO &#96;users&#96; &#40;&#96;id&#96;, &#96;email&#96;&#41; VALUES
&#40;1, 'user@example.com'&#41;&#59;

ALTER TABLE &#96;users&#96;
  ADD PRIMARY KEY &#40;&#96;id&#96;&#41;&#59;
ALTER TABLE &#96;users&#96;
  MODIFY &#96;id&#96; int&#40;11&#41; NOT NULL AUTO_INCREMENT, AUTO_INCREMENT&#61;2&#59;
COMMIT&#59;
    </code>
</pre>
<h3 class="text-2xl pt-4">02 Step- Connect to the database </h3>
<p>Now you need to connect with that database. Here I am using mysql extension called PDO.</p>
<code>includes/config.php</code>
<pre>
    <code class="line-numbers language-js">
&#60;?php
$server = "localhost";
$dbname = "codeaddon";
$user = "root";
$pass = "";

// Create connection
try{
   $conn = new PDO("mysql:host=$server;dbname=$dbname","$user","$pass");
   $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
   die('Unable to connect with the database');
}
    </code>
</pre>
<h3 class="text-2xl pt-4">03 Step - User Interface</h3>
<p>The jquery library should be linked to the index.php file. Here the jquery CDN is used. If necessary you can use the downloaded file.</p>
                     <code>index.php</code>
                <pre>
                  <code class='language-markup'>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
   &lt;meta charset="utf-8"&gt;
   &lt;title&gt;Check Email Availaility&lt;/title&gt;
   &lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"&gt;&lt;/script&gt;
   &lt;link rel="stylesheet" type="text/css" href="css/style.css"&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;form action="action.php"  class="form"&gt;
   &lt;h3&gt;- Check Email Availaility -&lt;/h3&gt;
   &lt;div&gt;
      &lt;label for="txt_email"&gt;Email Address&lt;/label&gt;
      &lt;input type="text"  class="textbox" id="txt_email" name="txt_email" placeholder="Enter email address" /&gt;
      &lt;!-- Response --&gt;
      &lt;div id="response" &gt;loading...&lt;/div&gt;
      &lt;input type="submit" name="submit" id="submit"&gt;
   &lt;/div&gt;
   &lt;hr&gt;
   More details : &lt;a href="https://www.codeaddon.com/"&gt;codeaddon.com&lt;/a&gt;
&lt;/form&gt;

&lt;script type="text/javascript" src="js/script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code>
                </pre>


<h3 class="text-2xl pt-4">04 Step - Add Styles</h3>
<code>css/style.css</code>
<pre class="line-numbers language-css">
<code>

    .form{
      max-width: 500px;
      margin: 100px auto;
      background-color: #1F2937;
      color: #fff;
      padding: 15px;
      font-family: Arial, Helvetica, sans-serif;
    }
    .form h3{
      text-align: center;
    }
    .form a{
      color: #F59E0B;
    }


    input[type=email]{
      width:100%;
      border:2px solid #aaa;
      border-radius:4px;
      margin:8px 0;
      outline:none;
      padding:8px;
      box-sizing:border-box;
      transition:.3s;
    }

    input[type=email]:focus{
      border-color:dodgerBlue;
      box-shadow:0 0 8px 0 dodgerBlue;
    }

    input[type=submit] {
       padding: 7px 20px;
       background-color: #7289da;
       border: 2px solid #7289da;
       color: #fff;
    }

    input[type=submit]:disabled {
       background-color: #969bac;
       border: 2px solid #969bac;

    }
    .available{
       background-color: green;
       color: #fff;
       padding: 0 5px;

    }
    .not_available{
       background-color: red;
       color: #fff;
       padding: 0 5px;

    }
    #response{
       padding: 5px 0;
    }
</code>
</pre>



<h3 class="text-2xl pt-4">05 Step - Add Script for Insert Data</h3>
<code>js/script.js</code>
<pre class="line-numbers language-js">
    <code>

      $("#submit").prop("disabled", true);
      $("#txt_email").keyup(function(){

      var email = $(this).val().trim();

      if(email != ''){
        $.ajax({
           url: 'includes/ajax.php',
           type: 'post',
           data: {email:email},
           success: function(response){
            if (response==1) {
              $("#submit").prop("disabled", false);
              $("#response").html("<span  class='available'>Available</span>");
            }else{
              $("#submit").prop("disabled", true);
              $("#response").html("<span  class='not_available'>That email is already in use.<span>");
            }
           }
        });
     }else{
        $("#response").html("Empty...");
              $("#submit").prop("disabled", true);
     }

  });

    </code>
</pre>
<h3 class="text-2xl pt-4">06 Step - PHP script</h3>

<code>includes/ajax.php</code>
<pre class="line-numbers language-js">
    <code>
&#60;?php
include 'config.php';

if(isset($_POST['email'])){
   $email = $_POST['email'];
   $statement = $conn->prepare("SELECT count(*) as cntUser FROM users WHERE email=:email");
   $statement->bindValue(':email', $email, PDO::PARAM_STR);
   $statement->execute(); 
   $count = $statement->fetchColumn();

   $response = 1;
   if($count > 0){
      $response = 0;
   }

   echo $response;
   exit;
}
</code>
</pre>

        
        `,
      },
      {
        user: '613f3c0b217785ee9b399d9c',
        name: 'How to add data in PHP & MYSQL using AJAX?',
        slug: 'insert-data',
        category: '61d08124cc87d287539961ff',
        image: 'https://res.cloudinary.com/masterdevs/image/upload/v1640957582/codeaddon/insert_data_using_phppdo_ajax_tutorial_dtloed.jpg',
        price: 0,
        brand: 'codeaddon',
        rating: 0.0,
        numReviews: 0,
        countInStock: 0,
        description: `

        <p>This tutorial will show you how to enter data using PHP and Ajax without refreshing the page.</p>


        <h3 class="text-2xl">01 Step- Create database </h3> 
      <div class="treeStruc">
<ul>
  <li class="root">
    Root 
  </li>
  <li>
   <i class='fa fa-folder'></i>  includes
    <ul>
      <li><i class='fa fa-sticky-note'></i> config.php</li>
      <li><i class='fa fa-sticky-note'></i> ajax.php</li>
    </ul>  
  </li>
  <li>
   <i class='fa fa-folder'></i>  css
    <ul>
      <li><i class='fa fa-sticky-note'></i> style.css</li>
    </ul>  
  </li>
  <li>
   <i class='fa fa-folder'></i>  js
    <ul>
      <li><i class='fa fa-sticky-note'></i> script.js</li>
    </ul>  
  </li>
  <li><i class='fa fa-sticky-note'></i> index.php</li>

</ul> 
        
    </div> 

<pre class="line-numbers language-mysql">
    <code>

    CREATE TABLE &#96;users&#96; (
      &#96;id&#96; int(11) NOT NULL,
      &#96;email&#96; varchar(100) NOT NULL,
      &#96;full_name&#96; varchar(300) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    
    
    INSERT INTO &#96;users&#96; (&#96;id&#96;, &#96;email&#96;, &#96;full_name&#96;) VALUES
    (1, 'nalinda@example.com', 'Nalinda Dissanayaka');
    
    ALTER TABLE &#96;users&#96;
      ADD PRIMARY KEY (&#96;id&#96;);
    
    ALTER TABLE &#96;users&#96;
      MODIFY &#96;id&#96; int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
    COMMIT;
    
    
    </code>
</pre>
<h3 class="text-2xl">02 Step- Connect to the database </h3>
<code>includes/config.php</code>
<pre>
    <code class="line-numbers language-js">
&#60;?php
$server = "localhost";
$dbname = "codeaddon";
$user = "root";
$pass = "";

// Create connection
try{
   $conn = new PDO("mysql:host=$server;dbname=$dbname","$user","$pass");
   $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
   die('Unable to connect with the database');
}
    </code>
</pre>
                     <code>index.php</code>
                <pre>
                  <code class='language-markup'>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;

&lt;head&gt;
  &lt;meta charset="utf-8" /&gt;
  &lt;link rel="stylesheet" type="text/css" href="css/style.css"&gt;
   &lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"&gt;&lt;/script&gt;

&lt;/head&gt;

&lt;body class=""&gt;


    &lt;form method="post" id="form"&gt;

        &lt;h3&gt;- Insert Data -&lt;/h3&gt;

        &lt;div&gt;
          &lt;label&gt;Full Name&lt;/label&gt;
          &lt;input type="text"  name="i_full_name" id="i_full_name" class="form-control" /&gt;
          &lt;label&gt;Email Address&lt;/label&gt;
          &lt;input type="text"  name="i_email" id="i_email" class="form-control" /&gt;

        &lt;/div&gt;
        &lt;div class=""&gt;
          &lt;input type="submit" name="action" id="action" class="btn btn-success" value="Add" /&gt;
          &lt;span class="loader" style="display: none;"&gt;
            Loading...
          &lt;/span&gt;
          &lt;span id="erm"&gt;&lt;/span&gt;
          &lt;hr&gt;
          More details : &lt;a href="https://www.codeaddon.com/"&gt;codeaddon.com&lt;/a&gt;
        &lt;/div&gt;
    &lt;/form&gt;

&lt;script type="text/javascript" src="js/script.js"&gt;&lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;

                  </code>
                </pre>

<pre class="line-numbers language-css">
    <code>
  #form{
    max-width: 800px;
    margin: 100px auto;
    background-color: #1F2937;
    color: #fff;
    padding: 15px;
    font-family: Arial, Helvetica, sans-serif;
  }
  #form h3{
    text-align: center;
  }
  #form a{
    color: #F59E0B;
  }

  input[type=submit] {
    padding: 7px 20px;
    background-color: #7289da;
    border: 2px solid #7289da;
    color: #fff;
    cursor: pointer;
  }
  #form input[type=text]{
    width:100%;
    border:2px solid #aaa;
    border-radius:4px;
    margin:8px 0;
    outline:none;
    padding:8px;
    box-sizing:border-box;
    transition:.3s;
  }
  .success{
      background-color: green;
      color: #fff;
    padding: 8px;
  }
  .error{
      background-color: red;
      color: #fff;
    padding: 8px;
  }
</code>
</pre>
<code>js/script.js</code>
<pre class="line-numbers language-js">
    <code>

    $(document).on('submit', '#form', function(event){
      event.preventDefault();
      var i_name = $('#i_name').val();
      var i_email = $('#i_email').val();
   
      if(i_name != '' && i_email!='')
      {
        $.ajax({
          url:"includes/ajax.php",
          method:'POST',
          data:new FormData(this),
          contentType:false,
          processData:false,
          beforeSend:function(){
            $('.loader').show();
          },
          success:function(data)
          {
            $('.loader').hide();
            $('#erm').html("<span class='success'>"+data+"</span>");
            $('#form')[0].reset();
          }
        });
      }
      else
      {
        $('#erm').html("<span class='error'>Both Fields are Required</span>");
      }
    });
    </code>
</pre>

<code>includes/ajax.php</code>
<pre class="line-numbers language-js">
    <code>
    &lt;?php
    include('config.php');
    
        $statement = $conn->prepare("
          INSERT INTO users (full_name,email) 
          VALUES (:i_full_name,:i_email)
        ");
        $result = $statement->execute(
          array(
            ':i_full_name'	=>	$_POST["i_full_name"],
            ':i_email'	=>	$_POST["i_email"]
          )
        );
        if(!empty($result))
        {
          echo 'User Added Successfully';
    }
    </code>
</pre>`,
      }
  ],
    categories: [

      {
        name: 'HTML & CSS',
        slug: 'html-css',
        image: 'https://res.cloudinary.com/masterdevs/image/upload/v1639856155/codeaddon/3_uwf0hd.jpg',
        description: 'HTML & CSS',
        type:"article"
      },
      {
        name: 'Javascript',
        slug: 'javascript',
        image: 'https://res.cloudinary.com/masterdevs/image/upload/v1640231976/codeaddon/codeaddon-image-icon2_srky38.jpg',
        description: 'Javascript',
        type:"video"
      },
      {
        name: 'PHP & MYSQL',
        slug: 'php-mysql',
        image: 'https://res.cloudinary.com/masterdevs/image/upload/v1640231976/codeaddon/codeaddon-image-icon2_srky38.jpg',
        description: 'PHP & MYSQL',
        type:"video"
      },
      {
        name: 'Reactjs',
        slug: 'reactjs',
        image: 'https://res.cloudinary.com/masterdevs/image/upload/v1640231976/codeaddon/codeaddon-image-icon2_srky38.jpg',
        description: 'Reactjs',
        type:"video"
      },
      {
        name: 'Nextjs',
        slug: 'nextjs',
        image: 'https://res.cloudinary.com/masterdevs/image/upload/v1640231976/codeaddon/codeaddon-image-icon2_srky38.jpg',
        description: 'Nextjs',
        type:"video"
      },
      // {
      //   name: 'PHP',
      //   slug: 'php',
      //   image: 'https://res.cloudinary.com/masterdevs/image/upload/v1640231976/codeaddon/codeaddon-image-icon2_srky38.jpg',
      //   description: 'PHP',
      //   type:"article"
      // },
      // {
      //   name: 'MYSQL',
      //   slug: 'mysql',
      //   image: 'https://res.cloudinary.com/masterdevs/image/upload/v1640231976/codeaddon/codeaddon-image-icon2_srky38.jpg',
      //   description: 'MYSQL',
      //   type:"video"
      // },
      // {
      //   name: 'HTML',
      //   slug: 'html',
      //   image: 'https://res.cloudinary.com/masterdevs/image/upload/v1640231976/codeaddon/codeaddon-image-icon2_srky38.jpg',
      //   description: 'HTML',
      //   type:"video"
      // },

    ]
}
export default data
