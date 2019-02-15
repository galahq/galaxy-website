/**
 * @providesModule RegisterPage
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

import TitleSection from '../../components/shared/TitleSection'
import MaxWidthContainer, {
  UnpaddedRunningTextContainer,
  RunningTextContainer,
  PaddedRunningTextContainer,
} from '../../components/shared/MaxWidthContainer'
import PriceTable from '../../components/PriceTable'
import BaseCallToActionButton from '../../components/CallToActionButton'

import irisLogin from '../../assets/iris-login.png'
import addToCart from '../../assets/add-to-cart.png'

const LogisticsPage = () => (
  <main>
    <TitleSection>
      <RunningTextContainer>
        <h1>Register Now</h1>
        <p>
          The University of Michigan uses the Iris system to process
          registration payments. Please proceed to the secure registration
          portal to complete your registration.
        </p>
      </RunningTextContainer>
      <RunningTextContainer>
        <CallToActionButton
          big
          href="//umich.irisregistration.com/Form/Galaxy2018"
          text="Register with Iris"
        />
      </RunningTextContainer>
    </TitleSection>

    <RunningTextContainer>
      <h2>Registration Instructions</h2>
      <h3>1. Sign in to Iris</h3>
      <figure>
        <Image src={irisLogin} role="presentation" />
        <figcaption>
          You can sign up with your email and a password, or easily log in with
          Facebook, Google, Twitter, or Yahoo if you have an account with those
          services.
        </figcaption>
      </figure>

      <h3>2. Fill out your personal information</h3>
      <p>
        You’ll have the opportunity to indicate what of your team members, if
        any, will also be attending Galaxy.
      </p>

      <h3>3. Add the registration to your cart</h3>
      <figure>
        <Image src={addToCart} role="presentation" />
        <figcaption>
          Select between individual and student registration, as applicable, and
          then add your registration to your cart.
        </figcaption>
      </figure>

      <h3>4. Check out</h3>
      <p>
        Thank you for your interest in attending Galaxy. We can accept payment
        by Visa, Mastercard, American Express, or Discover cards.
      </p>
      <PriceTable />
    </RunningTextContainer>
  </main>
)

export default LogisticsPage

const CallToActionButton = styled(BaseCallToActionButton)`
  margin-bottom: 2rem;
  display: inline-block;
`

const Image = styled.img`
  border-radius: 4px;
  margin-bottom: 0;
`
