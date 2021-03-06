import Header from "../components/Header/Landing";
import Footer from '../components/Footer';
import { Formik, Field } from 'formik'
import { schema } from '../helpers/Validation/LoginValidation'
import { _Button } from '../components/Button/styled';
import colors from '../constants/colors'
import Head from 'next/head'

import { Container, Col, Error } from '../styles/Form'
import { FormikLoginValues } from '../interfaces'
import Title from "../components/Title";
import { Navigate } from "../components/BurgerMenu/styled";

export default function Login(): JSX.Element {
  return (
    <>
    <Head>
      <title>Login</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <Header />
        <Container id='login'>
          <section>
              <span>Bem vindo!</span>
              <Title>Entrar na sua conta</Title>
              <Formik
                initialValues={{ email: '', password: ''}}
                validationSchema={schema}
                validateOnBlur
                onSubmit={(values: FormikLoginValues<string>) => {}}
              >
                {({ dirty, errors, handleSubmit }) => (
                  <>
                    <form onSubmit={handleSubmit}>
                      <Col>
                        <label htmlFor="email">Email</label>
                        <Field name="email" placeholder="John.snow@gmail.com" type="email" />
                        <Error name="email" component="span" />
                      </Col>
                      <Col>
                        <label htmlFor="password">Senha</label>
                        <Field name="password" placeholder="*******" type="password" />
                        <Error name="password" component="span" />
                      </Col>
                    </form>
                    <aside>
                      <_Button bg={colors.green} disabled={!(dirty && errors)}>Entrar</_Button>
                      <_Button bg={colors.blue_hard}>
                        <Navigate href="/register">
                          <a>Cadastre-se</a>
                        </Navigate>
                      </_Button>
                    </aside>
                  </>
                )}
            </Formik>
          </section>
        </Container>
      <Footer id="login"/>
    </>
  )
}
