import styled from "styled-components"
import hedDumaloq from "./icon/hed-dumaloq.svg"
import hedImage1 from "./icon/hed-image1.svg"
import hedImage2 from "./icon/hed-image2.svg"
import hedImage3 from "./icon/hed-image3.svg"
import bgImage from "./icon/bg-image.png"
import btnImage from "./icon/btn-image.svg"
export default function Header() {
    return (
        <Head>
            <header>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Articles</a>
                    <a href="#">Blog</a>
                </nav>
                <div className="hedDumaloq">
                    <h2>Podcaster</h2>
                </div>

                <div className="hed-images">
                    <div><img src={hedImage1} alt="imageHead" /></div>
                    <div><img src={hedImage2} alt="imageHead" /></div>
                    <div><img src={hedImage3} alt="imageHead" /></div>
                </div>
            </header>
            <section>
                <h1>Night Podcast</h1>
                <p>Listen to our Podcast at night after <br /> a tiring day</p>
                <div className="btn">
                    <img src={btnImage} alt="" />
                    <div>
                        <p>We are now available on </p>
                        <b>Apple podcasts</b>
                    </div>
                </div>
            </section>
        </Head>
    )
}

const Head = styled.div`
    width: 100%;
    height: 100%;
    header{
        width: 100%;
        height: 91px;
        display: flex;
        align-items: center;
        padding:0 108px 0 108px;
        background: #1C0030;
        color: white;
    
        nav{
          display: flex;
          gap: 117px;
          padding: 49px 0 24px 0;
          margin-right: 210px;
            a{
                text-decoration: none;
                font-size: 18px;
                color: white;
            }
        }
        .hedDumaloq{
            position: relative;
            padding: 49px 0 24px 0;
            background-image: url(${hedDumaloq});
            background-position: bottom right;
            background-size: auto;
            background-repeat: no-repeat;
            margin-right: 335px;
                h2{
                font-size: 46px;
                font-family: 'Caveat', cursive;
             }
        }
        .hed-images{
            display: flex;
            padding: 49px 0 24px 0;
            gap: 30px;
            div{
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: #4303A4;
            }
        }
    }
    section{
        width: 100%;
        height: 100%;
        padding: 245px 0 644px 97px;
        text-align: start;
        background-image: url(${bgImage});
        background-size: cover;
        color: white;
        h1{
            font-size: 70px;
        }
        p{
            font-size: 38px;
            margin-bottom: 15px;
        }
        .btn{
            width: 180px;
            height: 50px;
            padding: 9px 11px;
            display: flex;
            gap: 4px;
            background-color: #3531a9;
            border-radius: 10px;
            div{
                display: block;
                p{
                    font-size: 12px;
                    margin: 0;
                }
                b{
                    font-size: 18px;
                }
            }
            
        }
     
    }
    

    
`



