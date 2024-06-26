import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { FaLinkedinIn, FaInstagram, FaFacebook } from 'react-icons/fa6'
import Slider from 'react-slick'
import Image from 'next/image'

export default function Home() {
  function SimpleSlider() {
    var settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '40px',
      slidesToShow: 2,
      speed: 500,
      dots: true,
    }
    return (
      <Slider {...settings} className="slider-container">
        <div style={{ margin: 20 }}>
          <div
            style={{
              backgroundImage: 'url(/banner-game.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '600px 230px',
              padding: 20,
              color: '#fff',
            }}
          >
            <h3 style={{ marginTop: -10, paddingTop: 20 }}>
              Rota Mineirinho - Supere os <br />
              obstáculos e celebre no festival
            </h3>
            <p>
              Está tudo pronto para você ajudar Maurício
              <br /> a conquistar os ingressos para o festival de
              <br /> música dos seus amigos e também concorrer
              <br /> a essa experiência única.
            </p>
            <button
              style={{
                border: '1px solid green',
                fontWeight: 'bold',
                borderRadius: 5,
                backgroundColor: 'green',
                color: '#fff',
                padding: 10,
                cursor: 'pointer',
              }}
            >
              Acesse
            </button>
          </div>
        </div>
        <div style={{ margin: 20 }}>
          <div
            style={{
              backgroundImage: 'url(/banner-hq.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '600px 230px',
              padding: 20,
              color: '#fff',
            }}
          >
            <h3 style={{ marginTop: -10, paddingTop: 20 }}>
              Mineirinho e memórias - O reencontro
            </h3>
            <p>Confira o encontro de Maurício e seus amigos.</p>
            <button
              style={{
                border: '1px solid green',
                fontWeight: 'bold',
                borderRadius: 5,
                backgroundColor: 'green',
                color: '#fff',
                padding: 10,
                cursor: 'pointer',
              }}
            >
              Acesse
            </button>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        <div style={{ margin: 20 }}>
          <div
            style={{
              backgroundImage: 'url(/banner-movie.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '600px 230px',
              padding: 20,
              color: '#fff',
            }}
          >
            <h3 style={{ marginTop: -10, paddingTop: 20 }}>
              Um brinde à memórias que criamos - Mineirinho.
            </h3>
            <p>
              Três amigos cariocas se reencontram e embarcam
              <br /> numa jornada para conquistar ingressos para um <br />
              festival de música.
            </p>
            <button
              style={{
                border: '1px solid green',
                fontWeight: 'bold',
                borderRadius: 5,
                backgroundColor: 'green',
                color: '#fff',
                padding: 10,
                cursor: 'pointer',
              }}
            >
              Acesse
            </button>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </Slider>
    )
  }

  return (
    <>
      <Head>
        <title>Mineirinho</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id={`${styles.bgGreen}`}>
        <div style={{ display: 'flex', gap: 5, paddingRight: 20 }}>
          <FaInstagram color="#fff" style={{ cursor: 'pointer' }} />
          <FaFacebook color="#fff" style={{ cursor: 'pointer' }} />
          <FaLinkedinIn color="#fff" style={{ cursor: 'pointer' }} />
        </div>
      </div>
      <div id={`${styles.bgGreenLarger}`}>
        <Image src="/logo.png" width={220} height={100} alt="Picture" />
      </div>
      <div style={{ maxWidth: '95%', marginTop: 15 }}>
        <SimpleSlider />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          marginTop: 90,
        }}
      >
        <h3>Uma história de sabor e tradição</h3>

        <Image
          src="/image-video.png"
          width={630}
          height={345}
          alt="Picture"
          style={{ cursor: 'pointer', borderRadius: 20 }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginTop: 90,
          gap: 50,
        }}
      >
        <Image
          src="/image-product.png"
          width={270}
          height={270}
          alt="Picture"
          style={{ borderRadius: 20 }}
        />
        <div>
          <h3>EDIÇÃO LIMITADA - GARRAFA RETRÔ</h3>
          <p>
            Seu passaporte para Festival de Música começa <br />
            com uma garrafa retrô. Garanta já a sua <br />e concorra a ingressos
            VIP&lsquo;S.
          </p>
          <button
            style={{
              border: '1px solid green',
              fontWeight: 'bold',
              borderRadius: 5,
              backgroundColor: 'green',
              color: '#fff',
              padding: 10,
              cursor: 'pointer',
            }}
          >
            COMPRE AGORA
          </button>
        </div>
      </div>
      <div id={`${styles.bgGreenFooter}`}>
        <Image
          style={{ marginLeft: 50 }}
          src="/logo.png"
          width={220}
          height={100}
          alt="Picture"
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p style={{ color: '#fff', fontSize: 26 }}>
            Siga nossas redes sociais
          </p>
          <div style={{ display: 'flex', paddingBottom: 20, gap: 10 }}>
            <FaInstagram
              color="#fff"
              style={{ height: 25, width: 25, cursor: 'pointer' }}
            />
            <FaFacebook
              color="#fff"
              style={{ height: 25, width: 25, cursor: 'pointer' }}
            />
            <FaLinkedinIn
              color="#fff"
              style={{ height: 25, width: 25, cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
