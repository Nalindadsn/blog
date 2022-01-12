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

<div class="container m-auto text-grey-darkest">

   <div class="flex flex-wrap -mx-2 mb-8">
      <div class="w-full md:w-2/2 lg:w-1/2 ">
         <div class=" text-sm text-grey-dark flex items-center justify-center">


      <div class="treeStruc">
<h3><strong>Folder Structure</strong></h3>



<ul class="w-full">
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



         </div>
      </div>
      <div class="w-full md:w-2/2 lg:w-1/2 ">
         <div class=" text-sm text-grey-dark">


<h3><strong>Table structure</strong></h3>
<h4>users</h4>
<table class="w-full leading-normal">
          <thead>
            <tr>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Type
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Extra
              </th>
              
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap mx-5">
                      id
                    </p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap mx-5">int(11)</p>
              </td>
              <td class="px-5 py-5 border-b   text-sm">
                  <span
                    aria-hidden
                    class="px-2 inset-0 bg-amber-500 text-white rounded-full"
                  > AUTO_INCREMENT</span>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap mx-5">
                      id
                    </p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap mx-5">varchar(100)</p>
              </td>
              <td class="px-5 py-5 border-b   text-sm">
              </td>
            </tr>
          </tbody>
        </table>
         </div>
      </div>
   </div>



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
      },
      {
        user: '613f3c0b217785ee9b399d9c',
        name: 'How to get data from db using MySQL, PHP and PDO with AJAX with jQuery datatable',
        slug: 'fetch-data-with-datatable',
        category: '61d08124cc87d287539961ff',
        image: 'https://res.cloudinary.com/masterdevs/image/upload/v1641991518/codeaddon/how_to_get_data_from_db_using_MySQL_PHP_and_PDO_with_AJAX_with_jQuery_datatable_ipogpl.png',
        price: 0,
        brand: 'codeaddon',
        rating: 0.0,
        numReviews: 0,
        countInStock: 0,
        description: `

        <p>.</p>


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

    --
    -- Table structure for table &#96;accounts&#96;
    --
    
    CREATE TABLE &#96;accounts&#96; (
      &#96;id&#96; int(11) NOT NULL,
      &#96;created_at&#96; timestamp NOT NULL DEFAULT current_timestamp(),
      &#96;measurement_no&#96; int(11) NOT NULL,
      &#96;no_beneficiaries&#96; int(5) NOT NULL,
      &#96;phone_fixed&#96; varchar(15) NOT NULL,
      &#96;phone_mobile&#96; varchar(15) NOT NULL,
      &#96;status&#96; int(1) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    
    --
    -- Dumping data for table &#96;accounts&#96;
    --
    
    INSERT INTO &#96;accounts&#96; (&#96;id&#96;, &#96;created_at&#96;, &#96;measurement_no&#96;, &#96;no_beneficiaries&#96;, &#96;phone_fixed&#96;, &#96;phone_mobile&#96;, &#96;status&#96;) VALUES
    (65, '2021-08-26 06:40:09', 111111, 6, '0254575444', '0711111111', 1),
    (66, '2021-09-03 11:27:42', 222222, 5, '0114455444', '0711111111', 1),
    (67, '2021-10-14 12:25:53', 456445, 3, '0114455444', '0711111111', 1),
    (68, '2021-10-14 15:25:26', 456478, 3, '0114455444', '0711111111', 1),
    (69, '2021-10-14 17:28:40', 456477, 4, '0114455444', '0711111111', 1),
    (70, '2021-10-14 17:31:47', 555555, 1, '0114455444', '0711111111', 1),
    (71, '2021-10-15 01:22:26', 456472, 5, '0114455444', '0711111111', 1),
    (72, '2021-10-15 04:06:42', 454564, 4, '0114455444', '0711111111', 1),
    (73, '2021-10-15 04:08:06', 349777, 3, '0114455444', '0711111111', 0),
    (74, '2021-10-15 04:59:37', 343456, 1, '0114455444', '0711111111', 0),
    (75, '2022-01-12 10:23:32', 555555, 3, '0114455444', '0711111111', 0),
    (76, '2022-01-12 15:21:21', 456789, 6, '0114455444', '0711111111', 1);
    ALTER TABLE &#96;accounts&#96;
      ADD PRIMARY KEY (&#96;id&#96;),
      ADD UNIQUE KEY &#96;id_2&#96; (&#96;id&#96;),
      ADD KEY &#96;id&#96; (&#96;id&#96;);
    
    ALTER TABLE &#96;accounts&#96;
      MODIFY &#96;id&#96; int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;
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

&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;

&lt;head&gt;
  &lt;meta charset="utf-8" /&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"&gt;
  &lt;title&gt;
    Admin
  &lt;/title&gt;
  &lt;link rel="stylesheet" type="text/css" href="css/style.css"&gt;
  &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"&gt;
  &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"&gt;

  &lt;!-- DataTables --&gt;
  &lt;link rel="stylesheet" href="https://cdn.datatables.net/1.11.3/css/dataTables.bootstrap5.min.css"&gt;
  &lt;link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.2.9/css/responsive.dataTables.min.css"&gt;
  &lt;link rel="stylesheet" href="https://cdn.datatables.net/buttons/2.1.1/css/buttons.bootstrap5.min.css"&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;br&gt;
    &lt;div class="container"&gt;
      &lt;h1 class="text-center"&gt;how to get data from db using MySQL, PHP and PDO with AJAX with jQuery datatable&lt;/h1&gt;
      &lt;div class="table-responsive"&gt;
        &lt;table id="elec_data" class="table table-bordered table-striped"&gt;
          &lt;thead&gt;
            &lt;tr&gt;
              &lt;th&gt;Accounts Number &lt;/th&gt;
              &lt;th&gt;Meetar Number &lt;/th&gt;
              &lt;th&gt;No of Beneficiaries&lt;/th&gt;
              &lt;th&gt;Contact Number&lt;/th&gt;
              &lt;th&gt;Mobile Number&lt;/th&gt;
              &lt;th&gt;Created at&lt;/th&gt;
            &lt;/tr&gt;
          &lt;/thead&gt;
        &lt;/table&gt;        
      &lt;/div&gt;
    &lt;/div&gt;

&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"&gt;&lt;/script&gt;

&lt;script src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"&gt;&lt;/script&gt;
&lt;script src="https://cdn.datatables.net/1.11.3/js/dataTables.bootstrap5.min.js"&gt;&lt;/script&gt;
&lt;script src="https://cdn.datatables.net/responsive/2.2.9/js/dataTables.responsive.min.js"&gt;&lt;/script&gt;

&lt;script src="https://cdn.datatables.net/buttons/2.1.1/js/dataTables.buttons.min.js"&gt;&lt;/script&gt;
&lt;script src="https://cdn.datatables.net/buttons/2.1.1/js/buttons.bootstrap5.min.js"&gt;&lt;/script&gt;
&lt;script src="https://cdn.datatables.net/buttons/2.1.0/js/buttons.html5.min.js"&gt;&lt;/script&gt;
&lt;script src="https://cdn.datatables.net/buttons/2.1.0/js/buttons.print.min.js"&gt;&lt;/script&gt;
&lt;script src="https://cdn.datatables.net/buttons/2.1.0/js/buttons.colVis.min.js"&gt;&lt;/script&gt;

&lt;script src="js/script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
                  </code>
                </pre>

<pre class="line-numbers language-css">
    <code>
    #elec_data_wrapper div.dt-buttons.btn-group.flex-wrap{
      max-width: 300px;
    }
    .dt-buttons button{
      background-color: #1F2937;
    }
    
     #elec_data_length > label{
      float: right;
    }
    
    #elec_data_previous > a, #elec_data_next > a,#elec_data_paginate > ul > li.paginate_button.page-item > a{
      width: auto;
      height: auto;
      padding: 10px;
      border-radius: 0 !important;
      background-color: #1F2937;
      color: #fff;
    
    
    }
    #elec_data_paginate > ul > li.paginate_button.page-item.active > a{
    
      background-color: #fff;
      color: #1F2937;
    }
    .page-item.active .page-link{
      border-color: #1F2937;
    }    
</code>
</pre>
<code>js/script.js</code>
<pre class="line-numbers language-js">
    <code>
    var dataTable = $('#elec_data').DataTable({
      "paging": true,
      "ordering": true,
      "info": true,
      "autoWidth": false,
      "responsive": true,
      "processing":true,
      "serverSide":true,
      "order":[],
    "ajax":{
      url:"includes/ajax.php",
      type:"POST"
    },
      dom: 'lBfrtip',
      buttons: ['copy','csv','print'],
  });    </code>
</pre>

<code>includes/ajax.php</code>
<pre class="line-numbers language-js">
    <code>
    &lt;?php
    include('config.php');
    
    
    function get_total_all_records($conn)
    {
      $statement = $conn->prepare("SELECT * FROM  accounts");
      $statement->execute();
      $result = $statement->fetchAll();
      return $statement->rowCount();
    }
    
    
    $query = '';
    $output = array();
    $query .= 'SELECT * FROM  accounts WHERE ';
    if(isset($_POST["search"]["value"]))
    {
      $query .= '  accounts.id	 LIKE "%'.$_POST["search"]["value"].'%" ';
    }
    if(isset($_POST["order"]))
    {
      $query .= 'ORDER BY '.$_POST['order']['0']['column'].' '.$_POST['order']['0']['dir'].' ';
    }
    else
    {
      $query .= 'ORDER BY accounts.id DESC ';
    }
    if($_POST["length"] != -1)
    {
      $query .= 'LIMIT ' . $_POST['start'] . ', ' . $_POST['length'];
    }
    $statement = $conn->prepare($query);
    $statement->execute();
    $result = $statement->fetchAll();
    $data = array();
    $filtered_rows = $statement->rowCount();
    foreach($result as $row)
    {
      $sub_array = array();
    
       if ($row['status']==0) {
         $sub_array[] =  $row["id"].' <span class="badge bg-danger">Inactive</span>';
       }else{
         $sub_array[] =  $row["id"].' <span class="badge bg-success">Active</span>';
       }
       $sub_array[] = $row["measurement_no"];
       $sub_array[] = $row["no_beneficiaries"];
       $sub_array[] = $row["phone_fixed"];
       $sub_array[] = $row["phone_mobile"];
      if (date('Y-m-d') == date('Y-m-d', strtotime($row["created_at"]))) {
         $sub_array[] = '<i class="fa fa-circle text-success"></i> '.$row["created_at"];
      }else{
         $sub_array[] = $row["created_at"];
      }
    
    $data[] = $sub_array;
    }
    $output = array(
      "draw"				=>	intval($_POST["draw"]),
      "recordsTotal"		=> 	$filtered_rows,
      "recordsFiltered"	=>	get_total_all_records($conn),
      "data"				=>	$data
    );
    echo json_encode($output);
    ?&gt;
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
