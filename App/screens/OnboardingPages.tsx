import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { SvgProps } from 'react-native-svg'

import ScanShare from '../assets/img/scan-share.svg'
import SecureImage from '../assets/img/secure-image.svg'
import { Colors } from '../theme'

import { OnboardingStyleSheet } from './Onboarding'
import onboarding1 from './onboarding1.js'
import onboarding2 from './onboarding2.js'
import onboarding3 from './onboarding3.js'
import onboarding4 from './onboarding4.js'
//import onboarding5 from './onboarding5.js'

import { Button } from 'components'
import { ButtonType } from 'components/buttons/Button'
import { GenericFn } from 'types/fn'

const imageDisplayOptions = {
  fill: Colors.text,
  height: 180,
  width: 180,
}

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 180,
  },
})

export const carousel: OnboardingStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  carouselContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.background,
  },
  pagerContainer: {
    flexShrink: 2,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 35,
  },
  pagerDot: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.primary,
  },
  pagerPosition: {
    position: 'relative',
    top: 0,
  },
  pagerNavigationButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
})

const defaultStyle = StyleSheet.create({
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.text,
  },
  bodyText: {
    flexShrink: 1,
    fontSize: 18,
    fontWeight: 'normal',
    color: Colors.text,
  },
  point: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
    marginRight: 20,
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
})

const customPages = (onTutorialCompleted: GenericFn) => {
  return (
    <>
      <View style={{ marginTop: 33, alignItems: 'center' }}>
        <Image style={styles.image} source={require('../assets/img/onboarding-5.png')} />
      </View>
      <View style={{ marginLeft: 10, marginRight: 10, marginTop: 33 }}>
        <Text style={[defaultStyle.headerText, { fontSize: 23 }]}>Your credentials belongs to you only.</Text>
        <Text style={[defaultStyle.bodyText, { marginTop: 20 }]}>
          Your credentials are stored only on your device. Your personal information can’t be seen by anyone, not even Knoct.
        </Text>
      </View>
      <View style={{ marginTop: 'auto', marginBottom: 20, paddingHorizontal: 20 }}>
        <Button
          title={'Get Started!'}
          accessibilityLabel={'Get Started'}
          onPress={onTutorialCompleted}
          buttonType={ButtonType.Primary}
        />
      </View>
    </>
  )
}

const guides: Array<{ image: React.FC<SvgProps>; title: string; body: string }> = [
  {
    image: onboarding1,
    title: 'Take control of your own identity.',
    body: 'Swipe through these slides for a run-down if this app, or click “Get Started” to drive right in.',
  },
  {
    image: onboarding2,
    title: 'Easily connect using QR Code.',
    body: 'Connect with other organizations and users to begin exchanging information.',
  },
  {
    image: onboarding3,
    title: 'Collect credentials issued by different organisations.',
    body: 'These credentials are pieces of information to prove your identity.',
  },
  {
    image: onboarding4,
    title: 'Securely share your credentials.',
    body: 'Others can request from you throuth a proof request. You control what and with whom you share your information.',
  },
]

const createPageWith = (image: React.FC<SvgProps>, title: string, body: string) => {
  return (
    <>
      <View style={{ marginTop: 33, alignItems: 'center' }}>{image(imageDisplayOptions)}</View>
      <View style={{ marginLeft: 10, marginRight: 10, marginTop: 33, alignItems: 'center' }}>
        <Text style={[defaultStyle.headerText, { fontSize: 23 }]}>{title}</Text>
        <Text style={[defaultStyle.bodyText, { marginTop: 20 }]}>{body}</Text>
      </View>
    </>
  )
}

export const pages = (onTutorialCompleted: GenericFn): Array<Element> => {
  return [...guides.map((g) => createPageWith(g.image, g.title, g.body)), customPages(onTutorialCompleted)]
}
