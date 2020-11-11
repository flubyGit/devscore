import Header from "../components/Header/Landing";
import Footer from '../components/Footer';
import { Formik, Field } from 'formik'
import { schema } from '../helpers/Validation/ForgotPasswordValidation'
import { _Button } from '../components/Button/styled';
import colors from '../constants/colors'
import Head from 'next/head'
import Link from 'next/link'

import { Container, Col, Error, Navigate } from '../styles/Form'

interface FormikValues {
  email: string
}

export default function ForgotPassword(): JSX.Element {
  return (
    <>
    <Head>
      <title>Esqueci minha senha</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <Header />
        <Container>
          <section>
              <span>As vezes acontece!</span>
              <h2>Digite o seu email para resetar a senha</h2>
              <Formik
                initialValues={{ email: '' }}
                validationSchema={schema}
                validateOnBlur
                onSubmit={(values: FormikValues) => {
                }}
              >
                {({ handleSubmit }) => (
                  <>
                    <form onSubmit={handleSubmit}>
                      <Col>
                        <label htmlFor="email">Email</label>
                        <Field name="email" placeholder="John.snow@gmail.com" type="email" />
                        <Error name="email" component="span" />
                      </Col>
                      <span>Você receberá um email com as instruções para resetar a sua senha</span>
                    </form>
                    <aside>
                      <_Button bg={colors.green}>Recuperar senha</_Button>
                         <_Button bg={colors.blue_hard}>
                        <Link href="/login">
                          <Navigate>Voltar para o login</Navigate>
                        </Link>
                      </_Button>
                    </aside>
                  </>
                )}
            </Formik>
          </section>
        </Container>
      <Footer />
    </>
  )
}