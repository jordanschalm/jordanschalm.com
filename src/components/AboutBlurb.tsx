import { A, P } from '@/components/defaults'

export default function AboutBlurb() {
  return (
    <>
      <P>
        👋🏻 Hi, my name is Jordan. I'm a software engineer based in Vancouver,
        BC. I work on the Core Protocol team at the{' '}
        <A href="https://flow.com">Flow Foundation</A>, building fault-tolerant
        distributed systems.
      </P>
      <P>
        Previously, I helped operate{' '}
        <A href="https://www.ubclaunchpad.com">UBC Launch Pad</A>, co-created{' '}
        <A href="https://www.cryptokitties.co">CryptoKitties</A> and taught for
        the{' '}
        <A href="https://masterdatascience.ubc.ca">Master of Data Science</A>{' '}
        program at <A href="https://ubc.ca">UBC</A>.
      </P>
      <P>
        You can find my open-source work on{' '}
        <A href="https://github.com/jordanschalm">GitHub</A>. The best way to
        get in touch is via <A href="mailto:hark-adagio-08@icloud.com">email</A>
        .
      </P>
    </>
  )
}
