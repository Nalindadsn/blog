import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document{
    render(){
        return(
            <Html lang="en">
                <Head>
                    <meta name="description" content="Each and every kind of web development tutorial has been found in this educational website."/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <link rel='icon' type='image/png' sizes='50/21' href='https://res.cloudinary.com/masterdevs/image/upload/v1640957932/codeaddon/favicon_mej2py.png'/>
                 
                 </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument