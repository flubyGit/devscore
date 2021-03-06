import React from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header/Landing"

import { Container } from "../../styles/FinishTest"
import Title from "../../components/Title"
import Checkbox from "../../components/Checkbox"

import { mappedFourExperiences } from "../../helpers/Screens"
import Head from "next/head"
import Image from "next/image"

export default function FinishTest(): JSX.Element {
  return (
    <>
      <Head>
        <title>Teste finalizado</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Container>
        <section>
          <Title>Você finalizou o teste</Title>
          <p>Não se preocupe o seu resultado já foi enviado para a empresa</p>
          <span>
            <strong>Seu score é </strong>
          </span>
          <span>730/1000</span>
        </section>
        <section>
          <figure>
            <Image
              src="/images/scoreMeter.png"
              alt="Imagem ilustrativa de um medidor de score"
              width={500}
              height={500}
            />
          </figure>
        </section>
        <section>
          <h5>Como foi sua experiência?</h5>
          <aside>
            {mappedFourExperiences.map(({ checked }, index: number) => (
              <Checkbox key={index + 1} number={index + 1} checked={checked} />
            ))}
          </aside>
        </section>
      </Container>
      <Footer id="finish_test" />
    </>
  )
}
